import styled from "styled-components";

import ImageHeroDesktop from "../../images/desktop/image-hero.jpg";
import ImageHeroMobile from "../../images/mobile/image-hero.jpg";

export const HeroContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${ImageHeroDesktop});
  height: 100vh;
  background-position: center;
  background-size: cover; 

  @media screen and (max-width: 375px) {
    background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${ImageHeroMobile});
    background-size: 380px 560px; 
  }  
`;

export const HeroContent = styled.div`
  height: calc(100hv - 80px);
  max-height: 100%;
  width: 100%;
  padding: 0rem calc((100cw - 1300px) / 2);
`;

export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100vh;
  padding: 0 2rem;
  width: 900px;
  color: ${props => props.theme.colors.white};
  text-transform: uppercase;
  line-height: 1;

  @media screen and (max-width: 375px) {
    width: 362px;
    padding: 0 1rem;
  }
`;

export const HeroTitle = styled.h1`
  font-size: clamp(2rem, 10vw, 4rem);
  letter-spacing: 2px;
  border-style: solid;
  color: ${props => props.theme.colors.white};
  display: flex;
  align-items: center;
  line-height: 1;
  padding: 3rem;
  margin: -1rem 2rem 5rem 9rem;
  font-family: ${props => props.theme.fontFamily.josefin};
  font-weight: lighter;
  
  @media screen and (max-width: 375px) {
    width: 100%;
    margin: 0 0rem 6rem .4rem;
    padding: 26px;
  }
`;
