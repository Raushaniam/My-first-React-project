import React, {FC, useMemo, useState} from "react";
import './App.scss';
import {Dictionary} from "./constants/Dictionary";
import f from './constants/movieList.json'
import {IMovie} from "./types/IMovie";
import {RadioType} from "./components/Header/RadioBox/RadioBox";
import {Main} from "./components/Main/Main";
import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import {MovieDetails} from "./components/MovieDetails/MovieDetails";
import {IMovieGenre} from "./types/IMovieGenre";

const films = f as IMovie[];

export const App: FC = () => {
    const [isShowDetails, setShowDetails] = useState(false);
    const [movieId, setMovieId] = useState('');
    const [filterName, setFilterName] = useState('');
    const [filterType, setFilterType] = useState<RadioType>('');
    const [date, setDate] = useState(0);
    const onClickDate = (date: number) => {
        setDate(date);
    }

    const changeFilterType = (type: RadioType) => {
        setFilterType(type);
    }

    const movieToSearch = (word: string) => {
        setFilterName(word);
    }

    const filteredList: IMovie[] = useMemo(() => {
        return films.filter((item) => {
            if(Number(item.year) === date) {
                return item.year.indexOf(String(date)) > -1;
            } else {
                if (filterType === 'name') {
                    return item.name.toLowerCase().indexOf(filterName.toLowerCase()) > -1;
                }
                if (filterType === 'genre') {
                    return !!item.genre.find((genre) => genre.toLowerCase() === filterName.toLowerCase() as IMovieGenre);
                }
            }
        });
    }, [filterName, date]);

    const movieCounter = filteredList.length;

    const showMovieDetails = (id: string) => {
        setMovieId(id);
        setShowDetails(true);
    }

    const hideMovieDetails = () => {
        setShowDetails(false);
    }

    return <div className="App">
        {isShowDetails ?
            <MovieDetails
                id={movieId}
                hideMovieDetails={hideMovieDetails}
            /> :
            <Header
                title={Dictionary.MovieVan}
                placeholder={Dictionary.SearchStringText}
                changeFilterType={changeFilterType}
                movieToSearch={movieToSearch}
            />
        }
        <Main
            films={movieCounter === 0 ? films : filteredList}
            showMovieDetails={showMovieDetails}
            filterType={filterType}
            numberOfFilms={movieCounter === 12 ? Dictionary.All : movieCounter}
            onClickDate={onClickDate}
            date={date}
        />
        <Footer authorName={Dictionary.AuthorName}/>
    </div>
}