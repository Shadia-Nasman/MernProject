import React , {Component} from 'react';
import foto2 from '../img/foto2.jpg';
import foto5 from '../img/foto5.jpeg';
import foto8 from '../img/foto8.jpg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import List from './List';
import Carousel from 'react-bootstrap/Carousel';



class Home extends Component{



render(){
    return(
        <center>
<div>
{/* <img src={foto2} alt="caroself"></img> */}






<div className="carousel-inner">
<Carousel>
<Carousel.Item>
<img 
className="d-block w-100"
src={foto2}
alt="First slide"
/>
<Carousel.Caption>
<h3>Fiction Books</h3>

</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<img
className="d-block w-100"
src={foto5}
alt="Third slide"
/>

<Carousel.Caption>
<h3>Science Books</h3>

</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<img
className="d-block w-100"
src={foto8}
alt="Third slide"
/>

<Carousel.Caption>
<h3>New Books</h3>

</Carousel.Caption>
</Carousel.Item>
</Carousel>

</div>

















<Router>
<div>
 
<Link to="/list"><h3>All Books Lists you can find here...</h3></Link>
<Route   path="/list" component={List}/>


</div>


   </Router>
   </div>
  
</center>
);

}


}

export default Home;