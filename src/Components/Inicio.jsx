import React, { useState } from 'react';
import Pollo from "../utils/images/carrus1.png"
import Kit from "../utils/images/carrus2.png"
import Carne from "../utils/images/carrus3.png"
import  '../utils/css/inicio.css';


import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
const items = [
  {
    src: Pollo,
    altText: 'Imagen 1',
  },
  {
    src: Kit,
    altText: 'Imagen 2',
  },
  {
    src: Carne,
    altText: 'Imagen 3',
  },
];

const Inicio = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);

    <div>
      thi is my component: 
      <Link text="PAGIANA OFICIAL"/>
      <Link text="CARTA"/>
    </div>
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }


  const slides = items.map((item, index) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={index}
      >
        <img src={item.src} alt={item.altText} width='100%' height='450px' />   
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });
   

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="." onClickHandler={previous} />
      <CarouselControl direction="next" directionText="." onClickHandler={next} />
    </Carousel>
  );
    
}


function Link(props) {
  return (
    <div id="link">
      {props.text}
             <a className="link"
            href="https://lenosycarbon.com.co/"
            target="-blank" rel="noopener noreferrer"
            >
            </a>
    </div>
  );
};


export default Inicio;
