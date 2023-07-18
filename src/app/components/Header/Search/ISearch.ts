import {RadioType} from "../RadioBox/RadioBox";

export interface ISearch {
    placeholder: string,
    changeFilterType: (type: RadioType) => void,
    movieToSearch: (word: string) => void
}