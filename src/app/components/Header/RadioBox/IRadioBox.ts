import {RadioType} from "./RadioBox";

export interface IRadioBox {
    name: string,
    genre: string,
    changeFilterType: (type: RadioType) => void,
}