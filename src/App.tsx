import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Car from './car.png';
import Car2 from './car2.png';
import Car3 from './car3.png';
import { Container, Image } from './styles';
// import Slider from 'react-slick';

// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const settings = {
//   dots: false,
//   arrows: false,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   vertical: true, // Enable vertical orientation
//   verticalSwiping: true, // Enable vertical swiping
//   autoplay: false,
// };

const handleDragStart = (e: any) => e.preventDefault();

const items = [
  <Image
    key="1"
    alt="1"
    src={Car}
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <Image
    key="1"
    alt="1"
    src={Car2}
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <Image
    key="1"
    alt="1"
    src={Car3}
    onDragStart={handleDragStart}
    role="presentation"
  />,
];

const App = () => {
  return (
    <Container>
      {/* <Slider {...settings}> */}
      <AliceCarousel
        infinite
        mouseTracking
        items={items}
        disableDotsControls
        disableButtonsControls
        keyboardNavigation
      />
      {/* </Slider> */}
    </Container>
  );
};

export default App;
