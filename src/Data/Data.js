//Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilMoneyWithdrawal,
  UilUsdSquare,
} from '@iconscout/react-unicons';

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: 'Dashboard',
  },
  {
    icon: UilClipboardAlt,
    heading: 'Orders',
  },
  {
    icon: UilUsersAlt,
    heading: 'Customers',
  },
  {
    icon: UilPackage,
    heading: 'Products',
  },
  {
    icon: UilChart,
    heading: 'Analytics',
  },
];

export const CardData = [
  {
    title: 'Sales',
    color: {
      backGround: 'linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)',
      boxShadow: '0px 10px 20px 0px #e0c6f5',
    },
    barValue: 70,
    value: '25, 970',
    png: UilUsdSquare,
    series: [{ name: 'Sales', data: [31, 40, 28, 51, 42, 109, 100] }],
  },
  {
    title: 'Revenue',
    color: {
      backGround: 'linear-gradient(180deg, #ff919d 0%, #fc929d 100%)',
      boxShadow: '0px 10px 20px 0px #fdc0c7',
    },
    barValue: 80,
    value: '14, 270',
    png: UilMoneyWithdrawal,
    series: [{ name: 'Revenue', data: [10, 100, 50, 70, 800, 30, 40] }],
  },
  {
    title: 'Expenses',
    color: {
      backGround:
        'linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)',
      boxShadow: '0px 10px 20px 0px #f9d59b',
    },
    barValue: 60,
    value: '4,270',
    png: UilClipboardAlt,
    series: [{ name: 'Expenses', data: [10, 25, 15, 30, 12, 15, 20] }],
  },
];
