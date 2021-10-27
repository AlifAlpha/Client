import styled from "styled-components";

export const ServiceContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;

  @media screen and (max-width: 1000px) {
    height: 100vh;
  }

  @media screen and (max-width: 768px) {
    height: 180vh;
  }

  /* @media screen and (max-width: 480px) {
    height: 2000px;
  } */
`;

export const LogoRight = styled.img`
  position: absolute;
  top: 20px;
  right: 0;
  width: 230px;
  @media screen and (max-width: 1200px) {
    width: 160px;
  }
  @media screen and (max-width: 1100px) {
    width: 140px;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }

  @media screen and (max-width: 480px) {
    display: none;
  }
`;
export const LogoLeft = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  @media screen and (max-width: 1200px) {
    width: 90px;
  }
  @media screen and (max-width: 1100px) {
    width: 80px;
  }
  @media screen and (max-width: 768px) {
    width: 70px;
  }
`;

export const ServiceWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ServiceCard = styled.div`
  background: white;
  display: flex;
  top: 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: 2px solid #4f7a7a;
  border-radius: 10px;
  max-height: 340px;
  width: 250px;
  padding: 30px;
  margin-top: 50px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  transition: all 0.4s ease-in-out;

  &:hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
  @media screen and (max-width: 1000px) {
    width: 200px;
  }
  @media screen and (max-width: 768px) {
    margin-top: 10px;
    width: 250px;
  }
`;

export const ServiceIcon = styled.img`
  height: 80px;
  width: 80px;
  margin-bottom: 30px;
`;

// export const ServiceH1 = styled.h1`
//   font-size: 4rem;
//   color: #eefcfe;
//   padding: 3rem;

//   @media screen and (max-width: 480px) {
//     font-size: 2rem;
//   }
// `;

export const ServicesH2 = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #304a4a;
`;
export const ServiceP = styled.p`
  font-size: 0.8rem;
  text-align: center;
`;
