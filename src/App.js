import './App.css';
import Board from './components/Board';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <>

      <Routes>
        <Route path = "/" element = { <Home /> } />
        <Route path = "/single-player" element = { <Board /> } />
        <Route path = "/multi-player" element = { <Board /> } />
      </Routes>          
      
    </>
    
  );
}

export default App;
