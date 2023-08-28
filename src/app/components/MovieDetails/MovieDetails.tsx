import React, {FC} from "react";
import {IMovieDetails} from "./IMovieDetails";
import "./MovieDetails.scss";
import {Dictionary} from "../../constants/Dictionary";
import {Button} from "../Button/Button";
import {SiteName} from "../Header/SiteName/SiteName";
import {useDispatch, useSelector} from "react-redux";
import {IStore} from "../../types/IStore";
import {useNavigate} from "react-router";
import {routes} from "../../constants/routes";

export const MovieDetails: FC<IMovieDetails> = () => {
    const dispatch = useDispatch<any>();
    const navigate = useNavigate();
    const film = useSelector((state: IStore) => {
        return state.selectedFilm
    });

    const toHomepage = () => {
        navigate(routes.HOME);
    }

    return <div className="MovieDetails">
        <div className="SiteName">
            <SiteName title={Dictionary.MovieVan}/>
            <Button title={Dictionary.Search} onClick={toHomepage}/>
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