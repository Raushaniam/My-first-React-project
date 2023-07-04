import React, {FC} from "react";
import {IMain} from "./IMain";
import "./Main.scss";
import {MainHeader} from "./MainHeader/MainHeader";
import {Dictionary} from "../../constants/Dictionary";
import {MovieList} from "./MovieList/MovieList";
import f from '../../constants/movieList.json'
import {IMovie} from "../../types/IMovie";
const films = f as IMovie[];
export const Main:FC<IMain> = ({showMovieDetails}) => {
    return <div className="Main">
        <MainHeader find={Dictionary.Found} all={Dictionary.All} sorting={Dictionary.Sort} name={Dictionary.Name} genre={Dictionary.Genre}/>
        <MovieList films={films} showMovieDetails={showMovieDetails}/>
    </div>;
}