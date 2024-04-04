import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const SigninForm = ({ users, dispatch }) => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const userDataIfAlreadyExists = users.find(
      (user) => user.username === loginData.username
    );

    if (!userDataIfAlreadyExists) {
      alert("user does not exist");
      return;
    }

    if (userDataIfAlreadyExists.password === loginData.password) {
      alert("successfully logged in");
      dispatch({
        type: "signin",
        payload: userDataIfAlreadyExists.username,
      });
      navigate(`/homepage/${userDataIfAlreadyExists.username}`);
      // localStorage.setItem("user", JSON.stringify(users));
    } else {
      alert("password is incorrect");
    }
  };

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="username"
          name="username"
          value={loginData.username}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={loginData.password}
          onChange={handleChange}
        />

        <button>Login</button>
      </form>
    </>
  );
};

export default SigninForm;
