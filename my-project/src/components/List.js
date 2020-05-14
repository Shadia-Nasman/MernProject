import React , {Component} from 'react';



import {
  Card, CardImg
} from 'react-bootstrap';

// import {CardBody} from 'reactstrap';


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
           
            <div className="container">
            
                  
            {/* <h2> Lists Of books</h2> */}
            <div className="row">
            {
             
            items.map(item=>
          <div key={item.list_id}    style={{width: 250} }>
      
           {/* <img src={item.list_image} width= {100}></img>  */}
            {/* <h4>{item.list_name} List</h4> */}
           { item.books.map(book=>
    <div key={book.rank} >
    <div >
    <Card>
    <Card.Title>{book.title}</Card.Title>
      <CardImg  width="100%" src={book.book_image} alt="bookimg" />
      <Card.Body>
      <span>{book.author}</span><Card.Text> {book.description}</Card.Text><Card.Link href={book.book_uri}>visit this book</Card.Link>
      <Card.Link href={book.amazon_product_url}>Amazon Url</Card.Link>
      <div  >
          <h4 >Buy Links</h4>
          <ul>
          {book.buy_links.map(link=>
            <li key={link.url}> <Card.Link  href={link.url}>{link.name}</Card.Link></li>

            )}</ul>
         
      </div> 
      
      </Card.Body>
      </Card>
      </div>
      
      
      </div> )}
           </div>)}</div>
    </div>
  
    
      );}}



}
export default List;