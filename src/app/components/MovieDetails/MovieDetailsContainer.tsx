import React, {Component} from "react";
import {IMovieDetails} from "./IMovieDetails";
import "./MovieDetails.scss";
import {MovieDetails} from "./MovieDetails";

export class MovieDetailsContainer extends Component<IMovieDetails, any> {
    render () {
        const {id, hideMovieDetails} = this.props;
        return <MovieDetails id={id} hideMovieDetails={hideMovieDetails} />
    }
}