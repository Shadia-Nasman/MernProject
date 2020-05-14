import React from 'react';

import axios from 'axios';


export default class CustomersList extends React.Component {
  state = {
    customers: [],
    id: ''
  }
  
  handleUpdateId = event => {
    this.setState({ id: event.target.value });
   // console.log(event.target.value);
  

   
  }

  handleUpdate = event => {
    event.preventDefault();
  

    axios.put(`http://localhost:3002/api/customers/${this.state.id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.props.history.push("/EditForm");//to open the form of registration
      }).catch((err)=>{
        console.log(err);
      })
     
      // document.location.reload(true);  //true: reload the current page from the server
      // location.reload()  reload current page from the cashe


  }


  handleDeleteId = event => {
    this.setState({ id: event.target.value });
  }
  handleDelete = event => {
    event.preventDefault();
   
    axios.delete(`http://localhost:3002/api/customers/${this.state.id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      }).catch((err)=>{
        console.log(err);
      })
  
      document.location.reload(true);  //true: reload the current page from the server
      // location.reload()  reload current page from the cashe
  }



  componentDidMount() {
    axios.get(`http://localhost:3002/api/customers/`)
      .then(res => {
        const customers = res.data;
        this.setState({ customers });
      }).catch((err)=>{
        console.log(err);
      })
  }

  render() {
    return (
      <center>
        <div className="customerslist">
      <table className="table table-striped" style={{ marginTop: 20 }} >
        <thead>
            <tr >
                <th>First Name</th>
                <th>Last Name</th>
                <th>Age</th>
                <th>Email</th>
                <th>Adress</th>
                <th>Delete</th>
            </tr>
        </thead>
        { this.state.customers.map((customer,index) => 
        <tbody key={index}>
            <tr key={customer._id}>
                <td>{customer.fname}</td>
                <td>{customer.lname}</td>
                <td>{customer.age}</td>
                <td>{customer.email}</td>
                <td>{customer.adress}</td>
                
                <td><div>
                  <form onSubmit={this.handleDelete}>
                    <button type="submit" value={customer._id} onClick={this.handleDeleteId}>Delete</button>

                  </form>
                  
              </div></td>

              <td><div>
                  <form onSubmit={this.handleUpdate}>
                  <input
                  type='checkbox'
                  name='checkboxupdate'
                  value={customer._id}
                
                  onClick={this.handleUpdateId}
                  ></input>
                    <button type="submit" value="submit" >Edit</button>

                  </form>
                


              </div></td>

        

            </tr>
        </tbody>)}
        </table>
      </div>
      </center>
    )
  }
}

