(this.webpackJsonpkalsu=this.webpackJsonpkalsu||[]).push([[0],{100:function(e,t){},102:function(e,t){},20:function(e,t){e.exports.SOCKET_EVENT={TRY_CONNECT:"try_connect",CONNECTED:"connected",DISCONNECTED:"disconnect",USERS_LIST:"users_list",REQUEST_SENT:"request_sent",REQUEST_ACCEPTED:"request_accepted",REQUEST_REJECTED:"request_rejected",SEND_REQUEST:"send_request",ACCEPT_REQUEST:"accept_request",REJECT_REQUEST:"reject_request"}},238:function(e,t,n){},239:function(e,t,n){},240:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),r=n(61),i=n.n(r),o=(n(39),n(43)),a=n(62),u=n(12),j=(n(74),n(5)),l=n(66),O=n(44),b=n.n(O),d=n(35),h=n(4);function g(e){var t=e.myUsername,n=e.timestamp,c=e.sendRequest,s=e.disabled,r=e.subtext,i=e.color;return Object(h.jsx)(j.Box,{style:i?{backgroundColor:i}:{},children:Object(h.jsxs)(j.Media,{children:[Object(h.jsx)(j.Media.Item,{renderAs:"figure",position:"left",children:Object(h.jsx)(j.Image,{rounded:!0,size:64,alt:"64x64",src:"data:image/svg+xml;utf8,".concat(Object(d.generateFromString)(t))})}),Object(h.jsx)(j.Media.Item,{children:Object(h.jsx)(j.Content,{children:Object(h.jsxs)("p",{children:[Object(h.jsx)("strong",{children:t})," ",Object(h.jsx)("small",{children:n}),Object(h.jsx)("br",{}),"function"===typeof c&&Object(h.jsx)(j.Button,{disabled:s,fullwidth:!0,rounded:!0,color:"info",onClick:function(){c(t)},children:"Share File"}),r]})})})]})})}function f(e){var t=e.peerUsername,n=e.acceptRequest,c=e.rejectRequest;return Object(h.jsxs)(j.Card,{style:{margin:"10px auto"},children:[Object(h.jsx)(j.Card.Header,{children:Object(h.jsx)(j.Card.Header.Title,{children:"Share Request"})}),Object(h.jsx)(j.Card.Content,{children:Object(h.jsxs)(j.Media,{children:[Object(h.jsx)(j.Media.Item,{renderAs:"figure",position:"left",children:Object(h.jsx)(j.Image,{rounded:!0,size:64,alt:"64x64",src:"data:image/svg+xml;utf8,".concat(Object(d.generateFromString)(t))})}),Object(h.jsx)(j.Media.Item,{children:Object(h.jsx)(j.Content,{children:Object(h.jsxs)("p",{children:[Object(h.jsx)("strong",{children:t}),Object(h.jsx)("br",{}),t," wants to send you a file"]})})})]})}),Object(h.jsxs)(j.Card.Footer,{children:[Object(h.jsxs)(j.Card.Footer.Item,{children:[" ",Object(h.jsx)(j.Button,{color:"success",rounded:!0,onClick:n,fullwidth:!0,children:"Accept"})]}),Object(h.jsx)(j.Card.Footer.Item,{children:Object(h.jsx)(j.Button,{color:"danger",rounded:!0,onClick:c,fullwidth:!0,children:"Reject"})})]})]})}var E=n(38),x=n(67);n(238);function m(e){var t=e.setFile,n=Object(c.useState)(""),s=Object(u.a)(n,2),r=s[0],i=s[1],o=Object(x.a)({multiple:!1,onDropAccepted:function(e){t(e[0]),e[0].type.startsWith("image")?i(URL.createObjectURL(e[0])):i("https://cdn-icons-png.flaticon.com/512/4305/4305524.png")}}),a=o.getRootProps,l=o.getInputProps;return Object(c.useEffect)((function(){return function(){URL.revokeObjectURL(r)}}),[r]),Object(h.jsxs)("div",Object(E.a)(Object(E.a)({},a({className:"dropzone"})),{},{children:[Object(h.jsx)("input",Object(E.a)({},l())),Object(h.jsx)("p",{children:"Drag and drop or Click to select a File"}),Object(h.jsx)("div",{children:Object(h.jsx)(j.Image,{fallback:"https://cdn.icon-icons.com/icons2/3214/PNG/512/cloud_file_upload_server_icon_196427.png",src:r})})]}))}function C(e){var t=e.image,n=e.title,c=e.subtitle;return Object(h.jsxs)("div",{className:"empty",children:[Object(h.jsx)(j.Image,{size:128,src:t}),Object(h.jsx)("h1",{className:"title",children:n}),Object(h.jsx)("h2",{className:"subtitle",children:c})]})}n(239);function p(e){var t=e.text;return Object(h.jsxs)(s.a.Fragment,{children:[Object(h.jsx)("div",{className:"loader",children:"Loading.."}),Object(h.jsx)("h1",{style:{textAlign:"center",color:"white",fontSize:"2em"},children:t})]})}var R=n(20),S=n(6),T=n(7),A=n(65),v=function(){function e(){Object(S.a)(this,e),this.cnt=0,this.chunks=[]}return Object(T.a)(e,[{key:"getChunks",value:function(){return this.chunks}},{key:"push",value:function(e){this.cnt+=1,1!==this.cnt?2!==this.cnt?this.chunks.push(e):this.type=e:this.name=e}},{key:"save",value:function(){console.log(this.cnt),console.log(this.name,this.type,this.chunks);var e=new Blob(this.chunks,{type:this.type});Object(A.saveAs)(e,this.name)}}]),e}();var y=function(){var e=Object(c.useRef)(),t=Object(c.useRef)(),n=Object(c.useState)(!1),r=Object(u.a)(n,2),i=r[0],O=r[1],d=Object(c.useState)(!1),E=Object(u.a)(d,2),x=E[0],S=E[1],T=Object(c.useState)(!1),A=Object(u.a)(T,2),y=A[0],w=A[1],Q=Object(c.useState)(!1),N=Object(u.a)(Q,2),U=N[0],B=N[1],D=Object(c.useState)(!1),F=Object(u.a)(D,2),k=F[0],I=F[1],G=Object(c.useState)(!1),P=Object(u.a)(G,2),M=P[0],q=P[1],H=Object(c.useState)(""),K=Object(u.a)(H,2),J=K[0],L=K[1],V=Object(c.useState)([]),X=Object(u.a)(V,2),z=X[0],_=X[1],Y=Object(c.useState)(""),W=Object(u.a)(Y,2),Z=W[0],$=W[1],ee=Object(c.useState)(""),te=Object(u.a)(ee,2),ne=te[0],ce=te[1],se=Object(c.useState)(null),re=Object(u.a)(se,2),ie=re[0],oe=re[1],ae=Object(c.useState)(null),ue=Object(u.a)(ae,2),je=ue[0],le=ue[1],Oe={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:stun1.l.google.com:19302"},{urls:"stun:stun2.l.google.com:19302"},{urls:"stun:stun3.l.google.com:19302"},{urls:"stun:stun4.l.google.com:19302"}]},be=function(n){q(!0),$(n);var c=new b.a({initiator:!0,trickle:!1,config:Oe});c.on("signal",(function(t){e.current.emit(R.SOCKET_EVENT.SEND_REQUEST,{to:n,signal:t,username:J}),S(!0),q(!1)})),c.on("connect",Object(a.a)(Object(o.a)().mark((function e(){var t,n;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),S(!1),c.send(ie.name),c.send(ie.type),e.next=6,ie.arrayBuffer();case 6:for(t=e.sent,16384;t.byteLength;)n=t.slice(0,16384),t=t.slice(16384,t.byteLength),c.send(n);c.send("EOF"),w(!1);case 11:case"end":return e.stop()}}),e)})))),t.current=c};return Object(c.useEffect)((function(){e.current=l.a.connect("/");var n=localStorage.getItem("username");console.log(n),e.current.emit(R.SOCKET_EVENT.TRY_CONNECT,{savedUsername:n||"NEW_USER"}),e.current.on(R.SOCKET_EVENT.CONNECTED,(function(e){L(e),localStorage.setItem("username",e)})),e.current.on(R.SOCKET_EVENT.USERS_LIST,(function(e){_(e)})),e.current.on(R.SOCKET_EVENT.REQUEST_SENT,(function(e){var t=e.signal,n=e.username;$(n),ce(t),O(!0)})),e.current.on(R.SOCKET_EVENT.REQUEST_ACCEPTED,(function(e){var n=e.signal;t.current.signal(n)})),e.current.on(R.SOCKET_EVENT.REQUEST_REJECTED,(function(){S(!1),I(!0)}))}),[]),Object(h.jsxs)(s.a.Fragment,{children:[Object(h.jsx)(j.Modal,{show:je||y||U||x||k||i,onClose:function(){y&&U&&x&&i||le(null),I(!1)},children:Object(h.jsxs)(j.Modal.Content,{children:[i&&Object(h.jsx)(f,{acceptRequest:function(){O(!1);var n=new b.a({initiator:!1,trickle:!1});n.on("signal",(function(t){e.current.emit(R.SOCKET_EVENT.ACCEPT_REQUEST,{signal:t,to:Z})})),n.on("connect",(function(){B(!0)}));var c=new v;n.on("data",(function(e){"EOF"===e.toString()?(le(c),B(!1)):c.push(e)})),n.signal(ne),t.current=n},rejectRequest:function(){e.current.emit(R.SOCKET_EVENT.REJECT_REQUEST,{to:Z}),O(!1)},peerUsername:Z}),(y||U||x)&&Object(h.jsx)(p,{text:y?"the file is being sent, please wait...":x?"Wait till user accepts your request":"receiving file, please wait... "}),k&&Object(h.jsx)(g,{myUsername:Z,subtext:"".concat(Z," Rejected your request, sorry!"),color:"#ffcac8"}),je&&Object(h.jsxs)(s.a.Fragment,{children:[Object(h.jsx)(g,{myUsername:Z,subtext:"".concat(Z," has sent you this file"),color:"#c7ffcc"}),Object(h.jsx)(j.Button,{color:"warning",rounded:!0,onClick:je.save.bind(je),fullwidth:!0,children:"Download"})]})]})}),Object(h.jsx)(j.Container,{fluid:!0,children:Object(h.jsxs)(j.Columns,{vCentered:"true",children:[Object(h.jsxs)(j.Columns.Column,{size:"three-fifths",children:[Object(h.jsx)(g,{myUsername:J,subtext:"Share files or even pictures anonymously with your friends, ;)",color:"#CE93D8"}),Object(h.jsx)(m,{setFile:oe})]}),Object(h.jsx)(j.Columns.Column,{children:z.length>1?z.map((function(e){var t=e.username,n=e.timestamp;return t!==J&&Object(h.jsx)(g,{myUsername:t,timestamp:n,sendRequest:be,disabled:!ie||M},t)})):Object(h.jsx)(C,{title:"No Users Online Right Now!",subtitle:"Wait till someone connects to start sharing",image:"data:image/png;base64,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"})})]})})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,241)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),r(e),i(e)}))};i.a.createRoot(document.getElementById("root")).render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(y,{})})),w()},39:function(e,t,n){}},[[240,1,2]]]);
//# sourceMappingURL=main.2ef3bd22.chunk.js.map