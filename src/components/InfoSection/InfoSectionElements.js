import styled from "styled-components";

export const InfoSectionWrapper = styled.div`
  position: relative;
  margin-top: 4rem;
  padding: 5rem 10.4rem;
  display: flex;

  @media screen and (max-width: 375px){
    display: block;
    padding: 1.2rem;
    margin-top: 5rem;
  }
`;
export const InfoSectionImg = styled.img`
@media screen and (max-width: 375px){
    height: 241px;
    width: 340px;
  }
`;

export const InfoSectionContent = styled.div`
  position: absolute;
  background: #fff;
  height: 400px;
  width: 566px;
  padding: 5rem 0 0em 6rem;
  bottom: -48px;
  right: 141px;

  @media screen and (max-width: 375px){
    width: 300px;
    position: relative;
    padding: 0;
    text-align: center;
    right: -12px;
    height: 365px;
  }
`;

export const InfoSectionTitle = styled.h1`
  text-transform: uppercase;
  font-size: 3rem;
  font-weight: lighter;
  margin-bottom: 1.5rem;
  font-family: 'Josefin Sans', sans-serif;

  @media screen and (max-width: 375px){
    font-size: 2rem;
  }
`;

export const InfoSectionText = styled.p`
  font-size: 15px;
  line-height: 1.7;
  font-weight: lighter;
  margin-bottom: 2rem;
  color: hsl(0, 0%, 55%);

`;
