import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

export const DropdownContainer = styled.div`
    position: fixed;
    z-index 99;
    width: 100%;
    height: 100%;
    background: #000;
    display: grid;
    top: ${({ isOpen }) => (isOpen ? "0" : "-1000px")};
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
`;

export const Logo = styled(Link)`
  color: ${(props) => props.theme.colors.white};
  font-size: 1.8rem;
  display: flex;
  position: absolute;
  top: 2rem;
  left: 2rem;
  text-decoration: none;
  cursor: pointer;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const CloseIcon = styled(FaTimes)`
  color: ${(props) => props.theme.colors.white};
  font-size: 1.8rem;

  position: absolute;
  top: 1.3rem;
  right: 0.5rem;
`;
export const DropdownWrapper = styled.div``;

export const DropdownMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 50px);
  text-align: center;
  margin-bottom: 4rem;
  margin-top: 14rem;
`;

export const DropdownLink = styled(Link)`
  display: flex;
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fontFamily.josefin};
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  cursor: pointer;
  margin-left: 2rem;
  font-weight: lighter;
  text-transform: uppercase;
`;
