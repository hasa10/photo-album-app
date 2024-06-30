import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const [users, setUsers] = useState([]);
  const [stats, setStats] = useState({ users: 0, albums: 0, photos: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersResponse = await axios.get('https://jsonplaceholder.typicode.com/users');
        const albumsResponse = await axios.get('https://jsonplaceholder.typicode.com/albums');
        const photosResponse = await axios.get('https://jsonplaceholder.typicode.com/photos');

        setUsers(usersResponse.data);
        setStats({
          users: usersResponse.data.length,
          albums: albumsResponse.data.length,
          photos: photosResponse.data.length,
        });
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Landing Page</h1>
      <p>Total Users: {stats.users}</p>
      <p>Total Albums: {stats.albums}</p>
      <p>Total Photos: {stats.photos}</p>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link to={`/user/${user.id}/albums`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LandingPage;
