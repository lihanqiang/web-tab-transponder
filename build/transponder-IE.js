/* eslint-disable prefer-regex-literals */
/* eslint-disable no-eval */
/* eslint-disable no-var */
/* eslint-disable no-extend-native */
(function (_self) {
  var thisId
  var storageKey
  var msgCallback

  function getIEVersion () {
    var reIE = new RegExp('MSIE (\\d+\\.\\d+);')
    var match = navigator.userAgent.match(reIE)
    var fIEVersion = parseInt(match && match[1])
    return fIEVersion
  }

  var IEV = getIEVersion()

  if (IEV !== 8) {
    throw new Error('this file is only suit for IE8!')
  }

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

  if (!Function.prototype.bind) {
    Function.prototype.bind = function () {
      if (typeof this !== 'function') {
        throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable')
      }
      var _this = this
      var obj = arguments[0]
      var ags = Array.prototype.slice.call(arguments, 1)
      return function () {
        _this.apply(obj, ags)
      }
    }
  }

  function addEvent (event, fn) {
    document.attachEvent('on' + event, fn)
  }

  function removeEvent (event, fn) {
    document.detachEvent('on' + event, fn)
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
    var l = window.location
    return {
      href: l.href,
      pathname: l.pathname,
      hostname: l.hostname,
      port: l.port,
      protocol: l.protocol,
      hash: l.hash,
      search: l.search,
      pagetype: getpagetype()
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
      throw new Error('the instance "' + thisId + '" has been destoryed!')
    }
    var pageData = getPageData()
    pageData.id = thisId
    if (toId !== undefined) {
      var idList = toId instanceof Array ? toId : [toId]
      for (var i = 0; i < idList.length; i++) {
        var transferId = idList[i]
        if (typeof transferId === 'string' && transferId) {
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

  StorageTransponder.prototype.messageListener = function () {
    var _this = this
    setTimeout(function () {
      if (!_this.destoryed) {
        var newValue = window.localStorage.getItem(storageKey)
        var parsedData = JSON.parse(newValue)
        if (newValue && parsedData && parsedData.random) {
          var transferId = parsedData.transferId
          var data = parsedData.data
          var from = parsedData.from
          var buildArgs = { data: data, from: from }
          // filter data except self
          var fromId = from.id
          if (transferId) {
            fromId !== thisId && transferId === thisId && msgCallback.call(_this, buildArgs)
          } else {
            fromId !== thisId && msgCallback.call(_this, buildArgs)
          }
        }
      }
    })
  }

  StorageTransponder.prototype.onMessage = function (callback) {
    msgCallback = callback || function () {}
    addEvent('storage', this.messageListener.bind(this))
    return this
  }

  StorageTransponder.prototype.destory = function () {
    removeEvent('storage', this.messageListener.bind(this))
    this.destoryed = true
  }

  _self.Transponder = StorageTransponder
}(this))
