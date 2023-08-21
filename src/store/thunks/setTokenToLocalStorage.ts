import {createAsyncThunk} from "@reduxjs/toolkit";
import {actionTypes} from "../../app/constants/actionTypes";
import {LocalStorageKeys} from "../../app/constants/localStorageKeys";

export const setTokenToLocalStorage = createAsyncThunk<string, string>(
    actionTypes.setTokenToLocalStorage,
    async (arg) => {
        localStorage.setItem(LocalStorageKeys.AuthToken, arg);
        return arg;
    }
)