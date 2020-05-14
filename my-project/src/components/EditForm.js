import React from 'react';

import axios from 'axios';





export default class EditForm extends React.Component {
  constructor(props) {
    super(props);
//////////////////////

/* this.onChangeFirstUserName = this.onChangeFirstUserName.bind(this);
        this.onChangeLastUserName = this.onChangeLastUserName.bind(this);
        this.onhandleSubmit = this.onhandleSubmit.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword=this.onChangePassword.bind(this);
        this.onChangeAdress = this.onChangeAdress.bind(this); */

////////////////////////

  this.state = {
    
      fname: '',
      lname:'',
      age: '',
      email:'',
      password:'',
      adress:''
     
    };
   }

   //////////////////////
   onChangeFirstUserName(e) {
    this.setState({ fname: e.target.value })
}

onChangeLastUserName(e) {
  this.setState({ lname: e.target.value })
}

onChangeAge(e) {
  this.setState({ age: e.target.value })
}

onChangeEmail(e) {
  this.setState({ email: e.target.value })
}
onChangePassword(e) {
  this.setState({ password: e.target.value })
}

onChangeAdress(e) {
  this.setState({ adress: e.target.value })
}

  onhandleSubmit = event => {
    event.preventDefault();
/* console.log(this.state.fname);
console.log(this.state.lname);
console.log(this.state.age);
console.log(this.state.email);
console.log(this.state.password);
console.log(this.state.adress); */

 
    axios.put(`http://localhost:3002/api/customers/`,this.state)
      .then(res => {

     
        console.log(res);
        // console.log(res.data);
      });
      this.setState({ fname: '',lname: '',age: '',email: '', password: '', adress: '' })
  }


  
  render() {
    return (
      <center>
        <div className="registerform">
      <form onSubmit={this.onhandleSubmit}>
      <h1>Hello {this.state.fname} {this.state.lname}</h1>
      <p>First name:</p>
      <input
        type='text'
        name='fname'
        value={this.state.fname}
      
        onChange={this.onChangeFirstUserName}
      />
       <p> Last name:</p>
      <input
        type='text'
        name='lname'
        value={this.state.lname}
       
        onChange={this.onChangeLastUserName}
      />
        <p> Age:</p>
      <input
        type='text'
        name='age'
        value={this.state.age}
     
        onChange={this.onChangeAge}
      />
        <p> Email:</p>
      <input
        type='text'
        name='email'
     
        onChange={this.onChangeEmail}
      />
      <div>
      <p>Set Your Account Password</p>
        <input
        type='text'
        name='password'
        value={this.state.password}
      
        onChange={this.onChangePassword}
      /></div>
      <div>
        <p> Adress:</p>
      <input
        type='text'
        name='adress'
        value={this.state.adress}
      
        onChange={this.onChangeAdress}
      />
      </div>
     <div>

<input
        type='submit' value='submit'
      />
      </div>
      </form>
      </div>
      </center>
    );
  }

}




