import React, { Component } from "react";
import "./Joke.css";
class Joke extends Component {
  constructor(props) {
    super(props);
    this.upvote = this.upvote.bind(this);
    this.downvote = this.downvote.bind(this);
  }
  getColor() {
    if (this.props.votes >= 15) {
      return "#4CAF50";
    } else if (this.props.votes >= 12) {
      return "#8BC34A";
    } else if (this.props.votes >= 9) {
      return "#CDDC39";
    } else if (this.props.votes >= 6) {
      return "#FFEB3B";
    } else if (this.props.votes >= 3) {
      return "#FFC107";
    } else if (this.props.votes >= 0) {
      return "#FF9800";
    } else {
      return "#f44336";
    }
  }
  getEmoji() {
    if (this.props.votes >= 15) {
      return "em em-rolling_on_the_floor_laughing";
    } else if (this.props.votes >= 12) {
      return "em em-laughing";
    } else if (this.props.votes >= 9) {
      return "em em-smiley";
    } else if (this.props.votes >= 6) {
      return "em em-slightly_smiling_face";
    } else if (this.props.votes >= 3) {
      return "em em-neutral_face";
    } else if (this.props.votes >= 0) {
      return "em em-confused";
    } else {
      return "em em-angry";
    }
  }
  upvote(e) {
    this.props.upvoteJoke(this.props.id);
  }
  downvote(e) {
    this.props.downvoteJoke(this.props.id);
  }
  render() {
    return (
      <div className="Joke">
        <div className="Joke-voting">
          <button className="btn-up" onClick={this.upvote}>
            <i className="bi bi-arrow-up-short up"></i>
          </button>
          <span className="circle" style={{ borderColor: this.getColor() }}>
            {this.props.votes}
          </span>
          <button className="btn-down" onClick={this.downvote}>
            <i className="bi bi-arrow-down-short down"></i>
          </button>
        </div>
        <div className="Joke-text">
          <p>{this.props.joke}</p>
        </div>
        <div className="Joke-smiles">
          <i className={this.getEmoji()}></i>
        </div>
      </div>
    );
  }
}

export default Joke;
