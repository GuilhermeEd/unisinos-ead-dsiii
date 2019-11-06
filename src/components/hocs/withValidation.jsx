/* eslint-disable react/prop-types */
import React from 'react';
import { Form } from 'antd';
import get from 'lodash/get';

const withValidation = Component => props => {
  const { form, field, label, hideLabel } = props;

  const error = get(form.errors, field.name);

  return (
    <Form.Item
      label={!hideLabel && label}
      hasFeedback={!!error}
      validateStatus={error ? 'error' : ''}
      help={error}
    >
      <Component {...props} />
    </Form.Item>
  );
};

export default withValidation;
