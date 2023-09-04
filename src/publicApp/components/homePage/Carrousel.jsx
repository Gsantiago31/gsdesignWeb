import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

const items = [
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/gsdesign-31114.appspot.com/o/assets%2Fportada_redes_sociales.png?alt=media&token=a7aa253b-1fce-4b44-9230-0f5e2c746ef6',
    altText: 'redesSociales',
    caption: 'Slide 1',
    key: 1,
  },
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/gsdesign-31114.appspot.com/o/assets%2Fportada_dise%C3%B1o_web.png?alt=media&token=92d9cee0-bb18-4867-8704-5b35a77c740a',
    altText: 'Slide 2',
    caption: 'Slide 2',
    key: 2,
  },
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/gsdesign-31114.appspot.com/o/assets%2Fportada_marketing.png?alt=media&token=7daaaa5b-3598-4d01-a1e5-6bd283aff500',
    altText: 'Slide 3',
    caption: 'Slide 3',
    key: 3,
  },
];

export const Carrousel = (args) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
        height="100px"
      >
        <img src={item.src} alt={item.altText} className="img-fluid" style={{ width: '100%', height: 'auto' }}/>
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      xs={12}
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}