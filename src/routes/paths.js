import Template from '../template/Template';
// import LoginPage from '../pages/LoginPage';
import NewUserPage from '../pages/NewUserPage';
import NewProjectPage from '../pages/NewProjectPage';
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
    name: '/new-project',
    component: NewProjectPage,
    template: Template
  },
  {
    name: '/donate',
    component: DonatePage,
    template: Template
  }
];
