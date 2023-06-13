import React, {FC} from "react";
import './App.scss';
import {Dictionary} from "./constants/Dictionary";
import {FooterContainer} from "./components/Footer/FooterContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import {MainContainer} from "./components/Main/MainContainer";

export const App: FC = () => {
    return <div className="App">
        <HeaderContainer title={Dictionary.MovieVan} placeholder={Dictionary.SearchStringText}/>
        <MainContainer/>
        <FooterContainer authorName={Dictionary.AuthorName}/>
    </div>
}