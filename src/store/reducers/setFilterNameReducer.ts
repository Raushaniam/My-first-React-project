import {IStore} from "../../app/types/IStore";
import {IMovieGenre} from "../../app/types/IMovieGenre";

export const setFilterNameReducer =  (state: IStore, action: any) => {
    const {filterName} = action.payload;
    state.filterName = filterName;
}