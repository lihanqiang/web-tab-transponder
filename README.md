# web-tab-transponder

### `web-tab-transponder`插件是一个浏览器多标签的交流工具。使用[SharedWorker](https://developer.mozilla.org/en-US/docs/Web/API/SharedWorker)和[localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)包装，可满足web多标签、多iframe的通信需求。
-----------------
### 特点：

* #### 兼容性良好，可在chrome、firefox、edge、IE8+等浏览器运行；

* #### 引入方式灵活，项目使用webpack构建UMD格式代码，可作为es6 module、commonjs模块、script标签等形式引入；

* #### 简单易用的api。

### 安装：
使用npm（或yarn）进行安装，或直接使用`<script>`标签引入。

* 模块
```javascript
npm install web-tab-transponder --save or (yarn add web-tab-transponder)

// es6 module
import Transponder from "web-tab-transponder"

// commonjs
const Transponder = require("web-tab-transponder")
```

* 标签

```html
<script type="text/javascript" src="**/build/transponder.js"></script>

<script type="module">
  // use Transponder as global variable 
  const T = window.Transponder
</script>
```

### 使用：
```javascript
// in page "parent"
import Transponder from "web-tab-transponder"

const parentPage = new Transponder('parent').onMessage((e) => {
  console.log('parent received data: ', e)
})

// 发送到id为"child"的页面，数据为"I am parent"
parentPage.send('I am parent', ['child'])
```
```javascript
// in page "child"
import Transponder from "web-tab-transponder"

const childPage = new Transponder('child').onMessage((e) => {
  console.log('child received data: ', e)
})

// 发送到id为"parent"的页面，数据为"I am child"
childPage.send('I am child', ['parent'])
```

### API：
<table style="width: 100%; text-align: center" border="1">
<tr>
  <th style="text-align: center; width: 30%;">参数/方法</th>
  <th style="text-align: center; width: 30%;">必填</th>
  <th style="text-align: center; width: 40%;">示例</th>
</tr>
<tr>
  <td>id: String</td>
  <td>true</td>
  <td>创建一个Transponder实例：const transponder = new Transponder('id')，创建多个实例时，请使用不同的id！</td>
</tr>
</table>

### 实例方法：
<table style="width: 100%; text-align: center" border="1">
<tr>
  <th style="text-align: center; width: 10%;">方法</th>
  <th style="text-align: center; width: 20%;">参数</th>
  <th style="text-align: center; width: 30%;">说明</th>
  <th style="text-align: center; width: 40%;">示例</th>
</tr>
<tr>
  <td>send</td>
  <td>send(data: any, toId?: String[] | String): void</td>
  <td>向其他页面（或iframe）发送数据，toId为你发送的transponder的id或id数组</td>
  <td>transponder.send(any, ['parent']); transponder.send(any, 'child'); transponder.send(any)</td>
</tr>
<tr>
  <td>onMessage</td>
  <td>onMessage(callback?: Function): void</td>
  <td>接收数据的回调函数，形参为{ data, from }</td>
  <td>transponder.onMessage(({ data, from }) => {
    console.log('parent received data: ', { data, from })
  }</td>
</tr>
<tr>
  <td>destory</td>
  <td>destory(): void</td>
  <td>销毁transponder实例</td>
  <td>transponder.destroy()</td>
</tr>
</table>

#### 注：form的数据格式为：{ href, pathname, hostname, port, protocol, hash, search, pagetype, id }，其中href, pathname, hostname, port, protocol, hash, search为父页面的[location](https://developer.mozilla.org/en-US/docs/Web/API/Location)解构，pagetype为：page/iframe，id为父页面的id。

### TIPS：
* #### 本插件的所有实现都建立在浏览器的[同源策略](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy)下，不同源的网页或iframe无法使用；
* #### 本项目是纯前端的多页面交互方案，若对数据量和性能有要求，请使用http、websocket等技术；
* #### 要向对象页面传递数据前，要确保对象页面已经加载完成！