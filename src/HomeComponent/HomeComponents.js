import styled, { keyframes } from "styled-components";
export const squareMove = keyframes`
  from {
    margin-left: 40%;
  }
  to {
    margin-left: -40%;
  }
`;
export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0.8)
    ),
    url("../img/backgroundimage.png");
  margin: 0;
  padding: 0;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
`;
export const Squareimg = styled.img`
  position: absolute;
  animation: ${squareMove} 6s infinite;
  z-index: -99;
`;
export const Logo = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -120%);
  width: 200px;
  margin-bottom: 20px;
`;
export const PageTitle = styled.h1`
  position: absolute;
  font-size: 10px;
  bottom: 0%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #282828;
  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

export const BtnContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 120px;

  /* place-items: center; */
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    margin-top: 150px;
  }
`;

export const Btn = styled.div`
  color: #fff;
  font-size: 30px;
  background-color: #282828;
  text-align: center;
  border: 1px solid #282828;
  padding: 10px 40px;
  border-radius: 5px;

  margin: 5px;
  &:hover {
    cursor: pointer;
    background-color: #fff;

    color: #282828;
    border: 1px solid #282828;
    transition: 0.4s;
  }
  @media screen and (max-width: 768px) {
    font-size: 20px;

    margin-bottom: 30px;
    padding: 10px 20px;
  }
`;
