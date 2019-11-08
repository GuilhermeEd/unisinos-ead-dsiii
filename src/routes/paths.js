import Template from '../template/Template';
// import LoginPage from '../pages/LoginPage';
import NewUserPage from '../pages/NewUserPage';
import ManageProjects from '../pages/ManageProjects';
import DonatePage from '../pages/DonatePage';

export const adminPaths = [];

export const privatePaths = [];

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
  },
  {
    name: '/manage-projects',
    component: ManageProjects,
    template: Template
  },
  {
    name: '/donate',
    component: DonatePage,
    template: Template
  }
];
