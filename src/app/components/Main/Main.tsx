import React, {FC} from "react";
import {IMain} from "./IMain";
import "./Main.scss";
import {MainHeader} from "./MainHeader/MainHeader";
import {Dictionary} from "../../constants/Dictionary";
import {MovieList} from "./MovieList/MovieList";

export const Main:FC<IMain> = ({showMovieDetails, films, filterType, numberOfFilms}) => {

    return <div className="Main">
        <MainHeader
            find={Dictionary.Found}
            numberOfFilms={numberOfFilms}
            sorting={Dictionary.Sort}
            name={Dictionary.Name}
            genre={Dictionary.Genre}
            filterType={filterType}
        />
        <MovieList films={films} showMovieDetails={showMovieDetails}/>
    </div>;
}