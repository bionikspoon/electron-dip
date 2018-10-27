import {
  app,
  BrowserWindow,
  globalShortcut,
  ipcMain,
  ipcRenderer,
  Menu,
  Tray,
} from 'electron'
import { enableLiveReload } from 'electron-compile'
import installExtension, {
  REACT_DEVELOPER_TOOLS,
} from 'electron-devtools-installer'
import * as path from 'path'
import config from './config'

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow: BrowserWindow | null = null

const isDevMode = process.execPath.match(/[\\/]electron/)

if (isDevMode) {
  enableLiveReload({ strategy: 'react-hmr' })
}

app.commandLine.appendSwitch('--autoplay-policy', 'no-user-gesture-required')

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

async function openSettingsWindow() {
  if (settingsWindow) return settingsWindow.focus()

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
}

ipcMain.on('open-settings-window', openSettingsWindow)
ipcMain.on('set-global-shortcuts', setGlobalShortcuts)

async function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    height: 700,
    width: 368,
    resizable: false,
    frame: false,
  })

  // and load the index.html of the app.
  mainWindow.loadURL(`file://${__dirname}/app/home/home.html`)

  const trayIcon =
    process.platform === 'darwin'
      ? path.join(__dirname, 'icon/tray-iconTemplate.png')
      : path.join(__dirname, 'img/tray-icon-alt.png')
  const tray = new Tray(trayIcon)
  const contextMenu = Menu.buildFromTemplate([
    {
      label: 'Sound machine',
      enabled: false,
    },
    {
      label: 'Settings',
      click: openSettingsWindow,
    },
    {
      label: 'Quit',
      click: () => mainWindow && mainWindow.close(),
    },
  ])
  tray.setToolTip('This is my application.')
  tray.setContextMenu(contextMenu)

  // Open the DevTools.
  if (isDevMode) {
    await installExtension(REACT_DEVELOPER_TOOLS)
    require('devtron').install()
    mainWindow.webContents.openDevTools()
  }

  if (!(await config.get('shortcutKeys'))) {
    await config.set('shortcutKeys', ['CmdOrCtrl', 'Shift'])
  }

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
  setGlobalShortcuts()
}

async function setGlobalShortcuts() {
  globalShortcut.unregisterAll()

  const shortcutKeysSettings = await config.get('shortcutKeys')

  const shortcutPrefix =
    shortcutKeysSettings.length === 0 ? '' : shortcutKeysSettings.join('+')

  globalShortcut.register(`${shortcutPrefix}+1`, () => {
    if (!mainWindow) return

    mainWindow.webContents.send('global-shortcut', 0)
  })

  globalShortcut.register(`${shortcutPrefix}+2`, () => {
    if (!mainWindow) return

    mainWindow.webContents.send('global-shortcut', 1)
  })
}
