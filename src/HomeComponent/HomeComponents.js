import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
      rgba(255, 255, 255, 0.75),
      rgba(255, 255, 255, 0.75)
    ),
    url("images/background-image.png");
  margin: 0;
  padding: 0;
  height: 100vh;
  overflow: hidden;
`;
export const Logo = styled.img`
  position: absolute;
  top: 0;
  left: 10px;
  width: 100px;
`;
export const PageTitle = styled.h1`
  position: absolute;
  top: 20px;
  font-size: 50px;
  color: #282828;
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
`;

export const BtnContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  place-items: center;
`;

export const Btn = styled.div`
  color: #fff;
  font-size: 30px;
  background-color: #547666;

  border: 1px solid #547666;
  padding: 10px 40px;
  border-radius: 5px;

  margin: 5px;
  &:hover {
    cursor: pointer;
    background-color: #282828;
    color: #fff;
    border: 1px solid #fff;
    transition: 0.6s;
  }
  @media screen and (max-width: 768px) {
    font-size: 20px;

    padding: 10px 20px;
  }
`;
