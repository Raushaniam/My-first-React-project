import {RadioType} from "./RadioBox/RadioBox";

export interface IHeader {
    title: string,
    placeholder: string,
    changeFilterType: (type: RadioType) => void,
    movieToSearch: (word: string) => void
}