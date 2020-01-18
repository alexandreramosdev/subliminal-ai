import React, { useState } from "react"

import arrow from "../../assets/images/right-arrow-white.png"

import {
  Wrapper,
  Content,
  HeaderCard,
  TitleCard,
  DescriptionCard,
  Send,
  Input,
  Form,
} from "./styles"

import text from "../../data/text.json"

const CardNewsletter = () => {
  const [email, setEmail] = useState("")

  const submit = e => {
    e.preventDefault()
    console.log(email)
    setEmail("Sending ...")

    setTimeout(() => setEmail(""), 1000)
  }

  return (
    <Wrapper>
      <Content>
        <HeaderCard src={require("../../assets/images/send.svg")} />

        <TitleCard>{text.cardNewsletter.title}</TitleCard>
        <DescriptionCard>{text.cardNewsletter.description}</DescriptionCard>

        <Form onSubmit={submit}>
          <Input
            type="text"
            placeholder="Email Address..."
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Send>
            Send <img src={arrow} alt="..." />
          </Send>
        </Form>
      </Content>
    </Wrapper>
  )
}

export default CardNewsletter
