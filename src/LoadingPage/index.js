import React from "react";
import {

  LoadingBox,
  LoadingContainer,
  Plane,
} from "./LoadingElement";
import plane from "../img/icescoloading.png";



const Loading = () => {
  return (
    <LoadingContainer>
      <LoadingBox>
        <Plane src={plane} />
      </LoadingBox>

     
    </LoadingContainer>
  );
};

export default Loading;
