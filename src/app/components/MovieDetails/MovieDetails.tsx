import React, {FC, useMemo} from "react";
import {IMovieDetails} from "./IMovieDetails";
import "./MovieDetails.scss";
import {Dictionary} from "../../constants/Dictionary";
import {Button} from "../Button/Button";
import {SiteName} from "../Header/SiteName/SiteName";
import {IMovie} from "../../types/IMovie";

export const MovieDetails: FC<IMovieDetails> = ({id, hideMovieDetails, films}) => {
    const film: IMovie = useMemo(() => {
        return films.find((item) => {
            return item.id === id;
        });
    }, [id]);
    const onHideMovieDetails = () => {
        hideMovieDetails();
    }

    return <div className="MovieDetails">
        <div className="SiteName">
            <SiteName title={Dictionary.MovieVan}/>
            <Button title={Dictionary.Search} onClick={onHideMovieDetails}/>
        </div>
        <div className="Film">
            <img className="Image" src={film.img} alt={film.name}></img>
            <div className="Details">
                <div className="Name">{film.name}</div>
                <div className="Year">{Dictionary.RELEASED}: {film.year}</div>
                <div className="Genre">{Dictionary.GENRES}: {film.genre.join(', ')}</div>
                <div className="Duration">{Dictionary.DURATION}: {film.duration}</div>
                <div className="Description">{film.description}</div>
            </div>
        </div>
    </div>
}