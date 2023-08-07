import React, {FC, useEffect, useState} from "react";
import './App.scss';
import {Dictionary} from "./constants/Dictionary";
import {RadioType} from "./components/Header/RadioBox/RadioBox";
import {Main} from "./components/Main/Main";
import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import {MovieDetails} from "./components/MovieDetails/MovieDetails";
import {ISort} from "./types/ISort";
import {useDispatch, useSelector} from "react-redux";
import {IStore} from "./types/IStore";
import {getMovieList} from "../store/thunks/getMovieList";
import {filterMovies, sortMoviesByName, sortMoviesByYear} from "../store/slices/films";

export const App: FC = () => {
    const films = useSelector((state: IStore) => {
        return state.filteredFilms
    });
    const isShowDetails = useSelector((state: IStore) => {
        return state.showDetails
    });
    const dispatch = useDispatch<any>();
    const [filterName, setFilterName] = useState('');
    const [filterType, setFilterType] = useState<RadioType>('name');
    const [sortType, setSortType] = useState<ISort>({
        name: {value: 'asc', isActive: true},
        year: {value: 'asc', isActive: false}
    });

    useEffect(() => {
        dispatch(getMovieList())
    }, []);

    useEffect(() => {
        dispatch(filterMovies({filterName, filterType}))
    },[filterName]);

    useEffect(() => {
        dispatch(sortMoviesByName(sortType.name.value))
    },[sortType.name.value, filterName]);

    useEffect(() => {
        dispatch(sortMoviesByYear(sortType.year.value))
    },[sortType.year.value, filterName]);

    const changeSortType = (type: ISort) => {
        setSortType(type);
    }

    const changeFilterType = (type: RadioType) => {
        setFilterType(type);
    }

    const movieToSearch = (word: string) => {
        setFilterName(word);
    }

    const movieCounter = films.length;

    return <div className="App">
        {isShowDetails ?
            <MovieDetails/> :
            <Header
                title={Dictionary.MovieVan}
                placeholder={Dictionary.SearchStringText}
                changeFilterType={changeFilterType}
                movieToSearch={movieToSearch}
            />
        }
        <Main
            filterType={filterType}
            numberOfFilms={movieCounter}
            dates={Dictionary.REALISE}
            changeSortType={changeSortType}
            sortType={sortType}
        />
        <Footer authorName={Dictionary.AuthorName}/>
    </div>
}