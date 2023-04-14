import "./App.css";
import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import Navbar from "./components/navbar/navbar.component";
import { getMovies } from "./services/movies.service";
import Header from "./components/header/header.component";

const App = () => {
  const [searchField, setSearchField] = useState("a"); // [value that we want to store, function to update the value]
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState(movies);

  console.log("render");

  const onSearchChange = (e) => {
    const searchFieldString = e.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  useEffect(() => {
    getMovies().then((data) => {
      setMovies(data);
    });
  }, []); //empty array says that this effect should only run once when the component mounts.

  useEffect(() => {
    const filteredMovies = movies.filter((movie) => {
      return movie.title.toLowerCase().includes(searchField);
    });
    setFilteredMovies(filteredMovies);
  }, [searchField, movies]); //this effect will run whenever the searchField or movies state changes

  return (
    <div className="App mx-auto">
      <Navbar />
      <div>
        <Header />
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder={"Search Box"}
          className="custom-class"
        />
        <CardList movies={filteredMovies} />
      </div>
    </div>
  );
};

export default App;
