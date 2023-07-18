import {ISort} from "../../../types/ISort";

export interface IMainHeader {
    find: string,
    name: string,
    numberOfFilms: number|string,
    dates: string,
    changeSortType: (type: ISort) => void,
    sortType: ISort
}