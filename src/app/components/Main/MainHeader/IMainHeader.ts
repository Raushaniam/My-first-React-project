export interface IMainHeader {
    find: string,
    sorting: string,
    name: string,
    genre: string,
    filterType: string,
    numberOfFilms: number|string,
    onClickDate: (date: number) => void,
    date: number
}