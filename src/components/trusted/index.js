import React from "react"

import mouse from "../../assets/images/mouse.png"
import companies from "../../assets/images/trusted.png"
import { Section, Wrapper, Image, Anchor, Title } from "./styles"

const Trusted = () => {
  return (
    <Section>
      <Title>TRUSTED BY THE WORLD’S LEADING BRANDS</Title>
      <div>
        <Wrapper>
          <Image src={companies} alt="companies" />
          <Anchor href="#">
            Scroll Down <img src={mouse} alt="scroll down" />
          </Anchor>
        </Wrapper>
      </div>
    </Section>
  )
}

export default Trusted
