import {IStore} from "../../app/types/IStore";
import {IMovie} from "../../app/types/IMovie";

export const sortMoviesByNameReducer = (state: IStore, action: any) => {
    const { sortType } = action.payload;
    let sortedFilms: IMovie[] = [];
    if (sortType === 'asc') {
        sortedFilms = state.films.sort((a, b) => {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        });
    } else {
        sortedFilms = state.films.sort((a, b) => {
            if (a.name < b.name) {
                return 1;
            }
            if (a.name > b.name) {
                return -1;
            }
            return 0;
        });
    }
    state.filteredFilms = sortedFilms;
}