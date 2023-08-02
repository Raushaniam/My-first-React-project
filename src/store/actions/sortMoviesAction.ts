import {ISortValue} from '../../app/types/ISortValue'
export const sortMoviesAction = (sortType: ISortValue) => ({payload: { sortType }});