import React from 'react'
import Movie from './Movie';
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
const Scrollable = () => {
    return (
        <div>
            <h2> Single Item</h2>
            <Carousel
                plugins={[
                    'arrows',
                    {
                    resolve: slidesToShowPlugin,
                    options: {
                    numberOfSlides: 3
                    }
                    },
                ]}
              >
                <Movie name="Movie 1" />
                <Movie name="Movie 2" />
                <Movie name="Movie 3" />
                <Movie name="Movie 4" />
                <Movie name="Movie 5" />
                <Movie name="Movie 6" />
                <Movie name="Movie 7" />
                <Movie name="Movie 8" />
            </Carousel>
        </div>
    );
}

export default Scrollable
