import React ,{ useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import FilmThumbnailsList from './FilmThumbnailsList';

function FilmThumbnailsListCarousel() {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel fade activeIndex={index} onSelect={handleSelect} className="filmThumbnailsListCarousel">
      <Carousel.Item>
        <FilmThumbnailsList/>
      </Carousel.Item>
      <Carousel.Item>
        <FilmThumbnailsList/>
      </Carousel.Item>
      <Carousel.Item>
        <FilmThumbnailsList/>
      </Carousel.Item>
    </Carousel>
  );
}

export default FilmThumbnailsListCarousel;