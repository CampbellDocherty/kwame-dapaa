import { Settings } from 'react-slick';

export const horizontalSettings: Settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
};

export const verticalSettings: Settings = {
  ...horizontalSettings,
  vertical: true,
  verticalSwiping: true,
};
