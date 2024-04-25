import chokidar from 'chokidar';

// Initialize watcher
const watcher = chokidar.watch('/home/sergioczp/Documents/sample-directory', {persistent:true});

chokidar
.watch('/home/sergioczp/Documents/sample-directory')
.on('all', (event, path) => console.log(event, path))

// Add event listener
watcher
.on('add', path => console.log(`File ${path} has been added`))
.on('change', path => console.log(`File ${path} has been changed`))
.on('unlink', path => console.log(`File ${path} has been removed`));

// More possible events
watcher
.on('addDir', path => console.log(`Directory ${path} has been added`))
.on('unlinkDir', path => console.log(`Directory ${path} has been removed`))
.on('error', error => console.log(`Watcher error ${error}`))
.on('ready', () => console.log(`Initial scan complete. Ready for changes`))