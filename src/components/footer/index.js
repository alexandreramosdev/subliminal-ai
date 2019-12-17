import React from "react"

import arrow from "../../assets/images/arrow.svg"
import logo from "../../assets/images/logo-subliminal.png"
import {
  ContainerFooter,
  Wrapper,
  WrapperNavFooter,
  NavFooter,
  Title,
  LinkTo,
  InTouch,
  TitleForm,
  DescriptionForm,
  Form,
  EmailInput,
  Send,
  FooterNote,
  Logo,
  Language,
  Copy,
  IconGlobe,
} from "./styles"

const Footer = () => (
  <ContainerFooter>
    <Wrapper>
      <WrapperNavFooter>
        <NavFooter>
          <Title>SERVICES</Title>
          <LinkTo to="#">NLP (Text Analysis)</LinkTo>
          <LinkTo to="#">Computer Vision</LinkTo>
          <LinkTo to="#">Data Analysis</LinkTo>
          <LinkTo to="#">Software Development</LinkTo>
        </NavFooter>
        <NavFooter>
          <Title>COMPANY</Title>
          <LinkTo to="#">Our story</LinkTo>
          <LinkTo to="#">Press</LinkTo>
          <LinkTo to="#">Blog</LinkTo>
          <LinkTo to="#">Careers</LinkTo>
        </NavFooter>
      </WrapperNavFooter>
      <InTouch>
        <TitleForm>STAU IN TOUCH</TitleForm>
        <DescriptionForm>
          Join our Mailing list to get updates.We respect your privacy
        </DescriptionForm>
        <Form>
          <EmailInput type="email" placeholder="Email Address…" />
          <Send type="submit">
            Send <img src={arrow} />
          </Send>
        </Form>
      </InTouch>
    </Wrapper>

    <FooterNote>
      <Logo src={logo} />
      <Language>
        English <IconGlobe /> &nbsp;&nbsp;&nbsp;&nbsp; United State{" "}
        <img src={require("../../assets/images/usa.svg")} />
      </Language>
      <Copy>© 2020 Subliminal AI. All rights reserved</Copy>
    </FooterNote>
  </ContainerFooter>
)

export default Footer
