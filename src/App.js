import './App.css';
import { Component } from 'react';

class App extends Component {

  constructor() {
    super();
    this.state = {
      movies: [] 
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        response.json();
        // console.log(response);
      })
      .then(movies => this.setState({ movies }))    
  }


  render() {
    return (
      <div className="App">
        <h1 className="text-3xl">Movie List</h1>
        {
          this.state.movies.map((movie) => {
            return <h1 key={movie.id}>{movie.title}</h1>
          })
        }
      </div>
    );
  }
}

export default App;
