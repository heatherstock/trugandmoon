import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Wrapper = styled.div`
@media (max-width: 600px) {
  margin: 0 18px;
}
@media (min-width: 600px) {
  margin: 0 36px;
}
`;

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <Wrapper>
      <p>
        Trug and Moon is run by Drayson and Stock - a collaboration between husband and wife team James Drayson and Heather Stock. 
        We’re constantly striving to do what we love and learn new things, from growing our own vegetables, 
        expanding our yoga practice, traversing our spiritual awakenings and beginning to share these with the world. 
        When we're not working in pixels and lines of code as a web designer and software engineer, we're setting 
        metal and wood type in our letterpress workshop in the garden of England or running workshops on growth and 
        wellbeing.
      </p>
      <p>--</p>
      <p>
        Drayson is a digital designer and letterpress printer with a passion for beautiful typography and a 
        thing for nice paper. He creates beautiful letterpress wedding stationery, greetings cards and prints 
        using antique type and printing equipment, and is usually found covered in ink or oil (or both!).
      </p> 
      <p>--</p>
      <p>
        Stock is currently a software engineer following myriad other "careers" in chemistry, SCUBA diving, 
        teaching science and even teaching Mandarin Chinese to British Chinese children in Liverpool's China Town 
        (the imposter syndrome has never been greater). Never one to stand still, although she does love a good nap, 
        Stock is busy exploring ways to bring all these skills together, along with her passion for spiritual 
        philosophy, and is happiest when discussing her latest epiphany.
      </p>
    </Wrapper>
  </Layout>
)

export default AboutPage