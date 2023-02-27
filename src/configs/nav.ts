import { Nav } from 'daks-svelte';
import type { NavItem, NavSite } from 'daks-svelte/types';

interface NavDraver {
  header?: NavItem[];
  activity?: NavItem[];
  footer?: NavItem[];
}

const activity: NavItem[] = [
  {
    href: '/inspection',
    label: 'Обследование зданий и сооружений'
  },
  {
    href: '/technical-supervision',
    label: 'Технический надзор'
  },
  {
    href: '/laboratory-control',
    label: 'Лабораторный контроль',
    links: [
      {
        href: '/electric-heating',
        label: 'Электропрогрев'
      },
      {
        href: '/field-tests',
        label: 'Натурные испытания'
      }
    ]
  },
  {
    href: '/geodesy-monitoring',
    label: 'Геодезия и мониторинг'
  },
  {
    href: '/forensic-examination',
    label: 'Судебная экспертиза'
  },
  {
    href: '/energy-audit',
    label: 'Энергоаудит'
  },
  {
    href: '/certification-accreditation',
    label: 'Сертификация и аккредитация'
  }
];

export const nav: NavSite = {
  navbar: {
    links: [
      {
        href: '/activity',
        label: 'Деятельность',
        links: activity
      },
      {
        href: '/portfolio',
        label: 'Проекты'
      },
      {
        href: '/permissions',
        label: 'Допуски'
      },
      {
        href: '/regulation',
        label: 'Регламент'
      },
      {
        href: '/contacts',
        label: 'Контакты'
      }
    ]
  },
  footer: {
    links: [
      {
        href: '/permissions',
        label: 'Допуски'
      },
      {
        href: '/regulation',
        label: 'Регламент'
      },
      {
        href: '/contacts',
        label: 'Контакты'
      },
      {
        href: '/admin',
        label: 'ic:outline-settings', // &#128736;
        disallow: true
      }
    ]
  }
};

export const draver: NavDraver = {
  header: [
    {
      href: '/about',
      label: 'О предприятии'
    },
    {
      href: '/partners',
      label: 'Партнёры'
    }
  ],
  activity,
  footer: [
    {
      href: '/feedback',
      label: 'Отзывы'
    },
    {
      href: '/privacy',
      label: 'Политика конфиденциальности'
    }
  ]
};

export const map = [
  ...Nav.map(nav.navbar.links),
  ...Nav.map(draver.header ?? []),
  ...Nav.map(draver.footer ?? []),
  ...Nav.map(nav.footer.links ?? []),
  ...(nav.allow ?? [])
].filter((el, idx, arr) => arr.indexOf(el) === idx);
