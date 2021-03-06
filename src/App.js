import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
class App extends Component {
  render() {
    const { store } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {store.items.map(i => (
            <p>{i}</p>
          ))}
          <button onClick={() => store.pushItem('nub')}>BUTTON</button>
        </header>
      </div>
    );
  }
}

export default App;
