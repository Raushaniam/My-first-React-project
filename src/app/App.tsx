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
import {ISort} from "./types/ISort";

const films = f as IMovie[];

export const App: FC = () => {
    const [isShowDetails, setShowDetails] = useState(false);
    const [movieId, setMovieId] = useState('');
    const [filterName, setFilterName] = useState('');
    const [filterType, setFilterType] = useState<RadioType>('name');
    const [sortType, setSortType] = useState<ISort>({
        name: {value: 'asc', isActive: true},
        year: {value: 'asc', isActive: false}
    });

    const changeSortType = (type: ISort) => {
        setSortType(type);
    }

    const changeFilterType = (type: RadioType) => {
        setFilterType(type);
    }

    const movieToSearch = (word: string) => {
        setFilterName(word);
    }

    let filteredList: IMovie[] = useMemo(() => {
        console.log(0)
        return films.filter((item) => {
            if (!filterName) {
                return true;
            }
            if (filterType === 'name') {
                return item.name.toLowerCase().indexOf(filterName.toLowerCase()) > -1;
            }
            if (filterType === 'genre') {
                return !!item.genre.find((genre) => genre.toLowerCase() === filterName.toLowerCase() as IMovieGenre);
            }

        });
    }, [filterName]);

    const movieCounter = filteredList.length;

    filteredList = useMemo(() => {
        if (sortType.name.value === 'asc') {
            return filteredList.sort((a, b) => {
                if (a.name < b.name) {
                    return -1;
                }
                if (a.name > b.name) {
                    return 1;
                }
                return 0;
            });
        } else {
            return filteredList.sort((a, b) => {
                if (a.name < b.name) {
                    return 1;
                }
                if (a.name > b.name) {
                    return -1;
                }
                return 0;
            });
        }

    }, [sortType.name.value, filterName]);

    filteredList = useMemo(() => {
        if (sortType.year.value === 'asc') {
            return filteredList.sort((a, b) => {
                if (a.year < b.year) {
                    return -1;
                }
                if (a.year > b.year) {
                    return 1;
                }
                return 0;
            });
        } else {
            return filteredList.sort((a, b) => {
                if (a.year < b.year) {
                    return 1;
                }
                if (a.year > b.year) {
                    return -1;
                }
                return 0;
            });
        }
    }, [sortType.year.value, filterName]);

    console.log(filteredList)

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
            films={filteredList}
            showMovieDetails={showMovieDetails}
            filterType={filterType}
            numberOfFilms={movieCounter}
            dates={Dictionary.REALISE}
            changeSortType={changeSortType}
            sortType={sortType}
        />
        <Footer authorName={Dictionary.AuthorName}/>
    </div>
}