import {createAsyncThunk} from "@reduxjs/toolkit";
import {actionTypes} from "../../app/constants/actionTypes";
import {LocalStorageKeys} from "../../app/constants/localStorageKeys";

export const removeTokenInLocalStorage = createAsyncThunk<void>(
    actionTypes.removeTokenInLocalStorage,
    async () => {
        localStorage.removeItem(LocalStorageKeys.AuthToken)
    }
)