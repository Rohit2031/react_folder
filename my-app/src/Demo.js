import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import './demo.css';


// fucntion based component using here
const Demo = (props) => {
    return<div className = "maindiv_style">
        <h1> Hello {props.name}</h1>
        <p>this is using jsx </p>
    </div>


}


// here class bases component mentioned 
// class Demo extends Component{
//     render(){
//         return
//         <div className = "maindiv_style">
//             <h1> Hello {this.props.name}</h1>
//         <p>this is using jsx </p>
//         </div>

//     }
// }
// when componet define every time we have to export it 
export default Demo;

// props get passed to the Component
// props are immutable (can not change or modify ) only parent can do the Same
// using props in function props.--function componet
// using propsin class this.props.class componet