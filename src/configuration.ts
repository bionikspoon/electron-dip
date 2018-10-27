import * as nconf from 'nconf'
import { promisify } from 'util'

const file = `${getUserHome()}/electron-dip.json`

const conf = nconf.file({ file })
const asyncSave = promisify(conf.save.bind(conf))
const asyncLoad = promisify(conf.load.bind(conf))

type Key = 'shortcutKeys'

export async function saveSettings(key: Key, value: any) {
  conf.set(key, value)
  await asyncSave(undefined)
}

export async function readSettings(key: Key) {
  await asyncLoad()
  return conf.get(key)
}

function getUserHome() {
  return process.env[process.platform === 'win32' ? 'USERPROFILE' : 'HOME']
}
