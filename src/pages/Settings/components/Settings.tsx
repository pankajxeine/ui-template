import { useState, ChangeEvent } from 'react';

import {
    Box,
    Typography,
    Tabs,
    Tab,
    Avatar,
    ListItemButton,
    styled,
} from '@mui/material';
import { navigationList } from '../navigation';
import { SettingsNavItems } from './SettingsNavItems';

const PREFIX = 'Settings';
const classes = {
    root: `${PREFIX}-root`,
    navigation: `${PREFIX}-navigation`,
};

const Root = styled('div')((
    {
        theme
    }
) => ({
    [`&.${classes.root}`]: {},

    [`& .${classes.navigation}`]: {
        cursor: 'pointer',
        transitionProperty: 'box-shadow border-color',
        transitionDuration: theme.transitions.duration.short,
        transitionTimingFunction: theme.transitions.easing.easeInOut,
    }
}));
const AvatarSuccess = styled(Avatar)(
    ({ theme }) => `
          background-color: ${theme.colors.success.lighter};
          color: ${theme.colors.success.main};
          width: ${theme.spacing(8)};
          height: ${theme.spacing(8)};
          margin-left: auto;
          margin-right: auto;
    `
);

const RootWrapper = styled(Box)(
    ({ theme }) => `
        padding: ${theme.spacing(2.5)};
  `
);

const TabsContainerWrapper = styled(Box)(
    ({ theme }) => `
        .MuiTabs-indicator {
            min-height: 4px;
            height: 4px;
            box-shadow: none;
            border: 0;
        }

        .MuiTab-root {
            &.MuiButtonBase-root {
                padding: 0;
                margin-right: ${theme.spacing(3)};
                font-size: ${theme.typography.pxToRem(16)};
                color: ${theme.colors.alpha.black[50]};

                .MuiTouchRipple-root {
                    display: none;
                }
            }

            &.Mui-selected:hover,
            &.Mui-selected {
                color: ${theme.colors.alpha.black[100]};
            }
        }
  `
);

function SidebarContent() {
    const [state, setState] = useState({
        invisible: true
    });
    const [currentTab, setCurrentTab] = useState<string>('all');
    const [filterNavigation, setNavigation] = useState<any[]>(navigationList.filter((nav) => nav.id != 'all'));

    const handleTabsChange = (_event: ChangeEvent<{}>, value: string): void => {
        let filterNav: any[] = [];
        if (value == 'all') {
            filterNav = navigationList.filter((nav) => nav.id != 'all');
        } else {
            filterNav = navigationList.filter((nav) => nav.id != 'all' && nav.id === value);
        }
        setNavigation(filterNav);
        setCurrentTab(value);
    };

    return (
        <RootWrapper>
            <Typography
                sx={{
                    mb: 1,
                    mt: 2
                }}
                variant="h3"
            >
                Settings
            </Typography>

            <TabsContainerWrapper>
                <Tabs
                    onChange={handleTabsChange}
                    value={currentTab}
                    variant="scrollable"
                    scrollButtons="auto"
                    textColor="primary"
                    indicatorColor="primary"
                >
                    {navigationList.map((tab: any) => (
                        <Tab key={tab.id} label={tab.name} value={tab.id} />
                    ))}
                </Tabs>
            </TabsContainerWrapper>

            <Box mt={2}>
                {currentTab === 'all' && (
                    <SettingsNavItems navigations={filterNavigation} classes={classes} />
                )}
                {currentTab === 'company' && (
                    <SettingsNavItems navigations={filterNavigation} classes={classes} />
                )}
                {currentTab === 'notification' && (
                    <SettingsNavItems navigations={filterNavigation} classes={classes} />
                )}
                {currentTab === 'app-settings' && (
                    <SettingsNavItems navigations={filterNavigation} classes={classes} />
                )}

            </Box>
        </RootWrapper >
    );
}

export default SidebarContent;
