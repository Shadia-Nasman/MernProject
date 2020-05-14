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
           
            <div class="container">
                  
            {/* <h2> Lists Of books</h2> */}
            <div class="row">
            {
             
            items.map(item=>
          <div key={item.list_id} class="card mt-3 mb-3 mr-3 ml-3"   style={{width: 250} }>
      
           {/* <img src={item.list_image} width= {100}></img>  */}
            {/* <h4>{item.list_name} List</h4> */}
           { item.books.map(book=>
    <div key={book.rank} >
    <div class="col border rounded-lg mx-auto mt-3 mb-3 ">
      <h4 class="card-title">{book.title}</h4>
      <img src={book.book_image} alt="bookimg" class="card-img-top"></img>
      <span>{book.author}</span><p class="card-text">{book.description}</p><a href={book.book_uri}>visit this book</a>
      <a href={book.amazon_product_url}>Amazon Url</a>
      <div  class="card-body">
          <h4 class="btn btn-primary">Buy Links</h4>
          <ul>
          {book.buy_links.map(link=>
            <li key={link.url}> <a  href={link.url}>{link.name}</a></li>

            )}</ul>
         
      </div> </div></div> )}
           </div>)}</div> </div>
  
    
      );}}



}
export default List;