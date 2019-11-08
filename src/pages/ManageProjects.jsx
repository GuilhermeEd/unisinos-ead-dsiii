import React from 'react';

import ProjectsTable from '../components/tables/ProjectsTable';

import * as Styled from './styles/Page.styles';

const ManageProjects = () => {
  return (
    <Styled.Page>
      <ProjectsTable />
    </Styled.Page>
  );
};

export default ManageProjects;
