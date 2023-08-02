import React, {FC} from "react";
import {IMain} from "./IMain";
import "./Main.scss";
import {MainHeader} from "./MainHeader/MainHeader";
import {Dictionary} from "../../constants/Dictionary";
import {MovieList} from "./MovieList/MovieList";
import {useSelector} from "react-redux";
import {IStore} from "../../types/IStore";

export const Main: FC<IMain> = (
    {
        numberOfFilms,
        dates,
        changeSortType,
        sortType
    }
) => {

    return <div className="Main">
        <MainHeader
            find={Dictionary.Found}
            numberOfFilms={numberOfFilms}
            name={Dictionary.NAME}
            dates={dates}
            changeSortType={changeSortType}
            sortType={sortType}
        />
        <MovieList/>
    </div>;
}