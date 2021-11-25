import Sharedworker from './shared.worker.js'
import getUrlPathObj from '../utils/getUrlPath'

export class WorkerCommunicator {
  constructor (options = { isolated: true }) {
    const { pathname } = getUrlPathObj()
    this.options = options
    this.communicatorId = pathname
    this.initWorker()
  }

  initWorker () {
    // eslint-disable-next-line no-undef
    if (SharedWorker) {
      // eslint-disable-next-line no-undef
      this.worker = new Sharedworker()
      this.worker.port.start()
      this.worker.port.postMessage({ id: this.communicatorId })
    } else {
      throw new Error('"SharedWorker" is not supported in this environment!')
    }
    return this
  }

  send (pathname, data) {
    if (this.worker) {
      this.worker.port.postMessage([pathname, { data, from: getUrlPathObj() }])
    }
    return this
  }

  onMessage (callback = () => {}) {
    if (this.worker) {
      this.worker.port.addEventListener('message', (...args) => {
        if (args[0]) {
          const [pathname, remoteData] = args[0].data
          const buildArgs = { data: remoteData.data, from: remoteData.from }
          if (this.options.isolated) {
            pathname === this.communicatorId && callback.call(this, buildArgs)
          } else {
            callback.call(this, buildArgs)
          }
        }
      })
    }
    return this
  }

  destory () {
    if (this.worker) {
      this.worker.port.close()
    }
  }
}
