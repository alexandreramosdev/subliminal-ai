import React from "react"
import styled from 'styled-components'

import { Layout, CallTo, Trusted, Card, Hero, Newsletter } from "../../components"

import { Wrapper as WrapperCard } from '../../components/card/styles'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 600px) {
      grid-template-columns: 1fr 1fr;
      width:100%;
      max-width: 1320px;
      margin: 0 auto;
  }

  @media (min-width: 900px) {
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;

      & > ${WrapperCard}:nth-child(1) {
       grid-column: span 4;
      }

      & > ${WrapperCard}:nth-child(2){
       grid-column: span 2;
      }

       & > ${WrapperCard}:nth-child(3){
         grid-column: span 3;
       }
      & > ${WrapperCard}:nth-child(4){
       grid-column: span 3;
      }    
      & > ${WrapperCard}:nth-child(5){
        grid-column: span 4;
      }
      & > ${WrapperCard}:nth-child(6){
        grid-column: span 2;
      }
      & > ${WrapperCard}:nth-child(7){
        grid-column: span 2;
      }
      & > ${WrapperCard}:nth-child(8){
        grid-column: span 2;
      }
      & > ${WrapperCard}:nth-child(9){
       grid-column: span 2;
      }      
      & > ${WrapperCard}:nth-child(10) {
        grid-column: 1 / -1;
      }
      & > ${WrapperCard}:nth-child(11){
        grid-column: span 3;
      } 
      & > ${WrapperCard}:nth-child(12){
        grid-column: span 3;
      }
      & > ${WrapperCard}:nth-child(13){
        grid-column: span 3;
      } 
      & > ${WrapperCard}:nth-child(14){
       grid-column: span 3;
      }

      & > ${Card}:nth-child(15){
        grid-column: span 3
      }
      & > ${Card}:nth-child(16){
        grid-column: span 2
      }
      & > ${Card}:nth-child(17){
       grid-column: span 2
     }
  }
`;

const blog = () => (
  <Layout>
    {/* <Hero
      title="Be Part Of The Machine Learning Revolution."
      subTitle="The future of design is open. We’re building it. Stories, news, and tips from behind the artboards."
    /> */}
    <Grid>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card style={{ width: '100%' }} />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Grid>
    <Newsletter />
    <Trusted light />
    <CallTo
      title="Got A Project Idea? let’s Have A Quick, 15-minute Call To"
      subtitle="Find out how Data Science Consulting can help your business. Estimate the time and budget needed to develop a solution. Learn more about our expertise and capabilities."
      linkTitle="Learn About The Process"
    />
  </Layout>
)

export default blog
