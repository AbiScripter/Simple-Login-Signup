import React, { useEffect, useReducer, useState } from "react";
import SignupForm from "./SignupForm";
import SigninForm from "./SigninForm";
import { useNavigate } from "react-router-dom";

const FormWrapper = ({ users, dispatch }) => {
  const [currTab, setCurrTab] = useState("signup");
  const navigate = useNavigate();

  useEffect(() => {
    console.log(users);
    const alreadyLoggedInUser = localStorage.getItem("user");
    if (alreadyLoggedInUser) navigate(`/homepage/${alreadyLoggedInUser}`);
  }, []);

  return (
    <>
      <div>
        <button onClick={() => setCurrTab("signup")}>SignUp</button>
        <button onClick={() => setCurrTab("login")}>Login</button>
      </div>
      <div>
        {currTab === "signup" ? (
          <SignupForm users={users} dispatch={dispatch} />
        ) : (
          <SigninForm users={users} dispatch={dispatch} />
        )}
      </div>
    </>
  );
};

export default FormWrapper;
