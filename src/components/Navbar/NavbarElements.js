import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  padding: 1rem 10.5rem;
  z-index: 100;
  font-weight: 700;
`;

export const NavLogoLink = styled(NavLink)`
  color: hsl(0, 0%, 100%);
  font-size: 2rem;
  display: flex;
  position: absolute;
  top: 2rem;
  left: 11rem;
  text-decoration: none;
  cursor: pointer;

  @media screen and (max-width: 375px) {
    position: absolute;
    top: 2rem;
    left: 25px;
    font-size: 1.8rem;
  }
`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: hsl(0, 0%, 100%);
`;

export const Bars = styled(FaBars)`
  display: none;

  @media screen and (max-width: 375px){
    display: block;
    color: hsl(0, 0%, 100%);
    cursor: pointer;
    position: absolute;
    top: 2.5rem;
    right: 1rem; 
    font-size: 1.5rem;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 2rem;

  @media screen and (max-width: 375px){
    display: none;
  }
`;

export const NavMenuLinks = styled(Link)`
  color: hsl(0, 0%, 100%);
  display: flex;
  text-decoration: none; 
  padding: 0 1rem;
  cursor: pointer;
  font-family: "Josefin Sans", sans-serif;
  position: relative;

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
    margin-left: -8px;
  }

  &:hover { 
      &::after{
        width: 25%; 
        transition: all 0.3s ease;
      }
  }

`;
