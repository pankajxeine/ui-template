
export const settingsRoutes = [
    {

        index: true,
        async lazy() {
            let { Settings } = await import(
                "./index"
            );
            return {
                Component: Settings,
            };
        },
    },
    {
        path: 'company',
        async lazy() {
            let { Company } = await import(
                "./Company"
            );
            return {
                Component: Company,
            };
        },
    },
    {
        path: 'branches',
        async lazy() {
            let { Branches } = await import(
                "./Branches/index1"
            );
            return {
                Component: Branches,
            };
        },
    },
    {
        path: 'branches/add-branch',
        async lazy() {
            let { AddBranch } = await import(
                "./Branches/AddBranch"
            );
            return {
                Component: AddBranch,
            };
        },
    },
    {
        path: 'sales-agents/add-sales-agent',
        async lazy() {
            let { AddBranch } = await import(
                "./Branches/AddBranch"
            );
            return {
                Component: AddBranch,
            };
        },
    },
    {
        path: 'business-hours',
        async lazy() {
            let { BusinessHours } = await import(
                "./BusinessHours"
            );
            return {
                Component: BusinessHours,
            };
        },
    },
    {
        path: 'email-settings',
        async lazy() {
            let { EmailSettings } = await import(
                "./EmailSettings"
            );
            return {
                Component: EmailSettings,
            };
        },
    },
    {
        path: 'packages',
        async lazy() {
            let { Packages } = await import(
                "./Packages/index1"
            );
            return {
                Component: Packages,
            };
        },
    },
    {
        path: 'packages/new',
        async lazy() {
            let { CreatePackage } = await import(
                "./Packages/CreatePackage"
            );
            return {
                Component: CreatePackage,
            };
        },
    },
    {
        path: 'app-settings',
        async lazy() {
            let { AppSettings } = await import(
                "./AppSettings"
            );
            return {
                Component: AppSettings,
            };
        },
    },
];
