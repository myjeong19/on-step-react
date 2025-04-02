import { createBrowserRouter, Navigate, RouterProvider } from 'react-router';
import { PublicLayout } from '../../components/layouts/public-layout';
import { PrivateLayout } from '../../components/layouts/private-layout';
import { ROUTER_PATH } from './constants';

import LandingPage from '@/pages/landing/landing.page';
import DashboardPage from '@/pages/dashboard/dashboard.page';
import QuestionPage from '@/pages/question/question';
import SchedulePage from '@/pages/schedule/schedule.page';

const browserRouter = createBrowserRouter([
  {
    path: '/',
    element: <PublicLayout />,
    children: [
      {
        path: ROUTER_PATH.PUBLIC.LANDING,
        element: <LandingPage />,
      },
    ],
  },
  {
    path: '/on-step',
    element: <PrivateLayout />,
    children: [
      { path: ROUTER_PATH.PRIVATE.DASHBOARD, element: <DashboardPage /> },
      { path: ROUTER_PATH.PRIVATE.QUESTION, element: <QuestionPage /> },
      { path: ROUTER_PATH.PRIVATE.SCHEDULE, element: <SchedulePage /> },
    ],
  },
  {
    path: '*',
    element: <Navigate to={ROUTER_PATH.PUBLIC.LANDING} />,
  },
]);

export const Router = () => {
  return <RouterProvider router={browserRouter} />;
};
