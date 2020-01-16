import React, { useState } from 'react';

import arrow from '../../assets/images/right-arrow-white.png'

import {
  Wrapper,
  Content,
  HeaderCard,
  TitleCard,
  DescriptionCard,
  Send,
  Input,
  Form
} from './styles';

const CardNewsletter = () => {
  const [email, setEmail] = useState('')

  const submit = (e) => {
    e.preventDefault()
    console.log(email)
    setEmail('Sending ...')

    setTimeout(() => setEmail(''), 1000)
  }

  return (
    <Wrapper>
      <Content>
        <HeaderCard src={require("../../assets/images/send.svg")} />

        <TitleCard>
          Sign Up For Our Newsletter
      </TitleCard>
        <DescriptionCard>
          Monthly hand-picked discoveries and stories of thriving in a new world of design. GIFs (often) included.
      </DescriptionCard>

        <Form onSubmit={submit}>
          <Input
            type="text"
            placeholder='Email Address...'
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
          <Send >Send <img src={arrow} alt="..." /></Send>
        </Form>

      </Content>
    </Wrapper>
  )
};

export default CardNewsletter;
