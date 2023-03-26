import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      filteredMovies: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        this.setState(
          () => {
            return { movies: data };
          },
          () => {
            console.log(this.state);
          }
        );
      });

  }

  render() {
    return (
      <div className="App container mx-auto">
        <input
          type="search"
          placeholder="Search Movies"
          className="search-box block w-4/12 mx-auto my-8 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          onChange={
            (e) => {
              let filteredMovies = this.state.movies.filter((movie) => movie.name.includes(e.target.value));
              this.setState(() => {
                return { filteredMovies: filteredMovies }
              })
            }
          }
        />
        <h1 className="text-3xl">Movie List</h1>
        {this.state.filteredMovies.map((movie) => {
          return <h1 key={movie.id}>{movie.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
