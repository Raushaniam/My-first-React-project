import {IStore} from "../../app/types/IStore";
import {IMovie} from "../../app/types/IMovie";

export const sortMoviesByNameReducer = (state: IStore, action: any) => {
    const {sortType} = action.payload;
    const sortedFilms: IMovie[] = state.films.sort((a, b) => {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    });
    if (sortType === 'asc') {
        state.filteredFilms = sortedFilms;
    } else {
        state.filteredFilms = sortedFilms.reverse();
    }

}