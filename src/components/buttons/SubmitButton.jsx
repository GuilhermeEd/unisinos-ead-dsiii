import React from 'react';
import { Button } from 'antd';

const SubmitButton = props => {
  return (
    <Button type="primary" htmlType="submit" block {...props}>
      Enviar
    </Button>
  );
};

export default SubmitButton;
