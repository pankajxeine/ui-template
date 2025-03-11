// import { Navigation, } from 'core/types';
import { Navigation } from 'ud-ui-toolkit';

export const NAVIGATION: Navigation = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    title: 'Dashboard',
    link: "/home",
    icon: "home"
  },
  {
    segment: 'calender',
    title: 'Calendar',
    link: "/calender",
    icon: "event"
  },
  {
    segment: 'users',
    title: 'Users',
    icon: 'user-icon',
    link: '/users'
  },
  {
    segment: 'customers',
    title: 'Customers',
    icon: 'recent_actors',
    link: '/customers',
  },
  {
    segment: 'reports',
    title: 'Reports',
    icon: 'report-info',
    link: '/reports',
  },
  {
    segment: 'billing',
    title: 'Billing',
    icon: 'reports',
    link: '/billing',
  },
  {
    //id: 'helpdesk',
    segment: 'help-desk',
    title: 'Help Desk',
    //translate: 'helpdesk',
    //type: 'item',
    icon: 'support_agent',
    link: '/help-desk',
    //children: []
  },
  {
    //id: 'settings',
    segment: 'settings',
    title: 'Settings',
    icon: 'setup',
    link: '/settings'
  }
];

