import React, {FC} from "react";
import {IMovieList} from "./IMovieList";
import "./MovieList.scss";

export const MovieList: FC<IMovieList> = ({films}) => {
    return <div className="MovieList">
        {
            films.map(({id, img, year, name}) => {
                return <div className="MovieCard">
                    <div className="Movie" key={id}>
                        <img className="Image" src={img} alt={name}></img>
                        <div className="Name">{name}</div>
                        <div className="Year">{year}</div>
                    </div>
                </div>
            })
        }

    </div>;
}