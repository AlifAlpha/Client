import React from "react";
import Icon1 from "../img/technology.png";
import logo1 from "../img/picto.png";

import logo2 from "../img/ecriture.png";
import Icon3 from "../img/postit.png";
import Icon4 from "../img/deadline.png";
import Icon6 from "../img/password.png";
import Icon7 from "../img/participation.png";
import Icon8 from "../img/airplane.png";
import {
  LogoLeft,
  LogoRight,
  ServiceCard,
  ServiceContainer,
  //   ServiceH1,
  ServiceIcon,
  ServiceP,
  ServicesH2,
  ServiceWrapper,
} from "./MainMenuElemets";
import { Link } from "react-router-dom";

const Langues = () => {
  return (
    <ServiceContainer>
      {/* <ServiceH1>Langues</ServiceH1> */}
      <LogoLeft src={logo1} />
      <LogoRight src={logo2} />
      <ServiceWrapper>
        <Link style={{ textDecoration: "none" }} to='/it'>
          <ServiceCard>
            <ServiceIcon src={Icon1} />
            <ServicesH2>IT requests</ServicesH2>
            <ServiceP></ServiceP>
          </ServiceCard>
        </Link>

        <Link style={{ textDecoration: "none" }} to='/dgrdv'>
          <ServiceCard>
            <ServiceIcon src={Icon4} />
            <ServicesH2>DG appointment</ServicesH2>
            <ServiceP></ServiceP>{" "}
          </ServiceCard>
        </Link>

        <Link style={{ textDecoration: "none" }} to='/internalnote'>
          <ServiceCard>
            <ServiceIcon src={Icon3} />
            <ServicesH2>DG notes</ServicesH2>
            <ServiceP></ServiceP>{" "}
          </ServiceCard>
        </Link>
      </ServiceWrapper>

      <ServiceWrapper>
       
      <Link style={{ textDecoration: "none" }} to='/participation'>
          <ServiceCard>
            <ServiceIcon src={Icon7} />
            <ServicesH2>Participation</ServicesH2>
            <ServiceP></ServiceP>{" "}
          </ServiceCard>
        </Link>

      <Link style={{ textDecoration: "none" }} to='/travelinfo'>
          <ServiceCard>
            <ServiceIcon src={Icon8} />
            <ServicesH2>Travel Info</ServicesH2>
            <ServiceP></ServiceP>{" "}
          </ServiceCard>
        </Link>
       
        <Link style={{ textDecoration: "none" }} to='/dashboard'>
          <ServiceCard>
            <ServiceIcon src={Icon6} />
            <ServicesH2>Login</ServicesH2>
            <ServiceP></ServiceP>{" "}
          </ServiceCard>
        </Link>
      </ServiceWrapper>
      
    </ServiceContainer>
  );
};

export default Langues;
