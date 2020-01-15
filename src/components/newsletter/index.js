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
        <Title >
          Sign Up For Our Newsletter.
        </Title>
        <Subtitle >
          Monthly hand-picked discoveries and stories of thriving in a new world of design. GIFs (often) included.
        </Subtitle>
        <Form onSubmit={submit}>
          <Input
            type="text"
            placeholder='Email Address...'
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
          <Send >Send <img src={arrow} alt="..." /></Send>
        </Form>
      </Wrapper>
    </Section >
  )
}

export default Newsletter
