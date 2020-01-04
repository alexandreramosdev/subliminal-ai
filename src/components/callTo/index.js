import React from "react"

import Button from "../button"
import {
  Section,
  Wrapper,
  Title,
  Subtitle,
  WrapperButtons,
  LearnAboutLink,
} from "./styles"

import arrow from "../../assets/images/right-arrow-white.png"
import arrowBlue from "../../assets/images/arrow.svg"

const CallTo = ({ title, subtitle, isContactPage, linkTitle }) => {
  return (
    <Section isContactPage={isContactPage}>
      <Wrapper>
        <Title isContactPage={isContactPage}>{title}</Title>
        <Subtitle isContactPage={isContactPage}>{subtitle}</Subtitle>
        <WrapperButtons>
          <Button href="https://calendly.com/kabirkhan/30min" target="_blank" responsive bgShadow={isContactPage ? '#fff' : '#003eba'}>
            Schedule A Call
          </Button>
          <LearnAboutLink isContactPage={isContactPage}>
            {linkTitle} <img src={isContactPage ? arrowBlue : arrow} alt="..." />
          </LearnAboutLink>
        </WrapperButtons>
      </Wrapper>
    </Section >
  )
}

export default CallTo
