import styled from "styled-components";

export const ProductsContainer = styled.div`
  position: relative;
  width: 100vw;
  padding: 3rem 6rem;

  @media screen and (max-width: 375px) {
    padding: 0rem 5rem;
  }
`;

export const ProductHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 3rem 4rem;

  @media screen and (max-width: 375px) {
    display: block;
    margin: 0;
  }
`;

export const ProductHeader = styled.h1`
  font-size: 3rem;
  text-align: center;
  text-transform: uppercase;
  color: ${props => props.theme.colors.black};
  font-weight: lighter;
  font-family: ${props => props.theme.fontFamily.josefin};

  @media screen and (max-width: 375px) {
    font-size: 2rem;
    margin: 3rem -3rem;
  }
`;

export const ProductButton = styled.button`
  font-size: 15px;
  padding: 0 50px;
  color: ${props => props.theme.colors.black};
  background: ${props => props.theme.colors.white};
  border: solid 1px;
  text-transform: uppercase;
  letter-spacing: .2rem;
  transition: 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.colors.white};
    background: ${props => props.theme.colors.black};
  }

  @media screen and (max-width: 375px) {
    font-size: 0.8rem;
    padding: 0.7rem 2.8rem;
    position: absolute;
    bottom: -73px;
    left: 109px;
    font-weight: bold;
  }
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-auto-rows: minmax(50px, auto);
  max-width: 650px;
  padding: 0 32px;
  margin-left: 302px;
  margin-top: 45px;
  margin-bottom: 100px;

  @media screen and (max-width: 375px) {
    display: none;
  }
`;

export const ProductWrapperMobile = styled.div`
  display: none;

  @media screen and (max-width: 375px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: 1fr;
    grid-auto-rows: minmax(50px, auto);
    max-width: 650px;
    padding: 0 32px;
    margin: 0;
  }
`;

export const ProductCard = styled.div`
  position: relative;
  width: 255px;
  height: 450px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: flex-end;

  // Pseudo-element of the parent element for the opacity not to affect card's text

  &::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
  }

  &:hover {
    &::before {
      background: rgba(255, 255, 255, 0.5);
    }
    h2 {
      color: ${props => props.theme.colors.black};
    }
  }

  @media screen and (max-width: 375px) {
    width: 330px;
    height: 120px;
    background-position-x: 80%;
    background-position-y: 80%;
  }
`;

export const ProductTitle = styled.h2`
  font-size: 2rem;
  font-weight: lighter;
  text-transform: uppercase;
  margin: 0rem 3rem 3rem 2rem;
  position: relative;
  font-family: ${props => props.theme.fontFamily.josefin};
  color: ${props => props.theme.colors.white};

  @media screen and (max-width: 375px) {
    font-size: 1.4rem;
    margin: 0rem 10rem 1.3rem 1.75rem;
    letter-spacing: .1rem;
  }
`;
