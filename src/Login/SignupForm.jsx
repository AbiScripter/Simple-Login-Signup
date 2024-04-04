import React, { useState } from "react";

const SignupForm = ({ users, dispatch }) => {
  const [signupData, setSignupData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const handleChange = (e) => {
    setSignupData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    //!preventing adding already used usernames
    let flag = false;
    users.forEach((user) => {
      if (user.username === signupData.username) {
        alert("username already exists try different one");
        flag = true;
      }
    });
    //if not already exists add it to the userslist
    !flag &&
      dispatch({
        type: "signup",
        payload: { ...signupData, isSignedIn: false },
      });
    setSignupData({ username: "", password: "", email: "" });
  };

  return (
    <>
      <h2>SignUp</h2>
      <form onSubmit={handleSignUp}>
        <input
          type="text"
          placeholder="username"
          name="username"
          value={signupData.username}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          value={signupData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={signupData.password}
          onChange={handleChange}
        />

        <button>SignUp</button>
      </form>
    </>
  );
};

export default SignupForm;
