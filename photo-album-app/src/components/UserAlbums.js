import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const UserAlbums = () => {
  const { userId } = useParams();
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
        setAlbums(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchAlbums();
  }, [userId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>User Albums</h1>
      <ul>
        {albums.map(album => (
          <li key={album.id}>
            <Link to={`/album/${album.id}/photos`}>{album.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserAlbums;
