import React, { useState } from "react"

import text from "../../data/text.json"

import { Button } from ".."
import {
  Section,
  Wrapper,
  Title,
  Subtitle,
  WrapperButtons,
  Input,
  Agreement,
} from "./styles"

const WorkTogether = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")

  const handleChange = (e, func) => {
    return func(e.target.value)
  }
  return (
    <Section>
      <Wrapper>
        <Title>{text.workTogether.title}</Title>
        <Subtitle>
          Hello, I’m{" "}
          <Input
            placeholder="your Name"
            value={name}
            onChange={e => handleChange(e, setName)}
          />{" "}
          and I work for{" "}
          <Input
            placeholder="Company Name"
            value={company}
            onChange={e => handleChange(e, setCompany)}
          />{" "}
          We’d like to dev our applications. you can reach us at my{" "}
          <Input
            placeholder="Email Address"
            value={email}
            onChange={e => handleChange(e, setEmail)}
          />{" "}
          to chat & schedule a call
        </Subtitle>
        <Agreement>
          <input type="checkbox" />
          {text.workTogether.agreement}
        </Agreement>
        <WrapperButtons>
          <Button responsive bgShadow="#003eba">
            {text.workTogether.button}
          </Button>
        </WrapperButtons>
      </Wrapper>
    </Section>
  )
}

export default WorkTogether
