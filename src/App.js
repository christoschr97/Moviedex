import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {

  constructor() {
    super();
    this.state = {
      name: 'Christos'
    }
  }

  changeName() {
    return this.setState({
      name: 'John'
    });
  }

  render() {
    return (
      <div className="App">
        <h1 className="text-3xl font-bold">
          Hello world!
        </h1>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi <span className="underline">{this.state.name}</span>, welcome to React!
          </p>
          <button onClick={() => {
            this.changeName();
          }}>
            Change Name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
