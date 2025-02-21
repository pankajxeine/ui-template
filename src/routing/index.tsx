
import { Navigate, createBrowserRouter } from "react-router-dom";

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
                    "pages/Home"
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
                    "pages/Home"
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
                let { Home } = await import(
                    "pages/Home"
                );
                return {
                    Component: Home,
                };
            }
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
];

export const router = createBrowserRouter(routes);

export type TRoutes = typeof routes