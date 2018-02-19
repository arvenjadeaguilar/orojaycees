import React, { Component } from 'react';
// import logo from './logo.svg';
import Link from "gatsby-link";

class NavModal extends Component {
  render() {
    return (
      <div>
        <div id="myModal" className={`navModal  ${this.props.isOpen?'open':''}`}>
            <div className="navModal-content">
              <span className="navModalClose" onClick={()=>this.props.onClose()}>&times;</span>      
              <div className="navOptions">
                <a href="/#projects" onClick={()=>this.props.onClose()} className="link">
                  Projects
                </a>
                <a href="/#about" onClick={()=>this.props.onClose()} className="link">
                  About Us
                </a>
                <a href="https://teamup.com/kszzjvzxqiwb689zej" target="_blank" className="link" >
                  Schedule of Activities
                </a>
                <a href="/#contactUs" onClick={()=>this.props.onClose()}  className="link">
                  Contact Us
                </a>
                
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
                  Twitter
                </a>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default NavModal;
