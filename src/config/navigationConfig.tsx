// import { Navigation, } from 'core/types';
import { Icon, Navigation } from 'eworldes-ui-toolkit';

export const NAVIGATION: Navigation = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    title: 'Dashboard',
    link: "/home",
    icon: <Icon iconName='home' />
  },
  {
    segment: 'calender',
    title: 'Calendar',
    link: "/calender",
    icon: <Icon iconName='event' />
  },
];