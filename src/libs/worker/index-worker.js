/* eslint-disable no-undef */

const EVENT_NAMES = [
  'open',
  'error',
  'message'
]

export class WorkerCommunicator {
  constructor (isModule = false) {
    this.isModule = isModule
    this.worker = this.initWorker()
  }

  initWorker () {
    return new SharedWorker('./sharedWorker.js', { module: this.isModule })
  }

  postMessage () {
    if (this.worker) {
      this.worker.postMessage('any', {})
    }
  }

  on (eventName, callback = () => {}) {
    if (EVENT_NAMES.includes(eventName)) {
      if (this.worker) {
        this.worker['on' + eventName] = callback
      }
    } else {
      console.warn(`eventName: ${eventName} is not available here, use one of ${EVENT_NAMES} instead.`)
    }
  }

  destory () {
    if (this.worker) {
      this.worker.terminate()
    }
  }
}
