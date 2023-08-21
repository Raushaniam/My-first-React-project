import {createAsyncThunk} from "@reduxjs/toolkit";
import {actionTypes} from "../../app/constants/actionTypes";
import {LocalStorageKeys} from "../../app/constants/localStorageKeys";

export const getTokenFromLocalStorage = createAsyncThunk<string>(
    actionTypes.getTokenFromLocalStorage,
    async () => {
        return localStorage.getItem(LocalStorageKeys.AuthToken);
    }
)