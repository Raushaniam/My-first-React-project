import { configureStore } from "@reduxjs/toolkit";
import {filmsReducer} from "./slices/films";

export default configureStore({
    reducer: filmsReducer
});
