import Car from './car.png';
import { Container, Image } from './styles';
import Slider, { Settings } from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useRef, useState } from 'react';

const horizontalSettings: Settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
};

const verticalSettings: Settings = {
  ...horizontalSettings,
  vertical: true,
  verticalSwiping: true,
};

const images = [
  <Image key="1" alt="Car" src={Car} />,
  <Image key="2" alt="Car" src={Car} />,
  <Image key="3" alt="Car" src={Car} />,
];

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const verticalSlider = useRef<Slider>(null);
  const firstHorizontalSlider = useRef<Slider>(null);
  const secondHorizontalSlider = useRef<Slider>(null);
  const thirdHorizontalSlider = useRef<Slider>(null);
  const refs = [
    firstHorizontalSlider,
    secondHorizontalSlider,
    thirdHorizontalSlider,
  ];

  const onKeyDown = async (event: KeyboardEvent) => {
    if (event.key === 'ArrowUp') {
      verticalSlider.current?.slickPrev();
    }
    if (event.key === 'ArrowDown') {
      verticalSlider.current?.slickNext();
    }
    if (event.key === 'ArrowLeft') {
      const horizontalSlider = refs[currentSlide];
      horizontalSlider.current?.slickPrev();
    }
    if (event.key === 'ArrowRight') {
      const horizontalSlider = refs[currentSlide];
      horizontalSlider.current?.slickNext();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [onKeyDown]);

  const handleSlideChange = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <Container>
      <Slider
        {...verticalSettings}
        ref={verticalSlider}
        afterChange={handleSlideChange}
        onSwipe={(event) => console.log(event)}
      >
        <Slider
          {...horizontalSettings}
          ref={firstHorizontalSlider}
          onSwipe={(event) => console.log(event)}
        >
          {images.map((image) => image)}
        </Slider>
        <Slider
          {...horizontalSettings}
          ref={secondHorizontalSlider}
          onSwipe={(event) => console.log(event)}
        >
          {images.map((image) => image)}
        </Slider>
        <Slider
          {...horizontalSettings}
          ref={thirdHorizontalSlider}
          onSwipe={(event) => console.log(event)}
        >
          {images.map((image) => image)}
        </Slider>
      </Slider>
    </Container>
  );
};

export default App;
