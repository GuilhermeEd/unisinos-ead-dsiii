import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';

import withValidation from '../hocs/withValidation';

const TextInput = ({ field, ...rest }) => {
  return <Input allowClear {...field} {...rest} />;
};

TextInput.propTypes = {
  field: PropTypes.object.isRequired
};

export default withValidation(TextInput);
