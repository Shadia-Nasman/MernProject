import React , {Component} from 'react';



class Book extends Component{

    constructor(props) {
        super(props);
        
    }
    render(){
item.books.map(book=>
    <div key={book.rank}>
      <h3>{book.title}</h3>
      <img src={book.book_image} width={250}></img>
      <span>{book.author}</span><span>{book.description}</span><a href={book.book_uri}>visit this book</a>
      <a href={book.amazon_product_url}>Amazon Url</a>
      <div>
          <h4>Buy Links</h4>
          <ul>
          {book.buy_links.map(link=>
            <li key={link.url}> <a  href={link.url}>{link.name}</a></li>

            )}</ul>
         
      </div> </div> )
     } 
    }