import React from 'react';
import './App.css';
import Main from './components/main/Main';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <React.Fragment className="App">
      
      <Router>
        <Routes>

          <Route exact path='/' element={<Main/>}></Route>

        </Routes>
      </Router>

    </React.Fragment>
  );
}

export default App;
