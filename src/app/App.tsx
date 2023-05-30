import React, {FC} from "react";
import './App.scss';
import {Header} from "./components/Header/Header";
import {Dictionary} from "./constants/Dictionary";
import {Footer} from "./components/Footer/Footer";
import {Main} from "./components/Main/Main";

export const App: FC = () => {
    return <div className="App">
        <Header title={Dictionary.MovieVan} placeholder={Dictionary.SearchStringText}/>
        <Main />
        <Footer authorName={Dictionary.AuthorName}/>
    </div>
}