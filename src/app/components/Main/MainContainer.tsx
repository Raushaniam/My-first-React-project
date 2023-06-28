import React, {Component} from "react";
import {IMain} from "./IMain";
import "./Main.scss";
import {Main} from "./Main";

export class MainContainer extends Component<IMain, any> {
    render () {
        return <Main showMovieDetails={this.props.showMovieDetails}/>
    }
}