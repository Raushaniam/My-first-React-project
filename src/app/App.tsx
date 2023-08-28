import React, {FC, useEffect, useState} from "react";
import './App.scss';
import {Dictionary} from "./constants/Dictionary";
import {RadioType} from "./components/Header/RadioBox/RadioBox";
import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import {useDispatch, useSelector} from "react-redux";
import {IStore} from "./types/IStore";
import {filterMovies} from "../store/slices/films";
import {RouterProvider} from "react-router";
import {router} from "./Router";

export const App: FC = () => {
    const filterName = useSelector((state: IStore) => {
        return state.filterName;
    });
    const error = useSelector((state: IStore) => {
        return state.error;
    });
    useEffect(() => {
        if (error.message) {
            alert(error.message);
        }
    }, [error])
    const dispatch = useDispatch<any>();
    const [filterType, setFilterType] = useState<RadioType>('name');

    useEffect(() => {
        dispatch(filterMovies({filterName, filterType}))
    }, [filterName]);

    const changeFilterType = (type: RadioType) => {
        setFilterType(type);
    }

    return <div className="App">
        <Header
            title={Dictionary.MovieVan}
            placeholder={Dictionary.SearchStringText}
            changeFilterType={changeFilterType}
        />
        <RouterProvider router={router}/>
        <Footer authorName={Dictionary.AuthorName}/>
    </div>
};