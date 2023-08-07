import {IStore} from "../../app/types/IStore";
export const filmIdReducer =  (state: IStore, action:{payload: string}) => {
    const id = action.payload;
    const filmId = state.films.find((item) => {
            return item.id === id;
    });
    state.selectedFilm = filmId;
};