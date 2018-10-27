import * as nconf from 'nconf'

const conf = nconf.file({ file: `${getUserHome()}/electron-dip.json` })

export function saveSettings(key: string, value: any) {
  conf.set(key, value)
  conf.save()
}

export function readSettings(key: string) {
  conf.load()
  return conf.get(key)
}

function getUserHome() {
  return process.env[process.platform === 'win32' ? 'USERPROFILE' : 'HOME']
}
