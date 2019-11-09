import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'antd';
import ProjectForm from '../forms/ProjectForm';

const CreateProjectButton = ({ disabled }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => setIsModalVisible(!isModalVisible);

  return (
    <>
      <Button block type="primary" onClick={toggleModal} disabled={disabled}>
        Criar Projeto
      </Button>
      <Modal visible={isModalVisible} footer={null} onCancel={toggleModal}>
        <ProjectForm onSuccess={toggleModal} />
      </Modal>
    </>
  );
};

CreateProjectButton.propTypes = {
  disabled: PropTypes.bool
};

CreateProjectButton.defaultProps = {
  disabled: false
};

export default CreateProjectButton;
