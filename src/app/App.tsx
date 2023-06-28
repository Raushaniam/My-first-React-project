import React, {FC, useState} from "react";
import './App.scss';
import {Dictionary} from "./constants/Dictionary";
import {FooterContainer} from "./components/Footer/FooterContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import {MainContainer} from "./components/Main/MainContainer";
import {MovieDetailsContainer} from "./components/MovieDetails/MovieDetailsContainer";

export const App: FC = () => {
    const [isShowDetails, setShowDetails] = useState(false);
    const [movieId, setMovieId] = useState('');
    const showMovieDetails = (id: string) => {
        setMovieId(id);
        setShowDetails(true);
    }

    const hideMovieDetails = () => {
        setShowDetails(false);
    }

    return <div className="App">
        {isShowDetails ?  <MovieDetailsContainer id={movieId} hideMovieDetails={hideMovieDetails}/> : <HeaderContainer title={Dictionary.MovieVan} placeholder={Dictionary.SearchStringText}/>}
        <MainContainer showMovieDetails={showMovieDetails}/>
        <FooterContainer authorName={Dictionary.AuthorName}/>
    </div>
}