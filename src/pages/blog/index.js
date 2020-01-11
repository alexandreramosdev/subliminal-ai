import React from "react"

import { Layout, CallTo, Trusted, Card } from "../../components"
import { Grid } from './styles';

const blog = () => (
  <Layout>
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
    <Trusted light />
    <CallTo
      title="Got A Project Idea? let’s Have A Quick, 15-minute Call To"
      subtitle="Find out how Data Science Consulting can help your business. Estimate the time and budget needed to develop a solution. Learn more about our expertise and capabilities."
      linkTitle="Learn About The Process"
    />
  </Layout>
)

export default blog
