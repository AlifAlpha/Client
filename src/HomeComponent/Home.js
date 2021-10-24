import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logoISESCO.png";
// import bg from "../img/background.png";
import {
  Btn,
  BtnContainer,
  HomeContainer,
  Logo,
  PageTitle,
  // Squareimg,
} from "./HomeComponents";
const Home = () => {
  return (
    <HomeContainer>
      {/* <Squareimg src={bg} /> */}
      <Logo src={logo} />
      <PageTitle>All rights reserved - ICESCO</PageTitle>
      <BtnContainer>
        <Link style={{ textDecoration: "none" }} to='/leaverequest'>
          <Btn>Leave form</Btn>
        </Link>
        <Link style={{ textDecoration: "none" }} to='/dashboard'>
          <Btn>Log in</Btn>
        </Link>
        <Link style={{ textDecoration: "none" }} to='/it'>
          <Btn>IT requests</Btn>
        </Link>
        <Link style={{ textDecoration: "none" }} to='/internalnote'>
          <Btn>internal note</Btn>
        </Link>
        <div>{/* to make a cell */}</div>
        <Link style={{ textDecoration: "none" }} to='/dgrdv'>
          <Btn>internal note</Btn>
        </Link>
      </BtnContainer>
    </HomeContainer>
  );
};

export default Home;
