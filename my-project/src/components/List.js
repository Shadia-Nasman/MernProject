import React , {Component} from 'react';


class List extends Component{
    constructor(props) {
        super(props);
        this.state = {
          items:[],
          isloaded: false,
        };
      }

      componentDidMount() { //Fetch Data from books API
        fetch('https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=RArQ4BcZtI5UhNXRySF4FwOWqRQStsKz')
          .then(response => response.json())
          .then(json => this.setState({ isloaded: true, items: json.results.lists, }));
        
      }

      render() {//display Data from API to HTML 
        var { isloaded, items} = this.state;
        console.log(items);
    
        if(!isloaded){
          return(<div>loading...</div>);
        }
    
          else{
    
          return(
            <div className="">
            <h2> Lists Of books</h2>
      
            {
            items.map(item=>
          <div key={item.list_id}>
      
           <img src={item.list_image} width= {100}></img> 
            <h3>{item.list_name} List</h3>
      
           </div>)} </div>
  
    
      );}}



}