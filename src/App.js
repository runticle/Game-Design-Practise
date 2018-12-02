import React, { Component } from 'react'
import World from './features/world'
import Dashboard from './features/dashboard'


class App extends Component {
  render() {
    return (
      <div>
        <div id='world_container'>
          <World />
        </div>
        <div id ='dashboard_container'>
          <Dashboard />
        </div>
      </div>
    );
  }
}

export default App;
