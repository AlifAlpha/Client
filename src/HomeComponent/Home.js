import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logoISESCO.png";
import bg from "../img/backgroundimage.png";
import {
  Btn,
  BtnContainer,
  HomeContainer,
  Logo,
  PageTitle,
} from "./HomeComponents";
const Home = () => {
  return (
    <HomeContainer src={bg}>
      <Logo src={logo} />
      <PageTitle>Leave Forms</PageTitle>
      <BtnContainer>
        <Link style={{ textDecoration: "none" }} to='/dashboard'>
          <Btn>Login</Btn>
        </Link>
        <Link style={{ textDecoration: "none" }} to='/leaverequest'>
          <Btn>Fill in</Btn>
        </Link>
      </BtnContainer>
    </HomeContainer>
  );
};

export default Home;
