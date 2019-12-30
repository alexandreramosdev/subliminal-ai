import React from "react"

import { Button } from "../../../components"
import {
  Section,
  Wrapper,
  Title,
  Subtitle,
  WrapperButtons,
  LearnAboutLink,
} from "./styles"

const WorkTogether = ({ title, subtitle, isContactPage, linkTitle }) => {
  return (
    <Section >
      <Wrapper>
        <Title >
          Let’s work together! Fill out the form.
        </Title>
        <Subtitle >
          Hello, I’m your Name and I work for Company Name We’d like to dev our applications. you can reach us at my Email Address to chat & schedule a call
        </Subtitle>
        <WrapperButtons>
          <Button responsive bgShadow='#003eba'>
            Submitted Now
          </Button>
        </WrapperButtons>
      </Wrapper>
    </Section >
  )
}

export default WorkTogether
