import { directory }  from "../model/observer.file.js";

const handler = (filePath, emitName) => {
  if (filePath.includes("error.log")) throw new Error("Error on save the file");
  console.log(`[${new Date().toLocaleString()}] ${filePath} has been added.`);
  // emit the path not the message
  // console.log(this);
  directory.emit(emitName, { message: "File changed" });
};

export const onAdd = function (filePath) {
  // handler.bind(this, filePath, "file-added");
  if (filePath.includes("error.log")) throw new Error("Error on save the file");
  console.log(`[${new Date().toLocaleString()}] ${filePath} has been added.`);
  // emit the path not the message
  // console.log(this);
  this.emit("file-added", { message: "File added from emit" });
};

export const onChange = function (filePath) {
  handler(filePath, 'file-changed');
};

export const onUnlink = function (filePath) {
//   handler(filePath, "file-unlinked");
};

export const onAddDir = function (filePath) {
//   handler(filePath, "directory-added");
};

export const onUnlinkDir = function (filePath) {
//   handler(filePath, "directory-unlinked");
};

export const onError = function (error) {
  console.log(`Watcher error: ${error}`);
  this.emit("error", { error });
};

export const onReady = function () {
  console.log(`Initial scan complete. Ready for changes.`);
};
