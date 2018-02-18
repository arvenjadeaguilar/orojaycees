import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Navbar from '../components/Navbar';
import './all.scss';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="JCI Cagayan de Oro">
      <link rel="icon" type="image" href={require("../img/icon@1x.png")}/>
    </Helmet>
    {/* <Navbar /> */}
    
    <div>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
