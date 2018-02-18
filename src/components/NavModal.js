import React, { Component } from 'react';
// import logo from './logo.svg';
import Link from "gatsby-link";

class NavModal extends Component {
  render() {
    return (
      <div>
        <div id="myModal" className={`navModal ${this.props.isOpen?'open':''}`}>
          <div className="navModal-content">
            <span className="navModalClose" onClick={()=>this.props.onClose()}>&times;</span>      
            <div className="navOptions">
              <Link to="/#vision" className="link">
                Projects
              </Link>
              <Link to="/companies" className="link">
                About Us
              </Link>
              <Link to="/capital" className="link" >
                Schedule of Activities
              </Link>
              <Link to="/studio" className="link">
                Contact Us
              </Link>
              
            </div>
            <div className="navSocialMedia">
              <div className="label">
                Follow Us: 
              </div>
              <a href="https://www.facebook.com/highoutputhq/" className="media">
                Facebook
              </a> &nbsp; &#183; &nbsp;
              <a href="https://twitter.com/highoutputhq" className="media">
                Instagram
              </a>
                &nbsp; &#183; &nbsp;
              <a href="https://www.linkedin.com/company/high-output-ventures/" className="media">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavModal;
