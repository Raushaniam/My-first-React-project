import {createAsyncThunk} from "@reduxjs/toolkit";
import {actionTypes} from "../../app/constants/actionTypes";
import {IStore} from "../../app/types/IStore";
import {IUserRegistrationData} from "../../app/types/IUserRegistrationData";
import {IRegistrationResponse} from "../../app/types/IRegistrationResponse";
import {setTokenToLocalStorage} from "./setTokenToLocalStorage";

export const registerUser = createAsyncThunk<IRegistrationResponse, IUserRegistrationData>(
    actionTypes.registerUser,
    async (userRegistrationData, thunkAPI) => {
        const state = thunkAPI.getState() as IStore;
        try {
            const response = await fetch(' http://localhost:3000/register',
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