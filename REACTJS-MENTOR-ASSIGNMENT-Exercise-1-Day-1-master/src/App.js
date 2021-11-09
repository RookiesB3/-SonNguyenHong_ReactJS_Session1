import logo from './logo.svg';
import './App.css';
import ListHeroes from './components/ListHeroes';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
function App() {
  return (
    <div className="App">
      <ListHeroes />
    </div>
  );
}

export default App;
