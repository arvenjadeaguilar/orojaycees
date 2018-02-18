import React from 'react';
import graphql from 'graphql';
import Content, { HTMLContent } from '../components/Content';
import Link from "gatsby-link";
import FaBars from 'react-icons/lib/fa/bars';

export const SchedulePageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <section>
      <div className="topScene">
        <div>
          <div className="panel">
            <Link to="/" className="navBrand">
              <img alt="logo" src={require('../img/logo.svg')} />
            </Link>
            <div className="navBars" onClick={()=>this.openNav()}>
              <FaBars />
            </div>
            <div className="nav">
              <Link to="/about" className="navItem">
                About us
              </Link>
              <Link to="/companies" className="navItem">
                Projects
              </Link>
              <Link to="/capital" className="navItem">
                Schedule of Activities
              </Link>
              <Link to="/contact" className="navItem">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        <div className="about-page">
          <img className="activeCitizen" alt="activeCitizen" src={require('../img/activecitizen@1x.png')} />
          <div>
            <h1>The JCI Vision</h1>
            <p>
              To be the leading global network of young active citizens.
            </p>
          </div>
          <div>
            <h1>The JCI Mission</h1>
            <p>
              To be provide development opportunities that empower young people to create positive change.
            </p>
          </div>
          <div>
            <h1>The JCI Values</h1>
            <p>
              That faith in GOD gives meaning and purpose to human life. 
              That the brotherhood of man transcends the sovereignty of nations.
              That economic justice can best be won by free men through free enterprise.
              That government should be of laws rather than of men.
              That earth's great treasure lies in human personality.
              And that service to humanity is the best work of life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ({ data }) => {
  const { markdownRemark: post } = data;

  return (<SchedulePageTemplate
    contentComponent={HTMLContent}
    title={post.frontmatter.title}
    content={post.html}
  />);
};

export const aboutPageQuery = graphql`
  query SchedulePage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;
