import React, {FC} from "react";
import './App.scss';
import {Header} from "./components/Header/Header";
import {Dictionary} from "./constants/Dictionary";

export const App: FC = () => {
    return <div className="App">
        <Header title={Dictionary.MovieVan}/>
    </div>
}