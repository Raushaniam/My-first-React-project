import React, {FC} from "react";
import {IMovieList} from "./IMovieList";
import "./MovieList.scss";
import {useDispatch, useSelector} from "react-redux";
import {IStore} from "../../../types/IStore";
import {setSelectedMovie} from "../../../../store/slices/films";
import {useNavigate} from "react-router";
import {routes} from "../../../constants/routes";

export const MovieList: FC<IMovieList> = () => {
    const navigate = useNavigate();
    const films = useSelector((state: IStore) => {
        return state.filteredFilms
    });
    const dispatch = useDispatch<any>();
    const showMovieDetails = (id: string) => {
        dispatch(setSelectedMovie(id));
    }
    const onMovieClick = (id: string) => {
        showMovieDetails(id);
        navigate(routes.DETAILS);
    }
    return <div className="MovieList">
        {
            films && films.map(({id, img, year, name}) => {
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