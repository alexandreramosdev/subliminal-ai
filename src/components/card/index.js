import React from 'react';

import avatar from '../../assets/images/avatar.png'

import {
  Wrapper,
  Content,
  HeaderCard,
  Info,
  TitleCard,
  Tag,
  Time,
  DescriptionCard,
  Media,
  Avatar,
  Name
} from './styles';

const Card = () => (
  <Wrapper>
    <Content>
      <HeaderCard src={require("../../assets/images/news_1.png")} />
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
  </Wrapper>
);

export default Card;
