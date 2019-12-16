import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import {
  Section,
  WrapperHeader,
  Title,
  Subtitle,
  Row,
  Wrapper,
  Col,
  NumberCard,
  Card,
  Media,
  Image,
  TitleCard,
  DescriptionCard,
  Line,
  ActionCard,
} from "./styles"

import arrow from "../../assets/images/right-arrow-blue.png"
import verifed from "../../assets/images/verified.png"
import bgBackground_1 from "../../assets/images/background-index-1.png"
import bgBackground_2 from "../../assets/images/background-index-2.png"
import bgBackground_3 from "../../assets/images/background-index-3.png"

const Solution = () => {
  const data = useStaticQuery(graphql`
    query {
      solution_1: file(absolutePath: { regex: "/solution-1.png/" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      solution_2: file(absolutePath: { regex: "/solution-2.png/" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      solution_3: file(absolutePath: { regex: "/solution-3.png/" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Section>
      <WrapperHeader>
        <Title>Solutions to common Machine Learning (ML) Problems</Title>
        <Subtitle>
          Simple step-by-step walkthroughs to solve common ML problems with
          Subliminal Ai. Extended Is An End-to-end Platform
        </Subtitle>
      </WrapperHeader>
      <Row>
        <Wrapper reverse>
          <Col>
            <Image fluid={data.solution_1.childImageSharp.fluid} />
          </Col>
          <Col>
            <Card>
              <NumberCard color="#c3c7f4" bgBackground={bgBackground_1}>
                01
              </NumberCard>
              <TitleCard>Data strategy and Understanding</TitleCard>
              <DescriptionCard>
                For new customers, it's important for us to get a holistic
                understanding of the data sources in your company, identify
                what's useful now and what isn't and provide clarity on cleaning
                up currently unusable data so it can be utilized in future
                analysis.
              </DescriptionCard>
              <Line />
              <Media>
                <img src={verifed} alt="..." />
                <p>
                  Output: Recommendations for multiple future projects that will
                  directly impact the business bottom line.
                </p>
              </Media>
            </Card>
          </Col>
        </Wrapper>
      </Row>
      <Row bgColor="#f8f8f8">
        <Wrapper>
          <Col>
            <Image fluid={data.solution_2.childImageSharp.fluid} />
          </Col>
          <Col>
            <Card>
              <NumberCard color="#c1deff" bgBackground={bgBackground_2}>
                02
              </NumberCard>
              <TitleCard>
                Identify the highest value project and build a proof of concept
              </TitleCard>
              <DescriptionCard>
                Every AI problem is difficult to get right the first time. We
                start by developing a good baseline model and solution that can
                be improved on over time. This ensures that the business idea is
                actually possible
              </DescriptionCard>
              <ActionCard>
                Subliminal AI Extended <img src={arrow} alt="..." />
              </ActionCard>
            </Card>
          </Col>
        </Wrapper>
      </Row>
      <Row>
        <Wrapper reverse>
          <Col>
            <Image fluid={data.solution_3.childImageSharp.fluid} />
          </Col>
          <Col>
            <Card>
              <NumberCard color="#fcdead" bgBackground={bgBackground_3}>
                03
              </NumberCard>
              <TitleCard>Move the proof of concept into production</TitleCard>
              <DescriptionCard>
                So we've ensured our idea will work and has potential, now is
                the time to collect more data and improve the models we've
                developed in the proof of concept so you know you can trust the
                model to drive the most
              </DescriptionCard>
              <ActionCard>
                Subliminal AI Extended <img src={arrow} alt="..." />
              </ActionCard>
            </Card>
          </Col>
        </Wrapper>
      </Row>
    </Section>
  )
}

export default Solution
