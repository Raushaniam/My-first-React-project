import React, { Component } from "react";
import {IHeader} from "./IHeader";
import "./Header.scss";
import {Header} from "./Header";

export class HeaderContainer extends Component <IHeader, any> {
    render() {
        const {title, placeholder} = this.props;
        return <Header title={title} placeholder={placeholder} />
    }
}