import React, {FC} from "react";
import {IMovieDetails} from "./IMovieDetails";
import "./MovieDetails.scss";
import {Dictionary} from "../../constants/Dictionary";
import {Button} from "../Button/Button";
import {SiteName} from "../Header/SiteName/SiteName";
import {useDispatch, useSelector} from "react-redux";
import {IStore} from "../../types/IStore";

export const MovieDetails: FC<IMovieDetails> = () => {
    const dispatch = useDispatch<any>();
    const film = useSelector((state: IStore) => {
        return state.selectedFilm
    });

    return <div className="MovieDetails">
        <div className="SiteName">
            <SiteName title={Dictionary.MovieVan}/>
            <Button title={Dictionary.Search}/>
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