import { EVENT_NAMES } from '../constants'
// eslint-disable-next-line import/no-webpack-loader-syntax
import Sharedworker from 'worker-loader!./sharedWorker.js'

let _options = {}

export class WorkerCommunicator {
  constructor (options = { isolated: true }) {
    options.communicatorId = Math.random()
    _options = options
    if (!WorkerCommunicator.instance) {
      this.initWorker()
      WorkerCommunicator.instance = this
    }
    return WorkerCommunicator.instance
  }

  initWorker () {
    // eslint-disable-next-line no-undef
    if (SharedWorker) {
      // eslint-disable-next-line no-undef
      this.worker = new Sharedworker()
    } else {
      throw new Error('"SharedWorker" is not supported in this environment!')
    }
    return this
  }

  send (data) {
    if (this.worker) {
      this.worker.postMessage({
        _communicatorId: _options.communicatorId,
        data
      })
    }
    return this
  }

  on (eventName, callback = () => {}) {
    if (~EVENT_NAMES.indexOf(eventName)) {
      if (this.worker) {
        if (_options.isolated) {
          this.worker.addEventListener(eventName, function (...args) {
            const context = this
            const event = args[0]
            if (event) {
              const { _communicatorId } = event.data
              if (_communicatorId === _options.communicatorId) {
                callback.apply(context, args)
              }
            }
          })
        } else {
          this.worker.addEventListener(eventName, callback)
        }
      }
    } else {
      console.warn(`eventName: ${eventName} is not available here, use one of ${EVENT_NAMES} instead.`)
    }
    return this
  }

  destory () {
    if (this.worker) {
      this.worker.terminate()
    }
  }
}
