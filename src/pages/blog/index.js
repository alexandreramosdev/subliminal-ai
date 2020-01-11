import React from "react"

import { Layout, CallTo, Trusted } from "../../components"
// import { Container } from './styles';

const blog = () => (
  <Layout>
    <div>! Developing BLOG </div>
    <Trusted light />
    <CallTo
      title="Got A Project Idea? let’s Have A Quick, 15-minute Call To"
      subtitle="Find out how Data Science Consulting can help your business. Estimate the time and budget needed to develop a solution. Learn more about our expertise and capabilities."
      linkTitle="Learn About The Process"
    />
  </Layout>
)

export default blog
