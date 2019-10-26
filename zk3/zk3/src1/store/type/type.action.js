import axios from 'axios'
const initRight = (url) => {
    return (dispatch) => {
        axios.get(url).then(res =>{
            if(res.data.code === 1){
                // this.props.initRight(res.data.data)
                let right = res.data.data;
                console.log(right)
                dispatch({type:'INIT_RIGHT',right})
            }
        })
    }
}

export default {
    initRight
}