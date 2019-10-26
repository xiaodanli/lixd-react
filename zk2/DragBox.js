import React, {Component} from 'react';

class DragBox extends Component {

    state = {};

    componentWillMount() {
        this.setState({
            left: this.props.style.left,
            top: this.props.style.top,
        })
    }

    mouseDown(e) {

        let disY = e.clientY - e.target.offsetTop;
        let disX = e.clientX - e.target.offsetLeft;
        //1:移动
        document.onmousemove = (ev) => {
            let top = ev.clientY - disY;
            let left = ev.clientX - disX;

            this.setState({top, left});
            this.props.dragEnd(left,top)
        };

        //2:抬起
        document.onmouseup = function () {
            document.onmousemove = null;
            document.onmouseup = null;
        }
    }


    render() {
        let {backgroundColor} = this.props.style;
        let {left, top} = this.state;
        return (
            <div onMouseDown={this.mouseDown.bind(this)} style={{
                width: "100px",
                height: "100px",
                position: "absolute", left, top, backgroundColor
            }}/>
        );
    }
}

export default DragBox;
