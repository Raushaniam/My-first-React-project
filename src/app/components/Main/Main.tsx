import React, {FC, useEffect, useState} from "react";
import {IMain} from "./IMain";
import "./Main.scss";
import {MainHeader} from "./MainHeader/MainHeader";
import {Dictionary} from "../../constants/Dictionary";
import {MovieList} from "./MovieList/MovieList";
import {useDispatch, useSelector} from "react-redux";
import {IStore} from "../../types/IStore";
import {ISort} from "../../types/ISort";
import {sortMoviesByName, sortMoviesByYear} from "../../../store/slices/films";
import {getMovieList} from "../../../store/thunks/getMovieList";
import {getTokenFromLocalStorage} from "../../../store/thunks/getTokenFromLocalStorage";
import {useNavigate} from "react-router";
import {routes} from "../../constants/routes";

export const Main: FC<IMain> = () => {
    const dispatch = useDispatch<any>();
    const filterName = useSelector((state: IStore) => {
        return state.filterName;
    });

    const isLoggedIn = useSelector((state: IStore) => {
        return state.isLoggedIn;
    })
    const [sortType, setSortType] = useState<ISort>({
        name: {value: 'asc', isActive: true},
        year: {value: 'asc', isActive: false}
    });
    const navigate = useNavigate();
    useEffect(() => {
        if (!isLoggedIn) {
            navigate(routes.LOGIN);
        }
    }, [isLoggedIn])

    useEffect(() => {
        dispatch(getTokenFromLocalStorage());
        dispatch(getMovieList())
    }, []);

    useEffect(() => {
        dispatch(sortMoviesByName(sortType.name.value))
    }, [sortType.name.value, filterName]);

    useEffect(() => {
        dispatch(sortMoviesByYear(sortType.year.value))
    }, [sortType.year.value, filterName]);

    const films = useSelector((state: IStore) => {
        return state.filteredFilms
    });

    const movieCounter = films.length;

    const changeSortType = (type: ISort) => {
        setSortType(type);
    }

    return <div className="Main">
        <MainHeader
            find={Dictionary.Found}
            numberOfFilms={movieCounter}
            name={Dictionary.NAME}
            dates={Dictionary.REALISE}
            changeSortType={changeSortType}
            sortType={sortType}
        />
        <MovieList/>
    </div>;
}