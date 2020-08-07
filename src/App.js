import React from 'react';
import './App.css';
import Nav from './components/Nav'
import Home from './components/Home'
import Result from './components/Result'
import { Route, HashRouter } from 'react-router-dom'



function App() {
  return (
    <HashRouter>
    <div className="App">
     <Nav/>
    <Route exact path='/' component={Home}/>
    <Route path='/result' component={Result} />
    </div>
    </HashRouter>

  );
}

export default App;
