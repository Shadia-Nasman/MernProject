import React from 'react';

import axios from 'axios';

export default class CustomersList extends React.Component {
  state = {
    customers: [],
    id: ''
  }
  handleCheck = event => {
    this.setState({ id: event.target.value });
  }
  handleDelete = event => {
    event.preventDefault();

    axios.delete(`http://localhost:3002/api/customers/${this.state.id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  
      document.location.reload(true);  //true: reload the current page from the server
      // location.reload()  reload current page from the cashe
  }



  componentDidMount() {
    axios.get(`http://localhost:3002/api/customers/`)
      .then(res => {
        const customers = res.data;
        this.setState({ customers });
      })
  }

  render() {
    return (
        <div className="customerslist">
      <table>
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
        <tbody>
            <tr key={customer._id}>
                <td >{customer.fname}</td>
                <td>{customer.lname}</td>
                <td>{customer.age}</td>
                <td>{customer.email}</td>
                <td>{customer.adress}</td>
                
                <td><div>
                  <form onSubmit={this.handleDelete}>
                    <input type="checkbox"  value={customer._id} onChange={this.handleCheck}></input>
                    <button type="submit">Delete</button>
                  </form>
              </div></td>

        

            </tr>
        </tbody>)}
        </table>
      </div>
    )
  }
}

