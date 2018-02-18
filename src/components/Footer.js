import React, { Component } from 'react';
// import logo from './logo.svg';
import Link from "gatsby-link";
import Script from "react-load-script";
import graphql from "graphql";

import FaFacebookSquare from 'react-icons/lib/fa/facebook-square';
import FaTwitterSquare from 'react-icons/lib/fa/twitter-square';
import FaInstagram from 'react-icons/lib/fa/instagram';
class Footer extends Component {
  render() {
    return (
      <div className="pageFooter">
        <div className="container">
          <div className="about">
            <img className="logo" alt="logo" src={require('../img/Logo_JCI@1x.png')} />
            <div className="content">
            We are young active citizens all over the world. Living, communicating, taking action and creating impact in our communities. Are you a young active citizen? Do you want to make a difference in your community? Join us on this journey of local action for global impact.

            </div>
            <div className="socialMedia">
              Connect with us
              <a href="https://www.facebook.com/highoutputhq/"><FaFacebookSquare className="icon"/></a>
              <a href="https://twitter.com/highoutputhq"><FaInstagram className="icon"/></a>
              <a href="https://www.linkedin.com/company/high-output-ventures/"><FaTwitterSquare className="icon"/></a>
              
            </div>
          </div>
          <div className="companies">
            <div className="column">
              <div className="title">
                PROJECTS
              </div>
              <div className="company">
                <a href="https://www.identifi.com/">Spectacles</a>
              </div>
              <div className="company">
                <a href="http://www.oneinbox.io/">YLEA</a>
              </div>
              <div className="company">
                <a href="https://altmanager.com/">Aagapay</a>
              </div>
              <div className="company">
                <a href="https://juangear.ph/">Pinay Power</a>
              </div>
              <div className="company">
                <a href="http://www.probutterfly.com/">Peace Is Possible</a>
              </div>
              <div className="company">
                <a href="http://www.probutterfly.com/">Bags to School</a>
              </div>
            </div>
            <div className="column">
              <div className="title">
                ABOUT US
              </div>
              <div className="company">
                <a href="#mission">Mission</a>
              </div>
              <div className="company">
                <a href="#vision">Vision</a>
              </div>
              <div className="company">
                <a href="#values">Values</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
