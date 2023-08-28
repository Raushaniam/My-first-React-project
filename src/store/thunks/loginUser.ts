import {createAsyncThunk} from "@reduxjs/toolkit";
import {actionTypes} from "../../app/constants/actionTypes";
import {IStore} from "../../app/types/IStore";
import {IRegistrationResponse} from "../../app/types/IRegistrationResponse";
import {IUserLoginData} from "../../app/types/IUserLoginData";
import {setTokenToLocalStorage} from "./setTokenToLocalStorage";

export const loginUser = createAsyncThunk<IRegistrationResponse, IUserLoginData>(
    actionTypes.loginUser,
    async (userRegistrationData, thunkAPI) => {
        const state = thunkAPI.getState() as IStore;
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
)