import React from "react"

import arrow from "../../assets/images/arrow.svg"

import Button from "../button"
import {
  Header,
  WrapperHeadline,
  Headline,
  Title,
  SubTitle,
  WrapperAction,
  Image,
  Link,
} from "./styles"

const Hero = ({ contact = false, title, subTitle, sourceImage, bgColor }) => {
  return (
    <Header bgColor={bgColor} contact={contact}>
      <WrapperHeadline contact={contact}>
        <Headline contact={contact}>
          <Title contact={contact}>{title} </Title>
          <SubTitle>{subTitle}</SubTitle>
        </Headline>
        <Image contact={contact} fluid={sourceImage} />
      </WrapperHeadline>
      <WrapperAction contact={contact}>
        <Button
          href={contact ? "https://calendly.com/kabirkhan/30min" : '/contact'}
          target={contact ? "_blank" : ""}
          responsive
          bgShadow={contact ? "#fff6ef " : "#fff"}>
          {!contact ? "Contact" : "Schedule A Call"}</Button>
        <Link href="/#">
          Subliminal AI Extended <img src={arrow} alt="arrow" />
        </Link>
      </WrapperAction>
    </Header >
  )
}

export default Hero
