import React, {Component} from "react";
import {IMovieDetails} from "./IMovieDetails";
import "./MovieDetails.scss";
import {MovieDetails} from "./MovieDetails";

export class MovieDetailsContainer extends Component<IMovieDetails, any> {
    render () {
        return <MovieDetails id={this.props.id} hideMovieDetails={this.props.hideMovieDetails} />
    }
}