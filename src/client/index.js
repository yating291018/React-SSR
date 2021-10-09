import React from 'react'
import ReactDom from 'react-dom'

import Index from './pages/index'

// 对比浏览器生成的结构与服务器返回的结构是否是一致的，如果一致，就只处理绑定事件，如果不一致，就丢弃服务端的渲染
ReactDom.hydrate(<Index/>, document.getElementById("root"))