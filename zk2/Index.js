import React, {Component} from 'react';
import DragBox from "./DragBox";

class Index extends Component {
    state = {
        style: {
            left: "100px",
            top: "50px",
            backgroundColor: "blue"
        },
        top: "0",
        left: "0"

    };

    dragEnd(left, top) {
        this.setState({
            top,
            left
        })

    }

    render() {
        let {style,top,left} = this.state;
        return (
            <div>
                <h1>{top},{left}</h1>
                {/*
                    横向 : dragX = true
                    纵向   dragY = true
                */}
                <DragBox style={style} dragEnd={this.dragEnd.bind(this)}/>
            </div>
        );
    }
}

export default Index;
