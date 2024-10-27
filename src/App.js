import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import AddStudent from './pages/AddStudent';
import ViewStudent from './pages/ViewStudent';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Main />}></Route>
            <Route exact path='pages/AddStudent' element={<AddStudent />}></Route>
            <Route exact path='/pages/ViewStudent' element={<ViewStudent />}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
