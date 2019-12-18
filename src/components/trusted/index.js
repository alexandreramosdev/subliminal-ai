import React from "react"

import mouse from "../../assets/images/mouse.png"
import companies from "../../assets/images/trusted.png"
import companiesWhite from "../../assets/images/trusted-white.png"
import { Section, Wrapper, Image, Anchor, Title } from "./styles"

const Trusted = ({ post = false }) => {
  return (
    <Section isPostPage={post}>
      <Title isPostPage={post}>TRUSTED BY THE WORLD’S LEADING BRANDS</Title>
      <div>
        <Wrapper isPostPage={post}>
          <Image src={post ? companiesWhite : companies} alt="companies" />
          {!post && (
            <Anchor href="#">
              Scroll Down <img src={mouse} alt="scroll down" />
            </Anchor>
          )}
        </Wrapper>
      </div>
    </Section>
  )
}

export default Trusted
