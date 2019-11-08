import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import ProjectForm from '../forms/ProjectForm';

const CreateProjectButton = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => setIsModalVisible(!isModalVisible);

  return (
    <>
      <Button block type="primary" onClick={toggleModal}>
        Criar Projeto
      </Button>
      <Modal visible={isModalVisible} footer={null} onCancel={toggleModal}>
        <ProjectForm onSuccess={toggleModal} />
      </Modal>
    </>
  );
};

export default CreateProjectButton;
