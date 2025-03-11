// import AppUtils from '~/core/utils';
import { Navigate, createBrowserRouter } from "react-router-dom";
import { Loading } from 'ud-ui-toolkit';
// import Users from "~/core/containers/Account/Users";
import Login from "../auth/Login";

import AccountsConfig from "../pages/Account/accountConfig";
import { settingsRoutes } from '../pages/Settings/SettingsRouteConfig';
// import { customersRoutes } from '../containers/Customers/CustomersRouteConfig';
// import { billingRoutes } from '../containers/Billings/BiilingRouteConfig';
// import { usersRoutes } from '../containers/Users/UsersRouteConfig';
// import { helpdeskRoutes } from '../containers/HelpDesk/HelpDeskRouteConfig';
// import { reportsRoutes } from '../containers/Reports/ReportsRouteConfig';
import { dashboardRoutes } from '../pages/Dashboard/DashboardRouteConfig';
import { homeRoutes } from '../pages/Home/HomeRouteConfig';

const routes =
    [
        ...AccountsConfig,
        ...settingsRoutes,
        // ...customersRoutes,
        // ...billingRoutes,
        // ...usersRoutes,
        // ...helpdeskRoutes,
        // ...reportsRoutes,
        ...dashboardRoutes,
        ...homeRoutes,
        {
            path: '/login',
            exact: true,
            element: <Login />,
        },
        // {
        //     path: '/',
        //     exact: true,
        //     element: <Users />,
        // },
        {
            path: '/loading',
            exact: true,
            component: <Loading />,
        },
        {
            path: "*",
            element: <Navigate to="/error/error-404" />,
        },
    ];

export const router = createBrowserRouter(routes);

export type TRoutes = typeof routes