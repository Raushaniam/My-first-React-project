import React, {FC} from "react";
import {IMovieList} from "./IMovieList";
import "./MovieList.scss";

export const MovieList: FC<IMovieList> = ({films, showMovieDetails}) => {
    const onMovieClick = (id: string) => {
        showMovieDetails(id);
    }
    return <div className="MovieList">
        {
            films.map(({id, img, year, name}) => {
                return <div className="MovieCard" key={id} onClick={() => onMovieClick(id)}>
                    <div className="Movie">
                        <img className="Image" src={img} alt={name}></img>
                        <div className="Name">{name}</div>
                        <div className="Year">{year}</div>
                    </div>
                </div>
            })
        }

    </div>;
}