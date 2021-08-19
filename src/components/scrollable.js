import React from 'react'
import Movie from './Movie';

import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

const Scrollable = ({ title }) => {

	// const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 })
	// const isBigScreen = useMediaQuery({ minWidth: 1824 })
	// const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
	// const isPortrait = useMediaQuery({ orientation: 'portrait' })
	// const isRetina = useMediaQuery({ minResolution: '2dppx' })

	return (
		<div className="Scrollable">
			<h2 className="MiddleTitle"> {title} </h2>
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
				breakpoints={{
					640: {
						plugins:
							[
								'arrows',
								{
									resolve: slidesToShowPlugin,
									options: {
										numberOfSlides: 1
									}
								},
							]
					},
					1080: {
						plugins:
							[
								'arrows',
								{
									resolve: slidesToShowPlugin,
									options: {
										numberOfSlides: 3
									}
								},
							]
					}
				}}
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
		</div>
	);
}

Scrollable.defaultProps = {
	title: "TITLE MISSING"
}

export default Scrollable
