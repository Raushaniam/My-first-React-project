import React, {FC} from "react";
import {IHeader} from "./IHeader";
import "./Header.scss";
import {SiteName} from "./SiteName/SiteName";
import {Search} from "./Search/Search";
import {useDispatch} from "react-redux";
import {setFilterName} from "../../../store/slices/films";
import {Logout} from "./Logout/Logout";
import {removeTokenInLocalStorage} from "../../../store/thunks/removeTokenInLocalStorage";

export const Header: FC<IHeader> = ({title, placeholder, changeFilterType}) => {
    const dispatch = useDispatch<any>();
    const onlogout = () => {
        dispatch(removeTokenInLocalStorage())
    }

    const movieToSearch = (filterName: string) => {
        dispatch(setFilterName({filterName}));
    }

    return <div className="Header">
        <Logout onClick={onlogout}/>
        <SiteName title={title}/>
        <Search
            placeholder={placeholder}
            changeFilterType={changeFilterType}
            movieToSearch={movieToSearch}
        />
    </div>;
};