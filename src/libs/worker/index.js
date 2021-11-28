import Sharedworker from './shared.worker.js'
import getUrlPathObj from '../utils/getUrlPath'

let msgCallback
let thisId

export default class WorkerTransponder {
  constructor (id) {
    if (typeof id !== 'string' || !id) {
      throw new TypeError('the param "id" is required, which is a string, but not ""!')
    }
    thisId = id
    this.destoryed = false
    this.initWorker()
  }

  initWorker () {
    // eslint-disable-next-line no-undef
    if (typeof SharedWorker === 'function') {
      // eslint-disable-next-line no-undef
      this.worker = new Sharedworker()
      this.worker.port.start()
      this.worker.port.postMessage({ id: thisId })
    } else {
      throw new Error('"SharedWorker" is not supported in this environment!')
    }
    return this
  }

  send (transferData, toId) {
    if (this.destoryed) {
      throw new Error('this instance has been destoryed!')
    }
    if (toId !== undefined) {
      const idList = Array.isArray(toId) ? toId : [toId]
      new Set(idList).forEach(transferId => {
        if (typeof transferId === 'string' && transferId) {
          this.worker.port.postMessage([transferId, { data: transferData, from: { ...getUrlPathObj(), id: thisId } }])
        } else {
          throw new TypeError('param "toId" is Array<string> or just a string, but not a ""!')
        }
      })
    } else {
      this.worker.port.postMessage([undefined, { data: transferData, from: { ...getUrlPathObj(), id: thisId } }])
    }
    return this
  }

  onMessage (callback = () => {}) {
    msgCallback = callback
    this.worker.port.addEventListener('message', this.messageListener)
    return this
  }

  messageListener (...args) {
    const [ev] = args
    const [id, remoteData] = ev.data
    const buildArgs = { data: remoteData.data, from: remoteData.from }
    // filter data except self
    const fromId = remoteData.from.id
    if (id) {
      fromId !== thisId && id === thisId && msgCallback.call(this, buildArgs)
    } else {
      fromId !== thisId && msgCallback.call(this, buildArgs)
    }
  }

  destory () {
    this.worker && this.worker.port.close()
    this.worker.port.removeEventListener('message', this.messageListener)
    this.destoryed = true
  }
}
