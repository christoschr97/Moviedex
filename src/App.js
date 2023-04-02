import "./App.css";
import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import Navbar from "./components/navbar/navbar.component";
import { getMovies } from "./services/movies.service";
import Header from "./components/header/header.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      searchField: "",
    };
  }

  componentDidMount() {
    console.log(getMovies());

    getMovies().then((data) => {
      this.setState(
        () => {
          return { movies: data };
        },
        () => {
          console.log(this.state.movies);
        }
      );
    });
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { movies, searchField } = this.state;
    const filteredMovies = movies.filter((movie) => {
      return movie.title.toLowerCase().includes(searchField.toLowerCase());
    });

    console.log(this.state);
    return (
      <div className="App mx-auto">
        <Navbar />
        <div>
          <Header />
          <SearchBox
            onChangeHandler={this.handleChange}
            placeholder={"Search Box"}
            className="custom-class"
          />
          <CardList movies={filteredMovies} />
        </div>
      </div>
    );
  }
}

export default App;
