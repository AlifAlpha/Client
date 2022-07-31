import styled, { keyframes } from "styled-components";

export const sign = keyframes`
  0% {
    opacity: 100%
  }
  100% {
    opacity: 5%;
  }
`;





export const LoadingContainer = styled.div`
  background-color: #008484;
  margin: 0;
  padding: 0;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
`;

export const LoadingBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
  overflow-y: hidden;
`;
export const Plane = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 20%;
  -webkit-animation: ${sign} 2s alternate infinite;
  -moz-animation: p ${sign} 2s alternate infinite;
  animation: ${sign} 2s alternate infinite;

  -webkit-animation-timing-function: linear;
  -moz-animation-timing-function: linear;
  animation-timing-function: linear;
  z-index: 99;

  @media screen and (max-width: 720px) {
    width: 80%;
  }
`;

