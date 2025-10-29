import MobileDetect from 'mobile-detect';
import { useEffect, useState } from "react";
import { navigationList } from './navigation';
import { Scrollbar, PageContainer, PageHeader, Box, Typography, Grid } from 'ud-ui-toolkit';
import { SettingsNavItems } from './components/SettingsNavItems';
import { DynamicTabs } from 'components/DynamicTabs';
import { TabsProps } from 'components/DynamicTabs/types';
import { PageHeaderContainer } from 'components/PageHeaderContainer/PageHeaderContainer';

const md = new MobileDetect(window.navigator.userAgent);
const isMobile = md.mobile();

export function Settings() {
    console.log("isMobile", isMobile);
    const [selectedTab, setSelectedTab] = useState("all");
    const [tabs, setTabs] = useState<TabsProps[]>([]);
    const [filterNavMenu, setFilterNavMenu] = useState<any[]>(navigationList);
    const headerBreadcrumbs = (
        <Box sx={{ display: "flex", flexDirection: "column", width: "100%", pl: 2 }}>
            <PageHeader
                pathname={location.pathname}
                separatorType={">"}
            />
            <Typography
                variant="h5" // Heading style for the page title
                className="page-title"
                sx={{
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: "var(--fontFamily, Roboto)",
                    fontSize: (theme) => ({
                        xs: theme.typography.pxToRem(20),  // 1.25rem on small screens
                        sm: theme.typography.pxToRem(24),  // 1.5rem on larger screens
                    }),
                    fontWeight: 600,
                    lineHeight: "160%",
                    letterSpacing: "0.00938rem",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "block",
                }}
            >
                Settings
            </Typography>
        </Box>
    );

    useEffect(() => {
        const tabs: any[] = [];
        navigationList.forEach(tab => tabs.push({ value: tab.id, label: tab.name }));
        setTabs(tabs);
    }, [navigationList]);

    useEffect(() => {
        if (selectedTab == "all") {
            setFilterNavMenu(navigationList);
        } else {
            setFilterNavMenu(navigationList.filter(nav => nav.id === selectedTab));
        }
    }, [selectedTab]);


    return (
        <>
            <PageContainer
                maxWidth={false}
                breadcrumbs={[]}
                slots={{
                    header: () => (
                        <PageHeaderContainer
                            leftSection={
                                headerBreadcrumbs
                            }>
                            <Box flexGrow={1} pt={1}>
                                <DynamicTabs
                                    activeTab={selectedTab}
                                    onChange={(e) => {
                                        setSelectedTab(e);
                                    }}
                                    tabs={tabs}
                                />
                            </Box>
                        </PageHeaderContainer>
                    ),
                }}
                style={{ padding: 0 }}
            >
                <Scrollbar>
                    <Grid container spacing={3}>
                        <SettingsNavItems navigations={filterNavMenu} />
                    </Grid>

                </Scrollbar>
            </PageContainer>
        </>
    );
}