import {ISortValue} from "./ISortValue";

export interface ISort {
    name: {
        value: ISortValue,
        isActive: boolean
    }
    year: {
        value: ISortValue,
        isActive: boolean
    }
}