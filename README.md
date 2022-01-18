[English](./README.md) / [中文](./README_zh_CN.md)

# web-tab-transponder

### `web-tab-transponder` is a browser tab(or iframe) communication tool, which is built with [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage).
-----------------
### Features:

* #### It runs well in Chrome, Firefox, Edge, IE8+ and other browsers;

* #### This project uses Webpack to build UMD format codes, which can be imported as ES6 module, CommonJS module, script tag and other forms;

* #### Mini size(base version is 1KB, IE8 version is 3KB).

* #### Easy-to-use API.

### Installation:
Using NPM (or YARN) tool to install, or import directly with the `<script>` tag.

* Module
```javascript
// npm/yarn
npm install web-tab-transponder --save
// or 
yarn add web-tab-transponder

// es6 module
import Transponder from "web-tab-transponder"

// commonjs
const Transponder = require("web-tab-transponder")
```

* Tag

```html
<!-- Offline: -->
<script type="text/javascript" src="**/build/transponder.js"></script>

<!-- Online: -->
<script type="text/javascript" src="https://unpkg.com/web-tab-transponder"></script>

<script type="text/javascript">
  // use Transponder as global variable 
  const Transponder = window.Transponder
</script>

<!-- for IE8 -->
<script type="text/javascript" src="https://unpkg.com/web-tab-transponder/build/transponder-IE.js"></script>

<script type="text/javascript">
  // use Transponder as global variable 
  var Transponder = window.Transponder
</script>
```

### Usage:
```javascript
// in page "parent"
import Transponder from "web-tab-transponder"

const parentPage = new Transponder('parent').onMessage((e) => {
  console.log('parent received data: ', e)
})

// send data to page "child", data is "I am parent"
parentPage.send('I am parent', ['child'])
// or send data to other page, each page of domain (except self) will receive data 'I am parent'
parentPage.send('I am parent')
```
```javascript
// in page "child"
import Transponder from "web-tab-transponder"

const childPage = new Transponder('child').onMessage((e) => {
  console.log('child received data: ', e)
})

// send data to page "parent", data is "I am child"
childPage.send('I am child', ['parent'])
// or send data to other page, each page of domain (except self) will receive data 'I am child'
childPage.send('I am child')
```

### API:
<table style="width: 100%; text-align: center" border="1">
<tr>
  <th style="text-align: center; width: 30%;">params</th>
  <th style="text-align: center; width: 30%;">required</th>
  <th style="text-align: center; width: 40%;">e.g. </th>
</tr>
<tr>
  <td>id: String</td>
  <td>true</td>
  <td>to build a instance of Transponder: const transponder = new Transponder('id'), if you want to build multiple instance, please use different id!</td>
</tr>
</table>

### Instance methods:
<table style="width: 100%; text-align: center" border="1">
<tr>
  <th style="text-align: center; width: 10%;">method</th>
  <th style="text-align: center; width: 20%;">param</th>
  <th style="text-align: center; width: 30%;">desc</th>
  <th style="text-align: center; width: 40%;">e.g.</th>
</tr>
<tr>
  <td>send</td>
  <td>send(data: any, toId?: String[] | String): void</td>
  <td>send data to other page(or iframe), param toId is a string[] or string, which has used in other transponder, toId is optional, default will send data to each page (except self) of domain.</td>
  <td>transponder.send(any, ['parent']); transponder.send(any, 'child'); transponder.send(any)</td>
</tr>
<tr>
  <td>onMessage</td>
  <td>onMessage(callback?: Function): void</td>
  <td>callback of data receiving, param is ({ data, from })</td>
  <td>transponder.onMessage(({ data, from }) => {
    console.log('parent received data: ', { data, from })
  }</td>
</tr>
<tr>
  <td>destory</td>
  <td>destory(): void</td>
  <td>destory the instance of Transponder</td>
  <td>transponder.destroy()</td>
</tr>
</table>

#### attention: the pattern of `e.from` is: { href, pathname, hostname, port, protocol, hash, search, pagetype, id }, `href, pathname, hostname, port, protocol, hash, search` is parent page's [location](https://developer.mozilla.org/en-US/docs/Web/API/Location) deconstruction, `pagetype` is one of page/iframe, `id` is parent page's id.

### TIPS:
* #### All implementations of this tool are built in the browser [same-origin](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy) policy, it can not work if your page is from different sites;
* #### This project is a pure front-end multi-page interaction scheme. If you have requirements on data volume and performance, please use HTTP, Websocket and other technologies;
* #### Before passing data to the target page, make sure the target page has been loaded!