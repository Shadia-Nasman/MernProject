import React , {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
// import foto2 from '../img/foto2';
// import caroselfoto from '../img/caroselfoto';
import Carousel from 'react-bootstrap/Carousel';
import foto2 from '../img/foto2.jpg';
class Crouself extends Component{

render(){

    return(


<div className="carousel-inner" >
<Carousel>
<Carousel.Item>
<img 
className="d-block w-100 h-50"
src={foto2}
alt="First slide"
/>
<Carousel.Caption>
<h3>Fiction Books</h3>

</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<img
className="d-block w-100 h-50"
src={foto2}
alt="Third slide"
/>

<Carousel.Caption>
<h3>Science Books</h3>

</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<img
className="d-block w-100 h-50 "
src={foto2}
alt="Third slide"
/>

<Carousel.Caption>
<h3>New Books</h3>

</Carousel.Caption>
</Carousel.Item>
</Carousel>

</div>




    );
}

}

export default Crouself;
