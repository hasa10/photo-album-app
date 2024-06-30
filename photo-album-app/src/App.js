import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import UserAlbums from './components/UserAlbums';
import AlbumPhotos from './components/AlbumPhotos';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/user/:userId/albums" element={<UserAlbums />} />
          <Route path="/album/:albumId/photos" element={<AlbumPhotos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
