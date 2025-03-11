import { Stack, LanguageMenu, AccountMenu, Box, Divider, Icon, IconButton } from "ud-ui-toolkit";
import Brand from "components/Brand";
import { languages } from "config/languageConfig";

const menuItems = [
    {
        id: 1,
        title: 'View Profile',
        icon: 'mingcute:user-2-fill',
    },
    {
        id: 2,
        title: 'Account Settings',
        icon: 'material-symbols:settings-account-box-rounded',
    },
    {
        id: 3,
        title: 'Notifications',
        icon: 'ion:notifications',
    },
    {
        id: 5,
        title: 'Help Center',
        icon: 'material-symbols:live-help',
    },
    {
        id: 6,
        title: 'Logout',
        icon: 'material-symbols:logout',
    },
];

const profile = {
    "name": "Pankaj Kumar",
    "image": "",
    "email": "pKumar@eworldes.com"
}
const HeaderToolbar = () => {
    const onClickNotification = () => {

    }
    return (
        <>
            <Stack direction="row" alignItems="center">
                <Brand />
            </Stack>
            <Stack direction="row" alignItems="center" sx={{ pr: 3 }}>
                <IconButton
                    tooltipTitle="notifications"
                    onClickHandler={onClickNotification}
                    ariaLabel="notifications"
                >
                    <Icon iconName="notifications" />
                </IconButton>
                <Divider orientation="vertical" variant="middle" flexItem sx={{ mx: 1 }} />
                <LanguageMenu languages={languages} />
                <Divider orientation="vertical" variant="middle" flexItem sx={{ mx: 1 }} />
                <Box sx={{ pl: 1 }}>
                    <AccountMenu profile={profile} menus={menuItems} />
                </Box>

                {/* <AccountMenu /> */}
            </Stack>
        </>
    );
}

export default HeaderToolbar;