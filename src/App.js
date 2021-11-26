import { Routes, Route } from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './views/Home/Home';
import Favoritos from './views/Favoritos/Favoritos';
import Login from './views/Login/Login';
import Registrar from './views/Cadastro/Cadastro';
import Game from './views/Game/Game';
import Profile from "./views/Profile/Profile"

function App() {
  return (
    <div className="app">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/favoritos" element={<Favoritos/>}/>
        <Route path="/registrar" element={<Registrar/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/game" element={<Game/>}/>
      </Routes>
    </div>
  );
}

export default App;