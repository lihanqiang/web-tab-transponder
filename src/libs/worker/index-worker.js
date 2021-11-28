import Sharedworker from './shared.worker.js'
import getUrlPathObj from '../utils/getUrlPath'

export class WorkerCommunicator {
  constructor (id) {
    if (typeof id !== 'string' || !id) {
      throw new TypeError('the "communicateId" is required, which is a string, but not ""!')
    }
    this.id = id
    this.initWorker()
  }

  initWorker () {
    // eslint-disable-next-line no-undef
    if (SharedWorker) {
      // eslint-disable-next-line no-undef
      this.worker = new Sharedworker()
      this.worker.port.start()
      this.worker.port.postMessage({ id: this.id })
    } else {
      throw new Error('"SharedWorker" is not supported in this environment!')
    }
    return this
  }

  send (transferData, toId) {
    if (toId !== undefined) {
      const idList = Array.isArray(toId) ? toId : [toId]
      new Set(idList).forEach(transferId => {
        if (typeof transferId === 'string' && transferId) {
          this.worker.port.postMessage([transferId, { data: transferData, from: { ...getUrlPathObj(), id: this.id } }])
        } else {
          throw new TypeError('param "toId" is Array<string> or just a string, but not a ""!')
        }
      })
    } else {
      this.worker.port.postMessage([undefined, { data: transferData, from: { ...getUrlPathObj(), id: this.id } }])
    }
    return this
  }

  onMessage (callback = () => {}) {
    this.worker.port.addEventListener('message', (...args) => {
      const [ev] = args
      const [id, remoteData] = ev.data
      const buildArgs = { data: remoteData.data, from: remoteData.from }
      // filter data except self
      const fromId = remoteData.from.id
      if (id) {
        fromId !== this.id && id === this.id && callback.call(this, buildArgs)
      } else {
        fromId !== this.id && callback.call(this, buildArgs)
      }
    })
    return this
  }

  destory () {
    this.worker && this.worker.port.close()
  }
}
