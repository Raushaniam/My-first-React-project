import {IStore} from "../../app/types/IStore";

export const setShowDetailsReducer =  (state: IStore, action:{payload: boolean}) => {
    state.showDetails = action.payload;
};