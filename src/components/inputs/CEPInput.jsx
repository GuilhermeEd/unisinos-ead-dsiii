import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';

import withValidation from '../hocs/withValidation';

const CEPInput = ({ field, form, ...rest }) => {
  return <Input {...field} style={{ width: '100%' }} maxLength={8} {...rest} />;
};

CEPInput.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired
};

export default withValidation(CEPInput);
