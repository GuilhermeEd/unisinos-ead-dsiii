import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'antd';
import ProjectForm from '../forms/ProjectForm';

const CreateProjectButton = ({ disabled }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => setIsModalVisible(true);

  const closeModal = () => setIsModalVisible(false);

  return (
    <>
      <Button block type="primary" onClick={openModal} disabled={disabled}>
        Criar Projeto
      </Button>
      <Modal visible={isModalVisible} footer={null} onCancel={closeModal}>
        <ProjectForm onSuccess={closeModal} />
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
