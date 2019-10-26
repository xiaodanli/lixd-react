import axios from 'axios'
const initRight = (url) => {
    return (dispatch) => {
        axios.get(url).then(res =>{
            if(res.data.code === 1){
                let right = res.data.data;
                dispatch({type:'INIT_RIGHT',right})
            }
        })
    }
}



export default {
    initRight
}