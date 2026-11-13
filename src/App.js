import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NowPlaying from './components/NowPlaying';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <div className="film-grain" aria-hidden="true" />
      <div className="film-vignette" aria-hidden="true" />
      <div className="film-scratch" aria-hidden="true" />
      <div className="film-scratch film-scratch--b" aria-hidden="true" />
      <NowPlaying />
    </>
  );
}

export default App;
