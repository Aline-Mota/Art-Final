import React from "react";
import styled from "styled-components";
// Assets
import mirror from "../../assets/img/add/mirror.png";
import box from "../../assets/img/add/box.png";
import glassdoor from "../../assets/img/add/glassdoor.png";
import balcony from "../../assets/img/add/balcony.png";
import glasswindow from "../../assets/img/add/glasswindow.png";

export default function ServiceBox({icon, title, subtitle}) {
  let getIcon;

  switch (icon) {
    case "glassdoor":
      getIcon = <img src={glassdoor}></img>;
      break;
    case "glasswindow":
      getIcon = <img src={glasswindow} style={{height:"50px", width:"50px"}}></img>;
      break;
    case "mirror":
      getIcon = <img src={mirror} style={{height:"50px", width:"50px"}}></img>;
      break;
    case "box":
      getIcon = <img src={box} style={{height:"50px", width:"50px"}}></img>;
      break;
    case "balcony":
      getIcon = <img src={balcony}></img>;
      break;
  }

  return (
    <Wrapper className="flex flexColumn">
      <IconStyle>{getIcon}</IconStyle>
      <TitleStyle className="font20 extraBold">{title}</TitleStyle>
      <SubtitleStyle className="font11" style={{paddingTop: "10px", lineHeight: "1rem"}}>{subtitle}</SubtitleStyle>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const IconStyle = styled.div`
  @media (max-width: 860px) {
    margin: 0 auto;
  }
`;
const TitleStyle = styled.h2`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 50px 0px 0px;
  @media (max-width: 860px) {
    padding: 20px 0;
  }
`;
const SubtitleStyle = styled.p`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
`;