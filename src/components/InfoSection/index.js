import React from "react";
import { InfoSectionWrapper, InfoSectionImg, InfoSectionContent, InfoSectionTitle, InfoSectionText } from "./InfoSectionElements";
import imageInteractive from '../../images/desktop/image-interactive.jpg';

const InfoSection = () => {
  return (
    <InfoSectionWrapper>
      <InfoSectionImg src={imageInteractive} alt={'human using VR'}/>
      <InfoSectionContent>
        <InfoSectionTitle>The leader in interactive VR</InfoSectionTitle>
        <InfoSectionText>
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </InfoSectionText>
      </InfoSectionContent>
    </InfoSectionWrapper>
  );
};

export default InfoSection;
