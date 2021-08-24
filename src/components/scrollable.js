import React from 'react'
import Movie from './Movie';

import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import {useEffect, useState} from "react";
const movie_API = "https://api.themoviedb.org/3/movie/550?api_key=702913c155a3e7036e088e1afbfdcc9d";
const Scrollable = ({ title }) => {

	// const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 })
	// const isBigScreen = useMediaQuery({ minWidth: 1824 })
	// const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
	// const isPortrait = useMediaQuery({ orientation: 'portrait' })
	// const isRetina = useMediaQuery({ minResolution: '2dppx' })
	
	const [movies, setMovies] = useState([]);
	useEffect(()=> {
		fetch(movie_API).then((res) => res.json()).then((data) =>{
			setMovies(data.results);
		});
	},[])
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
				{movies.length > 0 && movies.map((movie) => <Movie key ={movie.id} {...movie}/>)}
				
			</Carousel>
		</div>
	);
}

Scrollable.defaultProps = {
	title: "TITLE MISSING"
}

export default Scrollable
