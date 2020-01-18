import React, { useState } from "react"

import arrow from '../../assets/images/right-arrow-white.png'

import {
  Section,
  Wrapper,
  Title,
  Subtitle,
  Send,
  Input,
  Form
} from "./styles"

import text from '../../data/text.json'

const Newsletter = () => {
  const [email, setEmail] = useState('')

  const submit = (e) => {
    e.preventDefault()
    console.log(email)
    setEmail('Sending ...')

    setTimeout(() => setEmail(''), 1000)
  }

  return (
    <Section >
      <Wrapper>
        <Title >{text.newsletter.title}</Title>
        <Subtitle >{text.newsletter.subtitle}</Subtitle>
        <Form onSubmit={submit}>
          <Input
            type="text"
            placeholder='Email Address...'
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
          <Send >{text.newsletter.action} <img src={arrow} alt="..." /></Send>
        </Form>
      </Wrapper>
    </Section >
  )
}

export default Newsletter
