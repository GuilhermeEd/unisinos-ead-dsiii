import Template from '../template/Template';
// import LoginPage from '../pages/LoginPage';
import NewUserPage from '../pages/NewUserPage';
import ManageProjects from '../pages/ManageProjects';
import DonatePage from '../pages/DonatePage';

import { isAdmin, isDonator, isInstitution } from '../utils/permissions';

export const adminPaths = [
  {
    name: '/manage-projects',
    component: ManageProjects,
    template: Template
  }
];

export const institutionPaths = [
  {
    name: '/manage-projects',
    component: ManageProjects,
    template: Template
  }
];

export const donatorPaths = [
  {
    name: '/donate',
    component: DonatePage,
    template: Template
  }
];

export const privatePaths = [
  ...(isAdmin() ? adminPaths : []),
  ...(isInstitution() ? institutionPaths : []),
  ...(isDonator() ? donatorPaths : [])
];

export const publicPaths = [
  // {
  //   name: '/login',
  //   component: LoginPage,
  //   default: true
  // }
  {
    name: '/new-user',
    component: NewUserPage,
    template: Template,
    default: true
  }
];
