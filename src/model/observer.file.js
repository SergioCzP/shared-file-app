import { directory }  from "../app.js";

// Add observer hanlder
directory.on('file-added', log => console.log(log.message));
directory.on('file-changed', log => console.log(log.message));

export {directory}