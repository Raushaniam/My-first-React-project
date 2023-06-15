import React, {FC} from "react";
import {IMain} from "./IMain";
import "./Main.scss";
import {HeaderMain} from "./HeaderMain/HeaderMain";
import {Dictionary} from "../../constants/Dictionary";
import {MovieList} from "./MovieList/MovieList";
import f from '../../constants/movieList.json'
import {IMovie} from "../../types/IMovie";
const films = f as IMovie[];
export const Main:FC<IMain> = () => {
    console.log(films);
    return <div className="Main">
        <HeaderMain find={Dictionary.Found} sorting={Dictionary.Sort} name={Dictionary.Name}/>
        <MovieList films={films}/>
    </div>;
}