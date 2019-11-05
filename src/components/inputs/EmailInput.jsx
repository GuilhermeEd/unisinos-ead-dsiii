import React from 'react';
import PropTypes from 'prop-types';
import { Input, Icon } from 'antd';

import withValidation from '../hocs/withValidation';

const EmailInput = ({ field }) => {
  return (
    <Input
      allowClear
      prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
      autoComplete="username email"
      placeholder="Email"
      {...field}
    />
  );
};

EmailInput.propTypes = {
  field: PropTypes.object.isRequired
};

export default withValidation(EmailInput);
