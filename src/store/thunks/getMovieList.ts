import {createAsyncThunk} from "@reduxjs/toolkit";
import {actionTypes} from "../../app/constants/actionTypes";
import {IMovie} from "../../app/types/IMovie";
import {getMovieListCreator} from "../payloadCreators/getMovieListCreator";

export const getMovieList = createAsyncThunk<IMovie[]>(
    actionTypes.getMovieList,
    getMovieListCreator
)