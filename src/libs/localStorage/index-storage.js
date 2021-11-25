/* eslint-disable no-undef */
export class StorageCommunicator {
  constructor (options) {
    this.options = options
    this._communicatorId = Math.random()
    if (!StorageCommunicator.instance) {
      this.initWorker()
      StorageCommunicator.instance = this
    }
    return StorageCommunicator.instance
  }

  send (data) {
    if (localStorage && localStorage.setItem) {
      localStorage.setItem(this._communicatorId, data)
    } else {
      throw new Error('"localStorage" is not supported in this environment!')
    }
  }

  onMessage (callback = () => {}) {
    addEventListener('storage', (e) => {
      document.write('oldValue: ' + e.oldValue + ' newValue:' + e.newValue + e.url)
    })
  }
}
