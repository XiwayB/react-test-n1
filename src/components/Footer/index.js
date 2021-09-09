import React from "react";
import {
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";
import { ImFacebook2 } from 'react-icons/im';
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialLogo,
  SocialIcons,
  SocialMediaWrap,
  SocialIconLink,
  FooterMenu,
  FooterMenuLinks,
  FooterCopyright
} from "./FooterElements";
import { menuData } from "../../data/MenuData";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">loopstudios</SocialLogo>
            <SocialIcons>
              <SocialIconLink
                href="/"
                target="_blank"
                aria-label="Facebook"
                rel="noopener noreferrer"
              >
                <ImFacebook2 />
              </SocialIconLink>
              <SocialIconLink
                href="/"
                target="_blank"
                aria-label="Twitter"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink
                href="/"
                target="_blank"
                aria-label="Pinterest"
                rel="noopener noreferrer"
              >
                <FaPinterest />
              </SocialIconLink>
              <SocialIconLink
                href="/"
                target="_blank"
                aria-label="Instagram"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
        <SocialMedia>
          <SocialMediaWrap>
            <FooterMenu>
              {menuData.map((item, index) => (
                <FooterMenuLinks to={item.link} key={index}>
                  {item.title}
                </FooterMenuLinks>
              ))}
            </FooterMenu>
            <FooterCopyright>
              © 2021 Loopstudios. All rights reserved.
            </FooterCopyright>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
