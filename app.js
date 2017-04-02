import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import Scoreboard from './components/Scoreboard'

var PLAYERS = [
  {
    name: "Jim Hoskins",
    score: 31,
    id: 1,
  },
  {
    name: "Andrew Chalkey",
    score: 35,
    id: 2,
  },
  {
    name: "Alena Holligan",
    score: 42,
    id: 3,
  }
];

ReactDOM.render(<Scoreboard initialPlayers={PLAYERS}/>, document.getElementById('container'));