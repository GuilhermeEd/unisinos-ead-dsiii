import React from 'react';
import PropTypes from 'prop-types';
import { Input, Icon } from 'antd';

import withValidation from '../hocs/withValidation';

const PasswordInput = ({ field }) => {
  return (
    <Input.Password
      allowClear
      prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
      placeholder="Senha"
      {...field}
    />
  );
};

PasswordInput.propTypes = {
  field: PropTypes.object.isRequired
};

export default withValidation(PasswordInput);
