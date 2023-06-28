import React, {FC, useMemo} from "react";
import {IMovieDetails} from "./IMovieDetails";
import "./MovieDetails.scss";
import f from '../../constants/movieList.json';
import {IMovie} from "../../types/IMovie";
import {Dictionary} from "../../constants/Dictionary";
import {Button} from "../Button/Button";
const films = f as IMovie[];

export const MovieDetails: FC<IMovieDetails> = ({id, hideMovieDetails}) => {
    const film:IMovie = useMemo(() => {
        return films.find((item)=>{
            return item.id === id;
        });
    }, [id]);
    const onHideMovieDetails = () => {
        hideMovieDetails();
    }
    return <div className="MovieDetails">
        <Button title={Dictionary.Search} onClick={onHideMovieDetails}/>
        {film.name}
    </div>
}