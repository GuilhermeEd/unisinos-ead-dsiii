import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { List, Typography, Button } from 'antd';

import DonationModal from '../modals/DonationModal';

const ProjectList = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState();

  const items = projects.map(project => {
    const description = (
      <Typography.Paragraph ellipsis={{ rows: 3, expandable: true }}>
        {project.description}
      </Typography.Paragraph>
    );

    const handleDonateButtonClick = () => {
      setSelectedProject(project);
    };

    const donateButton = (
      <Button type="primary" style={{ marginLeft: '1rem' }} onClick={handleDonateButtonClick}>
        Donate
      </Button>
    );

    return (
      <List.Item key={project.codigo} extra={donateButton}>
        <List.Item.Meta title={project.name} description={description} />
      </List.Item>
    );
  });

  const header = <Typography.Title level={2}>Projetos em busca de doações</Typography.Title>;
  return (
    <>
      <List header={header}>{items}</List>
      <DonationModal project={selectedProject} onCancel={() => setSelectedProject(undefined)} />
    </>
  );
};

ProjectList.propTypes = {
  projects: PropTypes.array.isRequired
};

export default ProjectList;
