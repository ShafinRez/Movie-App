import React from 'react'
import Movie from './Movie';
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import MediaQuery, { useMediaQuery } from 'react-responsive';
import '@brainhubeu/react-carousel/lib/style.css';

const Scrollable = () => {

    const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 })
    const isBigScreen = useMediaQuery({ minWidth: 1824 })
    const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
    const isPortrait = useMediaQuery({ orientation: 'portrait' })
    const isRetina = useMediaQuery({ minResolution: '2dppx' })
    
    return (
        <div>
            <h2> Top Hits </h2>
            <MediaQuery minWidth={1224}>
                <Carousel
                    plugins={[
                        'arrows',
                        {
                        resolve: slidesToShowPlugin,
                        options: {
                        numberOfSlides: 5                        
                        }
                        },
                    ]}
                >
                    {/* put all in ul, each Movie is in an li, change css ul in className*/}
                    <Movie name="Movie 1" />
                    <Movie name="Movie 2" />
                    <Movie name="Movie 3" />
                    <Movie name="Movie 4" />
                    <Movie name="Movie 5" />
                    <Movie name="Movie 6" />
                    <Movie name="Movie 7" />
                    <Movie name="Movie 8" />
                </Carousel>
            </MediaQuery>
            <MediaQuery maxWidth={1224}>
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
                    {/* put all in ul, each Movie is in an li, change css ul in className*/}
                    <Movie name="Movie 1" />
                    <Movie name="Movie 2" />
                    <Movie name="Movie 3" />
                    <Movie name="Movie 4" />
                    <Movie name="Movie 5" />
                    <Movie name="Movie 6" />
                    <Movie name="Movie 7" />
                    <Movie name="Movie 8" />
                </Carousel>
            </MediaQuery>
        </div>
    );
}

export default Scrollable
