import React from "react"

import mouse from "../../assets/images/mouse.png"
import companies from "../../assets/images/trusted.png"
import companiesWhite from "../../assets/images/trusted-white.png"
import { Section, Wrapper, Image, Anchor, Title } from "./styles"

const Trusted = ({ light = false }) => {
  return (
    <Section isLight={light}>
      <Title isLight={light}>TRUSTED BY THE WORLD’S LEADING BRANDS</Title>
      <div>
        <Wrapper isLight={light}>
          <Image src={light ? companiesWhite : companies} alt="companies" />
          {!light && (
            <Anchor href="/#">
              Scroll Down <img src={mouse} alt="scroll down" />
            </Anchor>
          )}
        </Wrapper>
      </div>
    </Section>
  )
}

export default Trusted
