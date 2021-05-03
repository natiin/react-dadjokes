import React, { Component } from "react";
import "./JokeDisplay.css";
import Joke from "./Joke";

import axios from "axios";
const API_URL = "https://icanhazdadjoke.com/";

class JokesDisplay extends Component {
  static defaultProps = { num: 25 };
  constructor(props) {
    super(props);
    this.state = {
      jokes: JSON.parse(window.localStorage.getItem("jokes") || "[]"),
      loading: false,
    };
    this.upvote = this.upvote.bind(this);
    this.downvote = this.downvote.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    if (this.state.jokes.length === 0) this.getJokes();
  }

  upvote(id) {
    this.setState(
      (prevState) => ({
        jokes: prevState.jokes.map((joke) => {
          if (joke.id === id) {
            return { ...joke, votes: joke.votes + 1 };
          } else {
            return joke;
          }
        }),
      }),
      () => window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes))
    );
  }
  downvote(id) {
    this.setState(
      (prevState) => ({
        jokes: prevState.jokes.map((joke) => {
          if (joke.id === id) {
            return { ...joke, votes: joke.votes - 1 };
          } else {
            return joke;
          }
        }),
      }),
      () => window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes))
    );
  }
  async getJokes() {
    const seenJokes = new Set(this.state.jokes.map((joke) => joke.id));

    try {
      const config = {
        headers: { Accept: "application/json" },
      };
      const jokes = [];
      while (jokes.length < this.props.num) {
        const response = await axios.get(API_URL, config);
        const newJoke = response.data;
        if (!seenJokes.has(newJoke.id) && !jokes.find((el) => el.id === newJoke.id)) {
          jokes.push({ joke: newJoke.joke, id: newJoke.id, votes: 0 });
        } else {
          console.log("Found a duplicate");
        }
      }
      this.setState(
        (prevState) => ({
          loading: false,
          jokes: [...prevState.jokes, ...jokes],
        }),
        () => window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes))
      );
    } catch (e) {
      alert(e);
      this.setState({ loading: false });
    }
  }
  handleClick() {
    this.setState({ loading: true }, this.getJokes);
  }
  render() {
    if (this.state.loading) {
      return (
        <div className="JokesDisplay-loader">
          <span className="JokesDisplay-loader-text">Loading</span>
        </div>
      );
    }
    let jokes = this.state.jokes.sort(function (a, b) {
      return b.votes - a.votes;
    });
    jokes = jokes.map((joke) => <Joke joke={joke.joke} id={joke.id} votes={joke.votes} key={joke.id} upvoteJoke={this.upvote} downvoteJoke={this.downvote} />);

    return (
      <section className="JokesDisplay-wrapper">
        <div className="JokesDisplay-sidebar">
          <p>
            <strong>Dad</strong>
            <br /> Jokes
          </p>
          <img src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg" alt="smile-logo" />
          <button onClick={this.handleClick}>Fetch Jokes</button>
        </div>
        <div className="JokesDisplay-container">{jokes}</div>;
      </section>
    );
  }
}

export default JokesDisplay;
