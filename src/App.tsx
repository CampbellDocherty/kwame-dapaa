import { Container, Image } from './styles';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useRef, useState } from 'react';
import { verticalSettings, horizontalSettings } from './sliderSettings';
import { fetchImages } from './fetchImages';

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [images, setImages] = useState<string[]>([]);
  const verticalSlider = useRef<Slider>(null);
  const firstHorizontalSlider = useRef<Slider>(null);
  const secondHorizontalSlider = useRef<Slider>(null);
  const thirdHorizontalSlider = useRef<Slider>(null);
  const refs = [
    firstHorizontalSlider,
    secondHorizontalSlider,
    thirdHorizontalSlider,
  ];

  useEffect(() => {
    const getImageUrls = async () => {
      return fetchImages();
    };
    getImageUrls().then((urls) => {
      if (urls) setImages([...urls, ...urls, ...urls]);
    });
  }, []);

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
      >
        <Slider {...horizontalSettings} ref={firstHorizontalSlider}>
          {images.map((src, index) => (
            <Image key={index} alt="Car" src={src} />
          ))}
        </Slider>
        <Slider {...horizontalSettings} ref={secondHorizontalSlider}>
          {images.map((src, index) => (
            <Image key={index} alt="Car" src={src} />
          ))}
        </Slider>
        <Slider {...horizontalSettings} ref={thirdHorizontalSlider}>
          {images.map((src, index) => (
            <Image key={index} alt="Car" src={src} />
          ))}
        </Slider>
      </Slider>
    </Container>
  );
};

export default App;
