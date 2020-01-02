import React, { useState } from "react"

import { Button } from "../../../components"
import {
  Section,
  Wrapper,
  Title,
  Subtitle,
  WrapperButtons,
  Input,
  Agreement
} from "./styles"

const WorkTogether = ({ title, subtitle, isContactPage, linkTitle }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')

  const handleChange = (e, func) => {
    return func(e.target.value)
  }
  return (
    <Section >
      <Wrapper>
        <Title >
          Let’s work together! Fill out the form.
        </Title>
        <Subtitle >
          Hello, I’m  <Input placeholder="your Name" value={name} onChange={(e) => handleChange(e, setName)} /> and I work for <Input placeholder="Company Name" value={company} onChange={(e) => handleChange(e, setCompany)} /> We’d like to dev our applications. you can reach us at my <Input placeholder="Email Address" value={email} onChange={(e) => handleChange(e, setEmail)} />  to chat & schedule a call
        </Subtitle>
        <Agreement>
          <input type="checkbox" />
          I Confirm Team Of Use And User Agreement
        </Agreement>
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
