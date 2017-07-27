const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

let win

function createWindow () {
 win = new BrowserWindow({frame: false, titleBarStyle:'hidden', width: 600, height: 600, minWidth: 400, minHeight: 400})
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  function ShowMe() {
    alert("I want to see a box :-)");
}

function ShowMe() {

    var a = document.getElementById('content');

    alert(a.value);
}

  //win.webContents.openDevTools()

  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})