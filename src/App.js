import React from 'react';
import './App.css';
import Main from './components/main/Main';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import NotFound from './components/notFound/NotFound';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        
        <Router>
          <Routes>

            <Route exact path='/' element={<Main/>}></Route>
            <Route exact path='*' element={<NotFound/>}></Route>


          </Routes>
        </Router>

      </div>
    </Provider>
  );
}

export default App;
