import chokidar from "chokidar";
import { EventEmitter } from "node:events";
import {
  onAdd,
  onChange,
  onUnlink,
  onAddDir,
  onUnlinkDir,
  onError,
  onReady,
} from "../controllers/chokidar.handler.js";

export class Observable extends EventEmitter {
  constructor() {
    super();
  }

  watchFolder(folder) {
    try {
      console.log(
        `[${new Date().toLocaleString()}] Watching for folder changes on: ${folder}`
      );

      const watcher = chokidar.watch(folder, { persistent: true });

      watcher
        .on("add", onAdd)
        .on("change", onChange)
        .on("unlink", onUnlink)
        .on("addDir", onAddDir)
        .on("unlinkDir", onUnlinkDir)
        .on("error", onError)
        .on("ready", onReady);
    } catch (error) {
      console.error(error);
    }
  }
}