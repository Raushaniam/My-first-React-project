import {IMovieGenre} from "../../app/types/IMovieGenre";
import {IStore} from "../../app/types/IStore";

export const filterMoviesReducer =  (state: IStore, action: any) => {
    const {filterName, filterType} = action.payload;
    const filteredFilms = state.films.filter((item) => {
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
    state.filteredFilms = filteredFilms;
};