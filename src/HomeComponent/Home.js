import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logoISESCO.png";
import bg from "../img/background.png";
import {
  Btn,
  BtnContainer,
  HomeContainer,
  Logo,
  PageTitle,
  Squareimg,
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
      </BtnContainer>
    </HomeContainer>
  );
};

export default Home;
