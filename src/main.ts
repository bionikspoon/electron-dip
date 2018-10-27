import { app, BrowserWindow, globalShortcut, ipcMain } from 'electron'
import { enableLiveReload } from 'electron-compile'
import installExtension, {
  REACT_DEVELOPER_TOOLS,
} from 'electron-devtools-installer'

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow: BrowserWindow | null = null

const isDevMode = process.execPath.match(/[\\/]electron/)

if (isDevMode) {
  enableLiveReload({ strategy: 'react-hmr' })
}

const createWindow = async () => {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    height: 700,
    width: 368,
    resizable: false,
    frame: false,
  })

  // and load the index.html of the app.
  mainWindow.loadURL(`file://${__dirname}/app/home/home.html`)

  // Open the DevTools.
  if (isDevMode) {
    await installExtension(REACT_DEVELOPER_TOOLS)
    require('devtron').install()
    mainWindow.webContents.openDevTools()
  }

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })

  globalShortcut.register('CmdOrCtrl+Shift+1', () => {
    if (!mainWindow) return

    mainWindow.webContents.send('global-shortcut', 0)
  })

  globalShortcut.register('CmdOrCtrl+Shift+2', () => {
    if (!mainWindow) return

    mainWindow.webContents.send('global-shortcut', 1)
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
let settingsWindow: BrowserWindow | null = null

ipcMain.on('open-settings-window', async () => {
  if (settingsWindow) return

  settingsWindow = new BrowserWindow({
    height: 200,
    width: 200,
    resizable: false,
    frame: false,
  })
  if (isDevMode) {
    await installExtension(REACT_DEVELOPER_TOOLS)
    settingsWindow.webContents.openDevTools()
  }

  settingsWindow.loadURL(`file://${__dirname}/app/settings/settings.html`)

  settingsWindow.on('closed', () => {
    settingsWindow = null
  })
})
