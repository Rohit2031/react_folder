import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{

  state = {
    fullname:"",
    nameError:"",
    error:true
  }

  handleChange(e){
    // console.log(e.target.name, '$$$$');
    // console.log(e.target.value, '$$$$');

    this.setState({
      [e.target.name]: e.target.value
    },()=>{
      // calling and validate method

      this.validate()
    })
  }

  validate(){
    console.log("validating..","$$$$");
    if(this.state.fullname === ""){
      this.setState({
        nameError: "Name is Required",
        error:true
    })
    }else{
      this.setState({
        nameError: "",
        error:false
      })
    } 
  }


  validateName(){

    if(this.state.nameError.length){
      
      return(
      
      <span className="error">{this.state.nameError}</span>
    )
  }
}
  handleSubmit(e){
    this.validate();

    if(this.state.error){
      console.log("error exit","$$$$");
      return
    }else{
      console.log("good to submit","$$$$");

    }

}


  render(){
    return(
      <div className='App'>
        <h1>The Form Validation </h1>
        <div className="">

          <label>Name</label>
          <input type="text" name="name" onChange={(e) => this.handleChange(e)}/>

          {this.validateName()}

        </div>
        <button onClick={(e)=>this.handleSubmit(e)}>Submit</button>
      </div>
    );
  }
}

export default App;
