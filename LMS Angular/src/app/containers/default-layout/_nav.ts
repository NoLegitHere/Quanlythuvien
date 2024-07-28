import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    name: 'Books',
    url: '/book/books',
    iconComponent: { name: 'cil-calculator' },
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
];

export const adminNavItems: INavData[] = [
  {
    name: 'Bảng điều khiển',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    name: 'Sách',
    url: '/book/books',
    iconComponent: { name: 'cil-spreadsheet' },
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    name: 'Sách phát hành',
    url: '/issues/issuebooks',
    iconComponent: { name: 'cil-people' },

    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    name: 'Trang quản lý',
    url: '/admin/admins',
    iconComponent: { name: 'cil-user' },
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
];
