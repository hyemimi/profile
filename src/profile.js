import React from "react";
import { useSelector } from "react-redux";

function Profile() {
  const user = useSelector((state) => state.user.value);
  return (
    <div>
      <h1>My Profile</h1>
      <p>name : {user.name}</p>
      <p>age : {user.age}</p>
      <p>height : {user.height}</p>
      <p>favorites : {user.favorites}</p>
    </div>
  );
}
export default Profile;
