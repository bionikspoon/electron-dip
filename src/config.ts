import * as nconf from 'nconf'
import { promisify } from 'util'

type Key = 'shortcutKeys'

class Config {
  private asyncSave: () => Promise<void>
  private asyncLoad: () => Promise<void>
  private conf: nconf.Provider

  constructor() {
    const userHome =
      process.env[process.platform === 'win32' ? 'USERPROFILE' : 'HOME']

    this.conf = nconf.file({ file: `${userHome}/electron-dip.json` })
    this.asyncSave = promisify(this.conf.save.bind(this.conf))
    this.asyncLoad = promisify(this.conf.load.bind(this.conf))
  }

  public async get(key: Key) {
    await this.asyncLoad()
    return this.conf.get(key)
  }

  public async set(key: Key, value: any) {
    this.conf.set(key, value)
    await this.asyncSave()
  }
}

export default new Config()
