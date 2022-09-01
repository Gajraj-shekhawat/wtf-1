import { Input } from "@chakra-ui/react";
import React from "react";

import "./Gym.css";
import Gymthree from "./Gymthree";
import Gymtwo from "./Gymtwo";


import mainimage from "./mainimage.png";
const Gymone = () => {
  return (
    <>
      <div id="box">
        <img src={mainimage} alt="" />
      </div>
      <div id="input">
         <Input id="in" width={"80%"} height={"50px"} variant="filled" placeholder="Search" />
      </div>
      <Gymtwo/>
      <Gymthree/>
     
    </>
  );
};

export default Gymone;
