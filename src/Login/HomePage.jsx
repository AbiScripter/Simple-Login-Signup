import React from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";

const HomePage = ({ users, dispatch }) => {
  const { username } = useParams();
  const handleSignOut = () => {
    dispatch({ type: "signout", payload: username });
    localStorage.removeItem("user");
  };

  return (
    <div>
      <h2>Hello {username}</h2>
      <button onClick={handleSignOut}>
        <NavLink to="/">SignOut</NavLink>
      </button>
    </div>
  );
};

export default HomePage;
