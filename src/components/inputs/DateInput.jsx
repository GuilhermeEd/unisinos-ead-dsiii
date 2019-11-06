import React from 'react';
import PropTypes from 'prop-types';
import { DatePicker } from 'antd';
import moment from 'moment';

import withValidation from '../hocs/withValidation';

const DateInput = ({ field, form, ...rest }) => {
  const handleChange = value => {
    if (!value) {
      return;
    }

    form.setFieldValue(field.name, value.toISOString());
  };

  return (
    <DatePicker
      allowClear
      {...field}
      style={{ width: '100%' }}
      onChange={handleChange}
      value={field.value && moment(field.value)}
      format="DD/MM/YYYY"
      {...rest}
    />
  );
};

DateInput.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired
};

export default withValidation(DateInput);
