import {createAsyncThunk} from "@reduxjs/toolkit";
import {actionTypes} from "../../app/constants/actionTypes";
import {IMovie} from "../../app/types/IMovie";
import {IStore} from "../../app/types/IStore";

export const getMovieList = createAsyncThunk<IMovie[]>(
    actionTypes.getMovieList,
    async (_, thunkAPI) => {
        const state = thunkAPI.getState() as IStore;
        console.log(state);
        try {
            const response = await fetch(' http://localhost:3000/films',
                {
                    headers: {
                        Authorization: `Bearer ${state.authToken}`
                    }
                })
            if (response.status >= 400 && response.status <= 600) {
                throw Error(JSON.stringify({
                    status: response.status,
                    message: await response.json()
                }));
            }
            return await response.json();
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)