import {createAsyncThunk} from "@reduxjs/toolkit";
import {actionTypes} from "../../app/constants/actionTypes";
import {IRegistrationResponse} from "../../app/types/IRegistrationResponse";
import {IUserLoginData} from "../../app/types/IUserLoginData";
import {loginUserCreator} from "../payloadCreators/loginUserCreator";

export const loginUser = createAsyncThunk<IRegistrationResponse, IUserLoginData>(
    actionTypes.loginUser,
    loginUserCreator
)