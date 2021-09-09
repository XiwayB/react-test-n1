import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  background-color: #000;

  @media screen and (max-width: 375px) {
    position: relative;
  }
`;

export const FooterWrap = styled.div`
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  margin: 0 auto;
  height: 170px;

  @media screen and (max-width: 375px) {
    padding: 35px 24px;
    margin-top: 170px;
    height: 456px;
  }
`;

export const SocialMedia = styled.section`
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  margin: 16px 140px 0px 140px;

  @media screen and (max-width: 375px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: hsl(0, 0%, 100%);
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 158px;

  @media screen and (max-width: 375px) {
    position: absolute;
    bottom: 84px;
  }
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 26px;
  position: relative;

  // Pseudo-element of the parent element for underline effect

  &::after {    
    background: none repeat scroll 0 0 transparent;
    bottom: -3px;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: #fff;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }

  &:hover { 
      &::after{
        width: 100%; 
        left: 0; 
      }
  }
`;

export const FooterMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 16px 0;

  @media screen and (max-width: 375px) {
    flex-direction: column;
    margin-left: 25px;
  }
`;

export const FooterMenuLinks = styled(Link)`
  color: hsl(0, 0%, 100%);
  display: flex;
  text-decoration: none;
  font-weight: lighter;
  padding-right: 2rem;
  cursor: pointer;
  position: relative;
  font-family: 'Josefin Sans', sans-serif;

  // Pseudo-element of the parent element for underline effect

  &::after {    
    background: none repeat scroll 0 0 transparent;
    bottom: -15px;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: hsl(0, 0%, 100%);
    width: 0;
    margin-left: 10px;
  }

  &:hover { 
      &::after{
        width: 35%; 
        left: 0; 
        transition: all 0.8s ease;
      }
  }

  @media screen and (max-width: 375px) {
    margin-bottom: 24px;
  }
`;

export const FooterCopyright = styled.p`
  color: hsl(0, 0%, 41%);
  font-size: 15px;
  margin: 16px 0;

  @media screen and (max-width: 375px) {
    width: 300px;
    margin-top: 80px;
    text-align: center;
  }
`;
