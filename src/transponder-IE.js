/* eslint-disable no-eval */
/* eslint-disable no-var */
/* eslint-disable no-extend-native */
var thisId
var storageKey
var msgCallback

// utils
if (!Function.prototype.apply) {
  Function.prototype.apply = function (obj, args) {
    var i = 0; var ary = []; var str
    if (args) {
      for (var len = args.length; i < len; i++) {
        ary[i] = 'args[' + i + ']'
      }
    }
    obj._apply = this
    str = 'obj._apply(' + ary.join(',') + ')'
    try {
      return eval(str)
    } catch (e) {
    } finally {
      delete obj._apply
    }
  }
}

if (!Function.prototype.call) {
  Function.prototype.call = function (obj) {
    var i = 1; var args = []
    for (var len = arguments.length; i < len; i++) {
      args[i - 1] = arguments[i]
    }
    return this.apply(obj, args)
  }
}

function addEvent (event, fn) {
  if (window.addEventListener) {
    window.addEventListener(event, fn)
  } else {
    window.attachEvent('on' + event, fn)
  }
}

function removeEvent (event, fn) {
  if (window.removeEventListener) {
    window.removeEventListener(event, fn)
  } else {
    window.detachEvent('on' + event, fn)
  }
}

function setLocal (key, val) {
  window.localStorage.setItem(key, JSON.stringify(val))
}

function getpagetype () {
  var pagetype = 'page'
  if (window.frames && window.parent && window.frames.length !== window.parent.frames.length) {
    pagetype = 'iframe'
  }
  return pagetype
}

function getPageData () {
  if (window.location) {
    var href = window.location.href
    var pathname = window.location.pathname
    var hostname = window.location.hostname
    var port = window.location.port
    var protocol = window.location.protocol
    var hash = window.location.hash
    var search = window.location.search
    return { href: href, pathname: pathname, hostname: hostname, port: port, protocol: protocol, hash: hash, search: search, pagetype: getpagetype() }
  } else {
    return {}
  }
}

// StorageTransponder class
function StorageTransponder (id) {
  if (typeof id !== 'string' || !id) {
    throw new Error('the param "id" is required, which is a string, but not ""!')
  }
  thisId = id
  this.destoryed = false
  // localStorage key do not delete!
  storageKey = '__&&transponderKeydoNotDelete&&__'
  if (typeof localStorage !== 'object') {
    throw new Error('"localStorage" is not supported in this environment!')
  }
}

StorageTransponder.prototype.send = function (transferData, toId) {
  if (this.destoryed) {
    throw new Error('this instance has been destoryed!')
  }
  var pageData = getPageData()
  if (toId !== undefined) {
    var idList = toId instanceof Array ? toId : [toId]
    for (var i = 0; i < idList.length; i++) {
      var transferId = idList[i]
      if (typeof transferId === 'string' && transferId) {
        pageData.id = thisId
        setLocal(storageKey, {
          random: Math.random(),
          transferId: transferId,
          data: transferData,
          from: pageData
        })
      } else {
        throw new Error('param "toId" is Array<string> or just a string, but not a ""!')
      }
    }
  } else {
    setLocal(storageKey, {
      random: Math.random(),
      transferId: undefined,
      data: transferData,
      from: pageData
    })
  }
  return this
}

StorageTransponder.prototype.messageListener = function (e) {
  var key = e.key
  var newValue = e.newValue
  var parsedData = JSON.parse(newValue)
  if (key === storageKey && parsedData && parsedData.random) {
    var transferId = parsedData.transferId
    var data = parsedData.data
    var from = parsedData.from
    var buildArgs = { data: data, from: from }
    // filter data except self
    var fromId = from.id
    if (transferId) {
      fromId !== thisId && transferId === thisId && msgCallback.call(this, buildArgs)
    } else {
      fromId !== thisId && msgCallback.call(this, buildArgs)
    }
  }
}

StorageTransponder.prototype.onMessage = function (callback) {
  msgCallback = callback || function () {}
  addEvent('storage', this.messageListener)
  return this
}

StorageTransponder.prototype.destory = function () {
  removeEvent('storage', this.messageListener)
  this.destoryed = true
}

window.Transponder = StorageTransponder
