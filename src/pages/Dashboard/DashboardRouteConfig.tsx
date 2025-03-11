export const dashboardRoutes = [{
    path: '/dashboard',
    settings: {
        layout: {},
    },
    async lazy() {
        let { Layout } = await import("components/Layout");
        return { Component: Layout };
    },
    children: [
        {
            index: true,
            async lazy() {
                let { Dashboard } = await import(
                    "./index"
                );
                return {
                    Component: Dashboard,
                };
            },
        },
    ]
}];
