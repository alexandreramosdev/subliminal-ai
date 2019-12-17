import React, { useRef } from "react"
import TinySlider from "tiny-slider-react"

import avatar from "../../assets/images/avatar.png"
import arrowLong from "../../assets/images/arrow-long.svg"
import arrow from "../../assets/images/right-arrow-blue.png"
import {
  Section,
  Wrapper,
  Title,
  Subtitle,
  WrapperCarousel,
  Card,
  HeaderCard,
  TitleCard,
  Media,
  Avatar,
  Name,
  DescriptionCard,
  Content,
  Controls,
  LinkTo,
  Info,
  Time,
  Tag,
} from "./styles"

const News = () => {
  const controlsRef = useRef(null)

  const onGoTo = dir => controlsRef.current.slider.goTo(dir)

  const settings = {
    items: 2,
    gutter: 20,
    center: true,
    controls: false,
    fixedWidth: 260,
    nav: false,
    edgePadding: 20,
    wrapAround: false,
    responsive: {
      600: {
        items: 2,
        fixedWidth: 380,
      },
      900: {
        fixedWidth: 488,
        gutter: 10,
      },
      1200: {
        fixedWidth: 588,
        gutter: 10,
      },
    },
  }

  return (
    <Section>
      <Wrapper>
        <Title>News & Announcements</Title>
        <Subtitle>
          See updates to help you with your work, and subscribe to our monthly
          Subliminal AI newsletter to get the latest announcements sent directly
          to your inbox.
        </Subtitle>
        <LinkTo to="/blog">
          Explore Blog <img src={arrow} alt="..." />
        </LinkTo>
      </Wrapper>
      <WrapperCarousel>
        <TinySlider settings={settings} ref={controlsRef}>
          <Card>
            <Content>
              <HeaderCard
                src={require("../../assets/images/news_1.png")}
              ></HeaderCard>
              <Info>
                <Tag>Marketing </Tag> <Time> Mar 09, 2019</Time>
              </Info>
              <TitleCard>
                Deep Learning Chatbot – Analysis and Implementation
              </TitleCard>
              <DescriptionCard>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco
              </DescriptionCard>
              <Media>
                <Avatar src={avatar} />

                <Name>By Ghani Pradita</Name>
              </Media>
            </Content>
          </Card>
          <Card>
            <Content>
              <HeaderCard
                src={require("../../assets/images/news_2.png")}
              ></HeaderCard>
              <Info>
                <Tag>Marketing </Tag> <Time> Mar 09, 2019</Time>
              </Info>
              <TitleCard>
                Deep Learning Chatbot – Analysis and Implementation
              </TitleCard>
              <DescriptionCard>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco
              </DescriptionCard>
              <Media>
                <Avatar src={avatar} />

                <Name>By Ghani Pradita</Name>
              </Media>
            </Content>
          </Card>
        </TinySlider>
        {/* <Controls>
          <button type="button" onClick={() => onGoTo("prev")}>
            <img src={arrowLong} />
          </button>
          <button type="button" onClick={() => onGoTo("next")}>
            <img src={arrowLong} />
          </button>
        </Controls> */}
      </WrapperCarousel>
    </Section>
  )
}

export default News
