import React, {Component} from "react";
import Link from "gatsby-link";
import Script from "react-load-script";
import graphql from "graphql";

import MdArrowBack from 'react-icons/lib/md/arrow-back';
import MdArrowForward from 'react-icons/lib/md/arrow-forward';
import FaBars from 'react-icons/lib/fa/bars';
import Footer from '../components/Footer';
import Modal from '../components/NavModal';
import Slider from 'react-slick';
import Navbar from '../components/Navbar';
import FaFacebookSquare from 'react-icons/lib/fa/facebook-square';
import FaTwitterSquare from 'react-icons/lib/fa/twitter-square';
import FaInstagramSquare from 'react-icons/lib/fa/instagram';
import FaMobile from 'react-icons/lib/fa/phone-square';
import FaMail from 'react-icons/lib/fa/envelope';
import NavModal from "../components/NavModal";

export default class IndexPage extends Component {
  constructor(){
    super();
    this.state = {
      modalOpen:false,
      index:0,
      portfolioList:[
        {
          title:'Pinay Power',
          color:'#B7E3FF',
          image:require('../img/pinaypower.jpg'),
          link:'https://medium.com/@jci.cdo2018/pinay-power-8b990b6660f2',
          description:'A national Project of JCI Philippines, Pinay Power stared with two of the United Nations Sustainable Development Goals namely: Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all (#4) and Achieve gender equality and empower all women and girls #5). '
        },
        {
          title:'Peace Is Possible',
          color:'#24CD81',
          image:require('../img/peaceispossible2.jpg'),
          link:'https://medium.com/@jci.cdo2018/peace-is-possible-132291901e8a',          
          description:'PEACE IS POSSIBLE is a JCI International Campaign that aims at opening dialogue and raising awareness of Peace.'          
        },
        {
          title:'YLEA',
          color:'#3079CD',
          image:require('../img/ylea.jpg'),
          link:'https://medium.com/@jci.cdo2018/project-overview-2c4f35fc0a6b',          
          description:'Otherwise known as “Batang Leader Award”, the award gives due recognition to deserving public and private elementary and high school students to inspire them towards greater achievements in life.'          
        },
        {
          title:'Think Green',
          color:'#784B2C',
          image:require('../img/thinkgreen.jpg'),
          link:'https://medium.com/@jci.cdo2018/think-green-c1f0e4367228',          
          description:'This project was conceptualized to focus on environmental sustainability. Such project aims to address to Climate Change which is serious global issue today. Some resolutions were during the JCI-UN Leadership Summit and added to be one of the UN Millennium Development Goals (UMDG).'          
        },
        {
          title:'Got Heart',
          color:'#784B2C',
          image:require('../img/gotHeart.jpg'),
          link:'https://medium.com/@jci.cdo2018/got-heart-e29702c75590',          
          description:'Got Heart is a Community Health Awareness program of JCI Philippines which aims to promote good health and well-being in the underprivileged communities around the country through medical, dental, and surgical missions, distribution of free medicines, free eye check up and health education awareness program and counseling, as well as to provide a problem-solving formula in order to address the issues and concerns of the mind, body, spirit, and emotion.'          
        },
        {
          title:'AAGAPAY',
          color:'#784B2C',
          image:require('../img/NewOplanBannerLogo.jpg'),
          link:'https://medium.com/@jci.cdo2018/oplan-aagapay-9f0d9a351295',          
          description:'The 4 R’s - Risk Reduction, Readiness, Response, Rehabilitation'          
        },
        {
          title:'Bags to School',
          color:'#784B2C',
          image:require('../img/bagsforschool.jpg'),
          link:'https://medium.com/@jci.cdo2018/bags-to-school-d5b933f5864d',          
          description:'Bags to School (BTS) is one of the flagship projects of Junior Chamber International Philippines, Inc. This project aims to promote primary education nationwide in line with UN-SDG’s Quality Education campaign'          
        },
        {
          title:'Beyond Prison Walls',
          color:'#784B2C',
          image:require('../img/beyondPrison.jpg'),
          link:'https://medium.com/@jci.cdo2018/beyond-prison-walls-1adea7bd8c5',          
          description:'Beyond Prison Walls is one of the flagship projects of Junior Chamber International Philippines, Inc. This project aims to help the correctional community (the people behind bars) in their total human development based on the principles of a balanced and restorative justice ; Human Rights Advocacy to the Accused, Sports, Cultural and Educational Programs and Providing them with Livelihood opportunities.'          
        },
      ]
    }
    this.changeSlider = this.changeSlider.bind(this);
    this.goTo = this.goTo.bind(this);
  }
  componentDidMount() {
    document.title = "Highoutput Ventures";
  }
  openNav(){
    console.log('hello');
    this.setState({modalOpen:true});
  }

