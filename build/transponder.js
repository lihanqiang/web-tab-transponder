!function(t,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports.Transponder=o():t.Transponder=o()}(self,(function(){return function(){"use strict";var t,o,e,r={};function n(t,o){window.localStorage.setItem(t,JSON.stringify(o))}function a(e){if("string"!=typeof e||!e)throw new Error('the param "id" is required, which is a string, but not ""!');if(t=e,this.destoryed=!1,o="__&&transponderKeydoNotDelete&&__","object"!=typeof localStorage)throw new Error('"localStorage" is not supported in this environment!')}return a.prototype.send=function(e,r){if(this.destoryed)throw new Error("this instance has been destoryed!");var a,i=window.location?{href:window.location.href,pathname:window.location.pathname,hostname:window.location.hostname,port:window.location.port,protocol:window.location.protocol,hash:window.location.hash,search:window.location.search,pagetype:(a="page",window.frames&&window.parent&&window.frames.length!==window.parent.frames.length&&(a="iframe"),a)}:{};if(void 0!==r)for(var s=r instanceof Array?r:[r],d=0;d<s.length;d++){var f=s[d];if("string"!=typeof f||!f)throw new Error('param "toId" is Array<string> or just a string, but not a ""!');i.id=t,n(o,{random:Math.random(),transferId:f,data:e,from:i})}else n(o,{random:Math.random(),transferId:void 0,data:e,from:i});return this},a.prototype.messageListener=function(r){var n=r.key,a=r.newValue,i=JSON.parse(a);if(n===o&&i&&i.random){var s=i.transferId,d=i.data,f=i.from,w={data:d,from:f},p=f.id;s?p!==t&&s===t&&e.call(this,w):p!==t&&e.call(this,w)}},a.prototype.onMessage=function(t){return e=t||function(){},window.addEventListener("storage",this.messageListener),this},a.prototype.destory=function(){window.addEventListener("storage",this.messageListener),this.destoryed=!0},r.default=a,r.default}()}));