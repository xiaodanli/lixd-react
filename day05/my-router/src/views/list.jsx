import React,{Component} from 'react';
import {Link} from 'react-router-dom'

function List(props){
    return <ul>
        <li>
            <Link to="/detail/1">detail</Link>
        </li>
    </ul>
}

export default List