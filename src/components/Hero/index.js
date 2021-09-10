import React, {useState} from "react";
import Dropdown from "../Dropdown";
import Navbar from "../Navbar";

import { HeroContainer, HeroContent, HeroTitle ,HeroItems } from "./HeroElements";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  };

  return (
    <HeroContainer>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <HeroContent>
        <HeroItems>
          <HeroTitle>Immersive experiences that deliver</HeroTitle>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
