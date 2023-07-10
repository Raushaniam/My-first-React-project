import {IMovie} from "../../types/IMovie";

export interface IMain {
    showMovieDetails: (id: string) => void,
    films: IMovie[],
    filterType: string,
    numberOfFilms: number | string,
    onClickDate: (date: number) => void,
    date: number,
    all: string,
    clickedAll: () => void,
    isClickedAll: boolean
}