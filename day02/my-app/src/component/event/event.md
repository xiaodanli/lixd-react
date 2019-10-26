#### react 合成事件

1>合成事件：驼峰写法  onClick  onMousedown

2>react事件和原生的事件混用,**在原生事情内阻止冒泡一定谨慎**

在原生添加的事件内阻止冒泡后，react上添加事件都不会触发

3>react没有兼容性问题


#### 原生

1.DOM0

    1)只支持冒泡

    2)只能添加一次事件

    3)兼容性好

```
el.onclick = function(){}
```

2.DOM2

    1)支持冒泡和捕获

    2)可以添加多次

```
el.addEventListener('click',function(){},false/true)  false:冒泡  true:捕获

```

- 事件的三要素： 1)事件源  2)事件类型 3)事件处理器（监听器）

- 事件流：冒泡  捕获   先捕获（从外到内）流上的事件，再执行冒泡（从里到外）流上的事件


