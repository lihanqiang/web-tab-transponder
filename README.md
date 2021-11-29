# web-tab-transponder

#### `web-tab-transponder`插件是一个浏览器多标签的交流工具。使用[SharedWorker](https://developer.mozilla.org/en-US/docs/Web/API/SharedWorker)和[localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)包装，可满足web多标签、多iframe的通信需求。
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
<script type="text/javascript" src="*/build/transponder.js"></script>

<!-- use Transponder as global variable  -->
const T = window.Transponder
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