import Template from '../template/Template';
// import LoginPage from '../pages/LoginPage';
import NewUserPage from '../pages/NewUserPage';
import ManageProjects from '../pages/ManageProjects';
import DonatePage from '../pages/DonatePage';

export const adminPaths = [
  {
    name: '/manage-projects',
    component: ManageProjects,
    template: Template,
    default: true
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
