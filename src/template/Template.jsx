import React from 'react';
import PropTypes from 'prop-types';

const Template = ({ children }) => {
  return <>{children}</>;
};

Template.propTypes = {
  children: PropTypes.node.isRequired
};

export default Template;
