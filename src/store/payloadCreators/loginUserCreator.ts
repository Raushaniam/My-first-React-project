import {IStore} from "../../app/types/IStore";
import {setTokenToLocalStorage} from "../thunks/setTokenToLocalStorage";
import {BaseThunkAPI} from "@reduxjs/toolkit/dist/createAsyncThunk";
import {IUserLoginData} from "../../app/types/IUserLoginData";

export const loginUserCreator = async (userRegistrationData: IUserLoginData, thunkAPI:BaseThunkAPI<IStore, any>) => {
    try {
        const response = await fetch(' http://localhost:3000/login',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userRegistrationData)
            })
        const value = await response.json();
        if (response.status >= 400 && response.status <= 600) {
            throw Error(value);
        }
        thunkAPI.dispatch<any>(setTokenToLocalStorage(value.accessToken))
        return value;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
}