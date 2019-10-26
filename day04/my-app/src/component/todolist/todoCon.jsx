import React,{Component} from 'react'
import TodoItem from './todoItem'
import watch from '../../util/watch'

class TodoCon extends Component{
    constructor(props){
        super(props);
        watch.on('add',(val) => {
            let {todoList} = this.state;
            todoList.push({isChecked:false,val});
            this.setState({
                todoList
            })
        })
        this.state = {
            todoList:[],  //正在进行
            doneList:[]   //已经完成
        }
    }
    render(){
        let {todoList,doneList} = this.state;
        return (
            <div className="con">
                <div>
                    <h3>正在进行中<span>{todoList.length}</span></h3>
                    <div>
                        {
                            this.renderList(todoList)
                        }
                    </div>
                </div>
                <div>
                    <h3>已经完成<span>{doneList.length}</span></h3>
                    <div>
                        {
                            this.renderList(doneList)
                        }
                    </div>
                </div>
            </div>
        )
    }

    renderList = (list) => {
        return list.map((item,index) => <TodoItem key={index} item={item} index={index} changeCheck={this.changeCheck} editVal={this.editVal} del={this.del}/>)
    }

    changeCheck = (isChecked,index) => {
        let {todoList,doneList} = this.state;
        // 1.如果当前为false ，改为true   todoList ---->doneList
        if(!isChecked){ //todoList
            todoList[index].isChecked = !isChecked
            doneList.push(todoList[index]);
            todoList.splice(index,1);
        }else{ //donelist
            doneList[index].isChecked = !isChecked
            todoList.push(doneList[index]);
            doneList.splice(index,1);
        }

        this.setState({
            todoList,
            doneList
        })

    }
    editVal = (isChecked,index,val) => {
        let {todoList,doneList} = this.state;
        console.log(isChecked,index,val);
        if(!isChecked){
            todoList[index].val = val;
        }else{
            doneList[index].val = val;
        }
        this.setState({
            todoList,
            doneList
        })
    }

    del = (isChecked,index) => {
        let {todoList,doneList} = this.state;
        if(!isChecked){
            todoList.splice(index,1)
        }else{
            doneList.splice(index,1)
        }
        this.setState({
            todoList,
            doneList
        })
    }
}

export default TodoCon