import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <h1>Hello world</h1>
      <p>Front end Home Page</p>
      <Link to='/leaverequest'>Click me</Link>
      <Link to='/dashboard'>dashboard here</Link>
    </>
  );
};

export default Home;
