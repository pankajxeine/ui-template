import MobileDetect from 'mobile-detect';
import { useEffect, useState } from "react";
import { navigationList } from './navigation';
import { Scrollbar, PageContainer, HeaderContainer, Box } from 'ud-ui-toolkit';
import { SettingsNavItems } from './components/SettingsNavItems';
import { DynamicTabs } from 'components/DynamicTabs';
import { TabsProps } from 'components/DynamicTabs/types';
const md = new MobileDetect(window.navigator.userAgent);
const isMobile = md.mobile();
export function Settings() {
    console.log("isMobile", isMobile);
    const [selectedTab, setSelectedTab] = useState("all");
    const [tabs, setTabs] = useState<TabsProps[]>([]);
    const [filterNavMenu, setFilterNavMenu] = useState<any[]>(navigationList);
    // const TabMap: any = {
    //     0: { Component: CaseSummary, label: "Case Summary" },
    //     1: { Component: CaseNotes, label: "Case Notes" },
    //     2: { Component: Financials, label: "Financials" },
    // };


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
                        <HeaderContainer enableBreadcrumbs breadcrumSeparator=">" >
                            <Box flexGrow={1} pt={1}>
                                <DynamicTabs
                                    activeTab={selectedTab}
                                    onChange={(e) => {
                                        setSelectedTab(e);
                                    }}
                                    tabs={tabs}
                                />
                            </Box>
                        </HeaderContainer>
                    ),
                }}
                style={{ padding: 0 }}
            >
                <Scrollbar>
                    <SettingsNavItems navigations={filterNavMenu} />
                </Scrollbar>
            </PageContainer>
        </>
    );
}