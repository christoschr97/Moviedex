import './App.css';
import { Component } from 'react';

class App extends Component {

  constructor() {
    super();
    this.state = {
      movies: [
        {
          title: 'The Godfather',
        }, 
        {
          title: 'Dracula',
        }, 
        {
          title: 'The Godfather: Part II',
        },    
      ] 
    }
  }

  render() {
    return (
      <div className="App">
        <h1 className="text-3xl">Movie List</h1>
        {
          this.state.movies.map((movie) => {
            return <h1>{movie.title}</h1>
          })
        }
      </div>
    );
  }
}

export default App;
