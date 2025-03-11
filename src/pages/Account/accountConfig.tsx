
const routes = [{
    path: '/',
    category: 'authorization',
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
                let { Roles } = await import(
                    "./Roles"
                );
                return {
                    Component: Roles,
                };
            },
        },
        {
            path: 'roles',
            async lazy() {
                let { Roles } = await import(
                    "./Roles"
                );
                return {
                    Component: Roles,
                };
            },
        },
    ]
}];

export default routes;