  closeNav(){
    this.setState({modalOpen:false});
  }
  next(){
    if(this.state.index < this.state.portfolioList.length - 1){
      this.setState({index:this.state.index + 1});
    }else{
      this.setState({index:0});
    }
    
  }
  prev(){
    if(this.state.index == 0){
      this.setState({index:this.state.portfolioList.length-1});
    }else{
      this.setState({index:this.state.index - 1});
    }
    
  }
  changeSlider(){
    this.setState({
      index: this.refs.slider.innerSlider.state.currentSlide
    })
  }

  goTo(link){
    this.props.history.push(link);
  }
  handleScriptLoad() {
    if (typeof window !== `undefined` && window.netlifyIdentity) {
      window.netlifyIdentity.on("init", user => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
    window.netlifyIdentity.init();
  }
  
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    let {index,portfolioList} = this.state;
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable:false,
      afterChange: this.changeSlider,
      arrows:false
    };
    let portfolio = portfolioList[index];

    return (
      <div>
        <Script
          url="https://identity.netlify.com/v1/netlify-identity-widget.js"
          onLoad={() => this.handleScriptLoad()}
        />
        <div className={this.state.modalOpen?"modal-open":null}>
          <div className="notification">
            <div className="badge">
              <span style={{paddingTop:2}}>NEW</span>
            </div>
            Our new app Identifi is featured on Product Hunt today!
          </div>
          <div className="topScene">
            <div className="bg">
              <div className="panel">
                <Link to="/" className="navBrand">
                  <img alt="logo" src={require('../img/logo.svg')} />
                </Link>
                <div className="navBars" onClick={()=>this.openNav()}>
                  <FaBars />
                </div>
                <div className="nav">
                  <a href="#projects" className="navItem">
                    Projects
                  </a>
                  <a href="#about" className="navItem">
                    About us
                  </a>
                  
                  <a href="https://teamup.com/kszzjvzxqiwb689zej" target="_blank" className="navItem">
                    Schedule of Activities
                  </a>
                  {/* <Link to="/studio" className="navItem">
                    Studio
                  </Link> */}
                  {/* <Link to="/blog" className="navItem">
                    Blog
                  </Link> */}
                  <a href="#contactUs" className="navItem">
                    Contact Us
                  </a>
                </div>
              </div>

              <div className="content">
                <h1>
                  Create Positive Change
                </h1>
                <p className="section">
                  We are a group of individual that strives to create positive change empowered by our vision to be the leading global network of young active citizens.
                  {/* We partner with founders to create new products and services, and build teams to scale them as independent businesses. */}
                </p>
                <div className="action">
                  <a href="#whatWeDo" className="button lightButton">
                    Learn More
                  </a>
                  <a href="#projects" className="button darkButton">
                    Our Projects
                  </a>
                </div>
                
              </div>
            </div>
            
          </div>
          <div id="whatWeDo" className="offers">

            <div className="bg_wrapper">
              <div className="offers_bg">
                What We Do
              </div>
            </div>
            <div className="SectionTitle">
                What We Do
            </div>
            <div className="offersList">
              
              <div className="item">
                <div>
                  <img alt="studio" className="icon" src={require('../img/icon-color-3@2x@1x.png')} srcSet={`${require('../img/icon-color-3@2x@1x.png')} 1x, ${require('../img/icon-color-3@2x@2x.png')} 2x`} />
                </div>
                <div className="title">
                  Connect
                </div>
                <div className="text">
                 JCI Cagayan de Oro will connect people, the community and global society: Ensure that administrative matters are taken cared of especially to preserve relevant information and history.
                  {/* We work with entrepreneurs on develop their concepts and ideas into companies. Ideally we want to work with domain experts who have a deep understanding of their respective domain. */}
                </div>
                <div className="actions">
                  <a className="button" href="https://docs.google.com/forms/d/e/1FAIpQLSeFzqVmOsApssKdVq-UlY7dyv5f_x_SWx-wwicSgmWGWjqj7A/viewform?fbzx=-4693387970005211000" target="_blank">Join Us</a>
                </div>
              </div>
              <div className="item">
                <div>
                  <img alt="capital" className="icon" src={require('../img/motivate@1x.png')} srcSet={`${require('../img/motivate@1x.png')} 1x, ${require('../img/motivate@2x.png')} 2x`} />
                </div>
                <div className="title">
                  Motivate
                </div>
                <div className="text">
                JCI Cagayan de Oro will create an environment in which people are motivated towards positive change: Develop active citizens, equipping them with relevant skills through official JCI training courses 
                {/* We have a seed fund which ideally provides capital as the first external investor. Our role being to capitalize the business and play an active role in the acceleration of it’s growth.  */}
                </div>
                <div className="actions">
                  <a className="button" href="https://docs.google.com/forms/d/e/1FAIpQLSeFzqVmOsApssKdVq-UlY7dyv5f_x_SWx-wwicSgmWGWjqj7A/viewform?fbzx=-4693387970005211000" target="_blank">Join Us</a>
                </div>
              </div>
              <div className="item">
                <div>
                  <img alt="consulting" className="icon" src={require('../img/collaborate@1x.png')} srcSet={`${require('../img/collaborate@1x.png')} 1x, ${require('../img/collaborate@2x.png')} 2x`} />
                </div>
                <div className="title">
                  Collaborate
                </div>
                <div className="text">
                JCI Cagayan de Oro will bring together like-minded partners to expand mutual impact: Network and partner with other Local Organizations and like-minded groups within and outside of the country.
                  {/* We have developed a process called High Ouput MVP with a collective of entrepreneurs. This service provides early stage startups with the tboost to get their product to market quickly and efficiently. */}
                </div>
                <div className="actions">
                  <a className="button" href="https://docs.google.com/forms/d/e/1FAIpQLSeFzqVmOsApssKdVq-UlY7dyv5f_x_SWx-wwicSgmWGWjqj7A/viewform?fbzx=-4693387970005211000" target="_blank">Join Us</a>
                </div>
              </div>
            </div>
          </div>

          <div id="projects" className="portfolio">
            <div className="portfolioFooter">
              <button className="btn" onClick={()=>this.prev()}>
                <MdArrowBack className="icon"/>
              </button>
              <div className="title" >
                Project: {portfolio.title}
              </div>
              <button className="btn" onClick={()=>this.next()}>
                <MdArrowForward className="icon"/>
              </button>
            </div>
            <div className="illustration">
              <div className="labelWrapper">
                Project: {portfolio.title}
              </div> 
              <div className={`content`}>
                <div>
                  <div className="slide" style={{backgroundColor:'#fff'}}>
                    <img alt="bitmap" src={portfolio.image}/>
                  </div>
                </div>
                
              </div>
            
            </div>
            <div className="details">
              <div className="labelWrapper">
                <button className="btn" onClick={()=>this.prev()}>
                  <MdArrowBack className="icon"/>
                </button>
                <button className="btn" onClick={()=>this.next()}>
                  <MdArrowForward className="icon"/>
                </button>
              </div>  
              <div className="content">
                <div>
                  <div className="title">
                    {portfolio.title}
                  </div>
                  <div className="section">
                    {portfolio.description}
                  </div>
                  <div className="learnMore">
                    <a href={portfolio.link}>Learn more about {portfolio.title.toLowerCase()} <MdArrowForward/></a> 
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          <div id="about" className="offers">

            <div className="bg_wrapper">
              <div className="offers_bg">
                Who we are
              </div>
            </div>
            <div className="SectionTitle">
              Who we are
            </div>
            <div className="sectionContainer">
              <h1 id="values" className="sectionTItle">
                Our Values
              </h1>
              <div className="sectionDescription">
                That faith in GOD gives meaning and purpose to human life. That the brotherhood of man transcends the sovereignty of nations. That economic justice can best be won by free men through free enterprise. That government should be of laws rather than of men. That earth's great treasure lies in human personality. And that service to humanity is the best work of life.
              </div>
              <div className="panelSection mision">
                <div className="panel">
                  <img alt="mission" src={require('../img/mission@1x.png')} srcSet={`${require('../img/mission@1x.png')} 1x, ${require('../img/mission@2x.png')} 2x`}  /> 
                  <h2 id="mission" className="title">
                    Mission
                  </h2>
                  <p className="desc">
                    To be provide development opportunities that empower young people to create positive change.
                  </p>
                </div>
              </div>
              <div className="panelSection vision">
                <div className="panel">
                  <img alt="mission" src={require('../img/vision@1x.png')} srcSet={`${require('../img/vision@1x.png')} 1x, ${require('../img/vision@2x.png')} 2x`}  />
                  <h2 id="vision" className="title">
                    Vision
                  </h2>
                  <p className="desc">
                    To be the leading global network of young active citizens.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div id="contactUs" className="contactUs">
            <div className="details">
              <div className="detailsSection">
                <h2>Contact Us</h2>
                <p>
                  <a alt="facebook" href="tel:+639173798803">+639173798803 <FaMobile/></a>
                </p>
                <p>
                <a alt="facebook" href="mailto:jci.cdo2018@gmail.com">jci.cdo2018@gmail.com <FaMail/></a>
                </p>
                <p>
                  <a alt="facebook" href="https://www.facebook.com/OroJaycees/">Facebook <FaFacebookSquare/></a>
                </p>
                <p>
                <a alt="twitter" href="https://twitter.com/OroJaycees">Twitter <FaTwitterSquare/></a>
                </p>
                <p>
                <a alt="instagram" href="https://www.instagram.com/orojaycees/">Instagram <FaInstagramSquare/></a>
                </p>
              </div>
            </div>
            <div className="map">
              <img alt="mindanao" src={require('../img/mindanao.svg')} />
            </div>
          </div>
          {/* <div className="news">
            <div className="bg_wrapper">
              <div className="offers_bg">
                News & Insights
              </div>
            </div>
            <div className="SectionTitle">
              News & Insights
            </div>
            <div className="newsList">
              <div className="preview">
                <img alt="logo" src={require('../img/blog-img-preview@2x.png')} />
                <div className="content">
                  <div className="contentDate">
                    16.06.2017
                  </div>
                  <div className="contentHeader">
                    The Skinny On Lcd Monitors
                  </div>
                  <div className="contentBody">
                    We work with entrepreneurs on develop their concepts and ideas into companies. Ideally we want to work with domain experts who have a deep understanding of their respective domain.
                  </div>
                </div>
              </div>
              <div className="feed">
                <div className="row">
                  <span className="title">
                    Addiction When Gambling Becomes A Problem
                  </span>
                  <span className="date">
                    14.06.2017.
                  </span>
                </div>
              
                <div className="row">
                  <span className="title">
                  V7 Digital Photo Printing
                  </span>
                  <span className="date">
                    14.06.2017.
                  </span>
                </div>
                <div className="row">
                  <span className="title">
                    Compare Prices Find The Best Computer Accessory
                  </span>
                  <span className="date">
                    14.06.2017.
                  </span>
                </div>
                <div className="row">
                  <span className="title">
                  Audio player software is used to play back sound recordings in one of the many formats available for computers today. It can also play back music CDs. There is audio player software that is native to the computer’s operating system (Windows, Macintosh, and Linux) and there are web-based audio players. This article discusses the local computer audio players. Advantages of computer audio player software
                  The main advantage of a computer audio player is that you can play your audio CDs and there is no longer any need to have a separate CD player. However the capabilities of the computer audio player go beyond just playing traditional music CDs. You can also play sound clips in one of the many audio formats found in the information technology industry today. The MP3 format is a standard whereby a high rate of compression can be achieved on sound files allowing the ability to store large numbers of them on hard disk. Another advantage is when the computer audio player has ripping capability you can extract a sample clip from the sound track for internet posting or emailing. Audio players in the form of portable MP3 players like Apple’s iPod are extremely advantageous due to their long battery life and capability to be carried practically anywhere. Choosing and using a computer audio player
                  Windows comes with Windows Media Player already installed. Realplayer is a free download as well. There are other free products such as Winamp (Windows only). One important feature you want to look for when choosing an audio player beyond what is packaged with your operating system is the sound filtering capabilities. It should at least have a graphic equalizer where you can adjust for poor quality sound files. Look for other features like the ability to rip sound tracks and change the skins of the computer audio player. The demand for the computer audio player
                  Demand is driven by price and the free audio players like Windows Media Player will remain popular when it comes to playing audio on the computer. Where people are spending more of their money is on the portable MP3 players like Apple’s iPod. Apple makes a free computer audio player for the computer called iTunes and it is used to organize play lists and transfer sound files to the iPod player. Typically, you download iTunes and install it on your computer and then you have an integrated environment to import different types of Podcasts and audio for exporting to the iPod player itself. Plus iTunes can be used as a standalone computer audio player. But more and more you will see the demand for mobile computer audio players to increase because of their convenience and portability.
                  </span>
                  <span className="date">
                    14.06.2017.
                  </span>
                </div>
                <div className="row">
                  <span className="title">
                    Compare Prices Find The Best Computer Accessory
                  </span>
                  <span className="date">
                    14.06.2017.
                  </span>
                </div>
                
                <div className="row archive">
                  <span className="title">
                  </span>
                  <a href="" className="date">
                    Archive <MdArrowForward/>
                  </a>
                </div>
              </div>
              <div className="footer">
                <div className="footerContent">
                  <img alt="logo" src={require('../img/newsletter-icon@2x.png')} />
                  <div className="newsLetter">
                    <div className="newsLetterContent">
                      Stay up to date with the latest happenings within the High Output Universe 
                    </div>
                    <div className="newsLetterForm">
                      <input type="email" placeholder="Enter your email" />
                      <button>
                        Subscribe
                      </button>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
            
          </div> 
           */}
          <Footer />
          <Modal isOpen={this.state.modalOpen} onClose={this.closeNav.bind(this)}/>
        </div>
      </div>
    );
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;
