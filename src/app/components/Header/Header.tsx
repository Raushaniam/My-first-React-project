import React, {FC} from "react";
import {IHeader} from "./IHeader";
import "./Header.scss";
import {SiteName} from "./SiteName/SiteName";
import {Search} from "./Search/Search";
import {useDispatch} from "react-redux";
import {setFilterName} from "../../../store/slices/films";
import {Navigate} from "./Navigate/Navigate";

export const Header: FC<IHeader> = ({title, placeholder, changeFilterType}) => {
    const dispatch = useDispatch<any>();

    const movieToSearch = (filterName: string) => {
        dispatch(setFilterName({filterName}));
    }

    return <div className="Header">
        <Navigate/>
        <SiteName title={title}/>
        <Search
            placeholder={placeholder}
            changeFilterType={changeFilterType}
            movieToSearch={movieToSearch}
        />
    </div>;
};