import React from "react";
import Movie from "./Movie";
import Carousel, {
    slidesToShowPlugin,
    slidesToScrollPlugin,
    infinitePlugin
} from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

const Scrollable = ({ title }) => {
    return (
        <div className="Scrollable">
            <h2 className="MiddleTitle"> {title} </h2>
            <Carousel
                plugins={[
                    "arrows",
                    "infinite",
                    {
                        resolve: slidesToShowPlugin,
                        options: {
                            numberOfSlides: 5,
                        },
                    },
                    {
                        resolve: slidesToScrollPlugin,
                        options: {
                            numberOfSlides: 5,
                        },
                    },
                ]}
                breakpoints={{
                    640: {
                        plugins: [
                            "arrows",
                            "infinite",
                            {
                                resolve: slidesToShowPlugin,
                                options: {
                                    numberOfSlides: 1,
                                },
                            },
                            {
                                resolve: slidesToScrollPlugin,
                                options: {
                                    numberOfSlides: 1,
                                },
                            },
                        ],
                    },
                    1080: {
                        plugins: [
                            "arrows",
                            "infinite",
                            {
                                resolve: slidesToShowPlugin,
                                options: {
                                    numberOfSlides: 3,
                                },
                            },
                            {
                                resolve: slidesToScrollPlugin,
                                options: {
                                    numberOfSlides: 3,
                                },
                            },
                        ],
                    },
                }}
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
};

Scrollable.defaultProps = {
    title: "TITLE MISSING",
};

export default Scrollable;
