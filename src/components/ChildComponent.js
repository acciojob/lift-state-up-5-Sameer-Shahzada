import React from "react";

const ChildComponent = ({ isLoggedIn, setisLoggedIn }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setisLoggedIn(true);
  };

  return (
    <>
      {!isLoggedIn ? (
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input id="username" type="text" />

          <label htmlFor="password">Password:</label>
          <input id="password" type="password" />

          <button type="submit">Login</button>
        </form>
      ) : (
        <p>You are logged in!</p>
      )}
    </>
  );
};

export default ChildComponent;