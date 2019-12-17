import React from "react"

import Button from "../button"
import {
  Section,
  Wrapper,
  Title,
  Subtitle,
  WrapperButtons,
  LearnAboutLink,
} from "./styles"

import arrow from "../../assets/images/right-arrow-white.png"

const CallTo = () => {
  return (
    <Section>
      <Wrapper>
        <Title>
          Got A Project Idea? <br /> let’s Have A Quick, 15-minute Call To
        </Title>
        <Subtitle>
          Find out how Data Science Consulting can help your business. Estimate
          the time and budget needed to develop a solution. Learn more about our
          expertise and capabilities.
        </Subtitle>
        <WrapperButtons>
          <Button responsive bgShadow="#003eba">
            Schedule A Call
          </Button>
          <LearnAboutLink>
            Learn About The Process <img src={arrow} alt="..." />
          </LearnAboutLink>
        </WrapperButtons>
      </Wrapper>
    </Section>
  )
}

export default CallTo
