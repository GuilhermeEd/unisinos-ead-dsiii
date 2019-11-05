import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';

import withValidation from '../hocs/withValidation';

const TextInput = ({ field }) => {
  return <Input allowClear {...field} />;
};

TextInput.propTypes = {
  field: PropTypes.object.isRequired
};

export default withValidation(TextInput);
