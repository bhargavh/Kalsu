import { saveAs } from "file-saver";

class FileChunks {
  constructor() {
    this.cnt = 0;
    this.chunks = [];
  }
  getChunks() {
    return this.chunks;
  }
  push(chunk) {
    this.cnt += 1;
    if (this.cnt === 1) {
      this.name = chunk;
      return;
    }
    if (this.cnt === 2) {
      this.type = chunk;
      return;
    }
    this.chunks.push(chunk);
  }
  save() {
    console.log(this.cnt)
    console.log(this.name , this.type , this.chunks)
    const file = new Blob(this.chunks, { type: this.type });
    saveAs(file, this.name);
  }
}
export default FileChunks;
