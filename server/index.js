const usernameGen = require("username-generator");
const express = require("express");
const logger = require("./utils/logger");
const app = express();
const { SOCKET_EVENT } = require("./consts.js");
const http = require("http").createServer(app);
const io = require("socket.io")(http, {
  cors: {
    origin: "*",
  },
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("../client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "dist", "build", "index.html"));
  });
}

const users = {};
const usersList = (usersObj) => {
  const list = [];
  Object.keys(usersObj).forEach((username) => {
    list.push({ username, timestamp: usersObj[username].timestamp });
  });
  return list;
};
io.on("connection", (socket) => {
  //generate username against a socket connection and store it
  let username = usernameGen.generateUsername("-");
  socket.on(SOCKET_EVENT.TRY_CONNECT, ({ savedUsername }) => {
    if (savedUsername != "NEW_USER") username = savedUsername;

    if (!users[username]) {
      users[username] = { id: socket.id, timestamp: new Date().toISOString() };
    }
    logger.log(SOCKET_EVENT.CONNECTED, username);
    // send back username
    socket.emit(SOCKET_EVENT.CONNECTED, username);
    // send online users list
    io.sockets.emit(SOCKET_EVENT.USERS_LIST, usersList(users));
  });

  socket.on(SOCKET_EVENT.DISCONNECTED, () => {
    if (!users[username]) return;
    // remove user from the list
    delete users[username];
    // send current users list
    io.sockets.emit(SOCKET_EVENT.USERS_LIST, usersList(users));
    logger.log(SOCKET_EVENT.DISCONNECTED, username);
  });

  socket.on(SOCKET_EVENT.SEND_REQUEST, ({ username, signal, to }) => {
    // tell user that a request has been sent
    io.to(users[to].id).emit(SOCKET_EVENT.REQUEST_SENT, {
      signal,
      username,
    });
    logger.log(SOCKET_EVENT.SEND_REQUEST, username);
  });

  socket.on(SOCKET_EVENT.ACCEPT_REQUEST, ({ signal, to }) => {
    // tell user the request has been accepted
    io.to(users[to].id).emit(SOCKET_EVENT.REQUEST_ACCEPTED, { signal });
    logger.log(SOCKET_EVENT.ACCEPT_REQUEST, username);
  });

  socket.on(SOCKET_EVENT.REJECT_REQUEST, ({ to }) => {
    // tell user the request has been rejected
    io.to(users[to].id).emit(SOCKET_EVENT.REQUEST_REJECTED);
    logger.log(SOCKET_EVENT.REJECT_REQUEST, username);
  });
});

const port = process.env.PORT || 7000;
http.listen(port);
logger.log("server listening on port", port);
