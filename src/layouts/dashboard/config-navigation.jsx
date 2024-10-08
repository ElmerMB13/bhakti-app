import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'dashboard',
    path: '/',
    icon: icon('ic_analytics'),
  },
  {
    title: 'estudiantes',
    path: '/students',
    icon: icon('ic_user'),
  },
  {
    title: 'instructores',
    path: '/instructors',
    icon: icon('ic_user'),
  },
  {
    title: 'paquetes',
    path: '/packages',
    icon: icon('ic_cart'),
  },
  {
    title: 'clases',
    path: '/classes',
    icon: icon('ic_cart'),
  },
  {
    title: 'talleres',
    path: '/workshops',
    icon: icon('ic_cart'),
  },
  {
    title: 'login',
    path: '/login',
    icon: icon('ic_lock'),
  },
  {
    title: 'Not found',
    path: '/404',
    icon: icon('ic_disabled'),
  },
];

export default navConfig;
