import React from 'react';
import './App.css';
import List from './List';

class App extends React.Component {

  render() {
    return (
      <div className="App">
          <h1>To Do</h1>
          <List />
      </div>
    );
  }

}

export default App;
