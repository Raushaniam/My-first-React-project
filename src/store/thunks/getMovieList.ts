import {createAsyncThunk} from "@reduxjs/toolkit";
import {actionTypes} from "../../app/constants/actionTypes";
import {IMovie} from "../../app/types/IMovie";

export const getMovieList = createAsyncThunk<IMovie[]>(
    actionTypes.getMovieList,
    async () => {
        const response = await fetch(' http://localhost:3000/films')
        return await response.json();
    }
)