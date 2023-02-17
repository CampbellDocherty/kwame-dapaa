import Car from './car.png';
import { Container, Image, Slider } from './styles';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const horizontalSettings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
};

const verticalSettings = {
  ...horizontalSettings,
  vertical: true,
  verticalSwiping: true,
};

const images = [
  <Image key="1" alt="1" src={Car} />,
  <Image key="1" alt="1" src={Car} />,
  <Image key="1" alt="1" src={Car} />,
];

const App = () => {
  return (
    <Container>
      <Slider {...verticalSettings}>
        <Slider {...horizontalSettings}>{images.map((image) => image)}</Slider>
        <Slider {...horizontalSettings}>{images.map((image) => image)}</Slider>
      </Slider>
    </Container>
  );
};

export default App;
