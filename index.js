const { app, BrowserWindow } = require('electron');
const modal = require('electron-modal');

require('electron-reload')(__dirname);

function createWindow () {

  let win = new BrowserWindow({
    width: 1920,
    height: 1080,
    title: 'Electron Painter',
    titleBarStyle: 'hidden',
    frame: false,
    alwaysOnTop: true,
    acceptFirstMouse: true,
    fullscreen: true,
    skipTaskbar: false,
    transparent: true,
    resizable: false,
    movable: false,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('src/index.html')

  win.setIgnoreMouseEvents(true)

  modal.setup();
}

app.on('ready', createWindow)