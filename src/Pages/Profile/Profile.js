import React from 'react'
import { useSelector } from 'react-redux';

const Profile = () => {
const user = useSelector((state) => state.userReducer.user);
// useSelector Hook Redux pour lire des données dans le store global

  return (
    <div>
        <h2>{user && user.name}</h2>
        <h2>{user && user.email}</h2>
        <h2>{user && user.phone}</h2>
    </div>
  )
}

export default Profile;
