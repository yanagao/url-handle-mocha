# url-handle

提供了一些处理 url 的常用方法

## 方法列表

### query(name, url)

从 `url` 中获得指定名字为 `name` 的参数值。如果 `url` 为空，则取当前的页面。

### param(obj)

按照key/value对序列化普通对象。注意此处只支持浅层序列化。即 `obj` 字段的值不能够为对象，例如 `{a:1,b:{c:1}}` 就不行，但 `{a:1,c:1} 就可以

