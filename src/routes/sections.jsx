import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from 'src/layouts/dashboard';

export const IndexPage = lazy(() => import('src/pages/app'));
export const StudentsPage = lazy(() => import('src/pages/student'));
export const InstructorsPage = lazy(() => import('src/pages/instructor'));
export const LoginPage = lazy(() => import('src/pages/login'));
export const PackagesPage = lazy(() => import('src/pages/packages'));
export const ClassesPage = lazy(() => import('src/pages/classes'));
export const WorkshopsPage = lazy(() => import('src/pages/workshops'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { element: <IndexPage />, index: true },
        { path: 'students', element: <StudentsPage /> },
        { path: 'instructors', element: <InstructorsPage /> },
        { path: 'packages', element: <PackagesPage /> },
        { path: 'classes', element: <ClassesPage /> },
        { path: 'workshops', element: <WorkshopsPage /> },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
