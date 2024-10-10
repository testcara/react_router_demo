import React from "react";
import { useParams } from "react-router-dom";
import Footer from "./footer";

function UserProfile() {
  const { userId } = useParams();
  return (
    <div>
      <h2>user profile page</h2>
      <p>id: {userId}</p>
      <p>username: cara{userId}</p>
      <p>age: 18</p>
      <Footer />
    </div>
  );
}

export default UserProfile;
