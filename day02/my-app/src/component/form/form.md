#### react 表单  受控组件  非受控组件

react表单和html表单是不一样的

#### 表单

input  

    text                value

    checkbox radio      checked

textarea value  代替 <textarea>xxxx</textarea>

select   value  代替 <option selected></option>


- react里的onChange事件相当于原生里的input事件

- 受控组件：

给表单元素添加value属性，此元素变成受控

onChange事件 改变state


- 非受控组件：(不推荐使用)

给默认值text：defaultValue

this.refs.xxx.value

给checkbox，radio : defaultChecked













