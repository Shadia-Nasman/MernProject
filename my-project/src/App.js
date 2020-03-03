import React , {Component} from 'react';

import './App.css';




/* 

const list = [
  {
  title: 'React',
  url: 'https://reactjs.org/',
  author: 'Jordan Walke',
  num_comments: 3,
  points: 4,
  objectID: 0,
  },
  {
  title: 'Redux',
  url: 'https://redux.js.org/',
  author: 'Dan Abramov, Andrew Clark',
  num_comments: 2,
  points: 5,
  objectID: 1,
  },
  ];


function App() {
  return (
    <div className="App">
    <h2> My Videos</h2>
    
    <List />


    
    </div>
  );
} */

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items:[],
      isloaded: false,
    };
  }
  componentDidMount() {
    fetch('https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=RArQ4BcZtI5UhNXRySF4FwOWqRQStsKz')
      .then(response => response.json())
      .then(json => this.setState({ isloaded: true, items: json, }));
     
  }
  
   
  render() {
var { isloaded, items} = this.state;
console.log(items.results);

if(!isloaded){
  return(<div>loading...</div>);
}
else{
return(
<div className="App">
data has been loaded

{/* {
items.map(item=>
  <div key={item.title}>
<img src={item.book_image}></img>
  </div>
)

} */}

</div>


);
}
  } 
  
}




/* 
class work{
constructor(sector){
this.worktype=sector;
}

}
var mywork= new work("developer");
console.log(mywork.worktype);

function List(){

return(

<div >

{
list.map(function(item){
return(
<div key={item.objectID}>
  <a href={item.url}>{item.title}</a>
</div>

);

})

}


</div>

);


}  */

export default App;
