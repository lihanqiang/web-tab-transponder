/* eslint-disable no-undef */
import getUrlPathObj from '../utils/getUrlPath'
import { parse, setLocal } from '../utils'

let thisId
let storageKey
let msgCallback

export default class StorageTransponder {
  constructor (id) {
    if (typeof id !== 'string' || !id) {
      throw new TypeError('the param "id" is required, which is a string, but not ""!')
    }
    thisId = id
    this.destoryed = false
    storageKey = '__&&transponderKeydoNotDelete&&__'
    if (typeof localStorage !== 'object') {
      throw new Error('"localStorage" is not supported in this environment!')
    }
  }

  send (transferData, toId) {
    if (this.destoryed) {
      throw new Error('this instance has been destoryed!')
    }
    if (toId !== undefined) {
      const idList = Array.isArray(toId) ? toId : [toId]
      new Set(idList).forEach(transferId => {
        if (typeof transferId === 'string' && transferId) {
          setLocal(storageKey, {
            random: Math.random(),
            transferId,
            data: transferData,
            from: { ...getUrlPathObj(), id: thisId }
          })
        } else {
          throw new TypeError('param "toId" is Array<string> or just a string, but not a ""!')
        }
      })
    } else {
      setLocal(storageKey, {
        random: Math.random(),
        transferId: undefined,
        data: transferData,
        from: { ...getUrlPathObj(), id: thisId }
      })
    }
    return this
  }

  onMessage (callback = () => {}) {
    msgCallback = callback
    addEventListener('storage', this.messageListener)
    return this
  }

  messageListener (e) {
    const { key, newValue } = e
    const parsedData = parse(newValue)
    if (key === storageKey && parsedData && parsedData.random) {
      const { transferId, data, from } = parsedData
      const buildArgs = { data, from }
      // filter data except self
      const fromId = from.id
      if (transferId) {
        fromId !== thisId && transferId === thisId && msgCallback.call(this, buildArgs)
      } else {
        fromId !== thisId && msgCallback.call(this, buildArgs)
      }
    }
  }

  destory () {
    removeEventListener('storage', this.messageListener)
    this.destoryed = true
  }
}
