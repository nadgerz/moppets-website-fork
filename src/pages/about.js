import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BannerRegion from "../components/bannerRegion"
import "../assets/css/pages/about.scss"
import { Portrait } from "../assets/images/branding/svgs"


const aboutData = {
  img: <Portrait/>,
  text:
    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
      laoreet dolore magna aliquam erat volutpat. <br/>Ut wisi enim ad minim veniam, quat. luptatum zzril
      delenit augue duis dolore te feugait nulla facilisi.
    </p>,
}

const About = () => (
  <Layout>
    <SEO title="About Me"/>
    <div className="about" id="about">
      
      <BannerRegion data={aboutData}/>
      
      <section className={'CV'}>
        
        <aside className="sidebar-left">
          <h2>CV</h2>
        </aside>
        
        <div className="container-full-width">
        
        </div>
      </section>
    </div>
  </Layout>
)

export default About
