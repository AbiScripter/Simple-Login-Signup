import React, { useReducer } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import FormWrapper from "./FormWrapper";
import { reducer, initialState } from "./reducer";

const Layout = () => {
  const [users, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route
              index
              element={<FormWrapper users={users} dispatch={dispatch} />}
            />
          </Route>
          <Route path="/homepage/:username">
            <Route
              index
              element={<HomePage users={users} dispatch={dispatch} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Layout;
