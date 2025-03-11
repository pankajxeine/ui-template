
import { Navigate, createBrowserRouter } from "react-router-dom";
import { dashboardRoutes } from 'pages/Dashboard/DashboardRouteConfig';
import AccountsConfig from "../pages/Account/accountConfig";
import { settingsRoutes } from '../pages/Settings/SettingsRouteConfig';
import Login from "../auth/Login";
import { Loading } from 'ud-ui-toolkit';

const routes = [
    {
        path: '/',
        settings: {
            layout: {},
        },
        async lazy() {
            let { Layout } = await import("components/Layout");
            return { Component: Layout };
        },
        children: [{
            index: true,
            path: '',
            async lazy() {
                let { Home } = await import(
                    "pages/Home/index"
                );
                return {
                    Component: Home,
                };
            },
        },
        {
            path: '/home',
            async lazy() {
                let { Home } = await import(
                    "pages/Home/index"
                );
                return {
                    Component: Home,
                };
            },
        },
        {
            path: '/calender',
            async lazy() {
                console.log("test");
                let { Settings } = await import(
                    "pages/Settings"
                );
                return {
                    Component: Settings,
                };
            }
        },
        {
            path: '/settings',
            async lazy() {
                console.log("test");
                let { Settings } = await import(
                    "pages/Settings"
                );
                return {
                    Component: Settings,
                };
            },
        },
        {
            path: '/settings/sales-agents',
            async lazy() {
                let { SalesAgents } = await import(
                    "pages/Settings/SalesAgents"
                );
                return {
                    Component: SalesAgents,
                };
            },
        },
        {
            path: '/settings/branches',
            async lazy() {
                let { Branches } = await import(
                    "pages/Settings/Branches"
                );
                return {
                    Component: Branches,
                };
            },
        },
        {
            path: '/error',
            async lazy() {
                console.log("test");
                let { Error404Page } = await import(
                    "pages/Error/Error400"
                );
                return {
                    Component: Error404Page,
                };
            }
        },
        ],

    },

    {
        path: "*",
        element: <Navigate to="/error" />,
    },
    {
        path: '/login',
        exact: true,
        element: <Login />,
    },
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

export type TRoutes = typeof routes;

// const routes =
//     [
//         ...AccountsConfig,
//         ...settingsRoutes,
//         // ...customersRoutes,
//         // ...billingRoutes,
//         // ...usersRoutes,
//         // ...helpdeskRoutes,
//         // ...reportsRoutes,
//         ...dashboardRoutes,
//         ...homeRoutes,
//         {
//             path: '/login',
//             exact: true,
//             element: <Login />,
//         },
//         // {
//         //     path: '/',
//         //     exact: true,
//         //     element: <Users />,
//         // },
//         {
//             path: '/loading',
//             exact: true,
//             component: <Loading />,
//         },
//         {
//             path: "*",
//             element: <Navigate to="/error/error-404" />,
//         },
//     ];

// export const router = createBrowserRouter(routes);

// export type TRoutes = typeof routes