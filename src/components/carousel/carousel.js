import React, { useState } from 'react';
import img from '../../assets/Images/01.jpg'
import img1 from '../../assets/Images/02.jpg'
import img2 from '../../assets/Images/03.jpeg'
import img3 from '../../assets/Images/04.jpg'
import {Carousel,CarouselItem,CarouselControl,CarouselIndicators,CarouselCaption} from 'reactstrap';
import style from './carousel.module.css'

const items = [
  {
    src:img1,
    altText: 'Clear Display',
    caption: 'Clear Display'
  },
  {
    src:img ,
    altText: 'Elegant Style',
    caption: 'Elegant Style'
  },
  {
    src:img2 ,
    altText: 'Clarity Camera',
    caption: 'Clarity Camera'
  },
  {
    src:img3 ,
    altText: 'Powerful Processor',
    caption: 'Powerful Processor'
  }
];

const Slider = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
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

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img className={style.Slider_image} src={item.src} alt={item.altText} />
        <CarouselCaption className={style.Slider_font} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Carousel id="specify" className={style.Slider_outer}
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default Slider;