import { Stack, Divider, IconButton, Icon } from "eworldes-ui-toolkit";
import { useSelector, useDispatch } from 'react-redux';
import { themeChange } from 'store/slices/layoutSlice';
import { selectLayout } from "selectors";

const SidebarBottom = () => {
    const { foldedOpen, themeMode } = useSelector(selectLayout);
    const dispatch = useDispatch();
    const themeTogglehandler = () => {
        dispatch(themeChange());
    }

    console.log(foldedOpen);
    const onClickSetting = () => {

    }
    return (
        <>
            <Stack
                direction={foldedOpen ? 'column' : 'row'}
                spacing={1}
                justifyContent="center"
                alignItems="center"
                sx={{ width: '100%', p: 1, borderTop: 1, borderColor: "inherit" }}
            >
                <IconButton
                    tooltipTitle={"Help"}
                    onClickHandler={themeTogglehandler}
                    ariaLabel={"Help"}
                >
                    {<Icon iconName="help" />}
                </IconButton>
                <IconButton
                    tooltipTitle={`${themeMode === 'dark' ? 'Light' : 'Dark'} mode`}
                    onClickHandler={themeTogglehandler}
                    ariaLabel={themeMode}
                >
                    {themeMode !== 'dark' ? <Icon iconName="dark_mode" /> : <Icon iconName="light_mode" />}
                </IconButton>
                <Divider orientation={foldedOpen ? "horizontal" : "vertical"} variant="middle" flexItem />
                <IconButton
                    tooltipTitle="Settings"
                    onClickHandler={onClickSetting}
                    ariaLabel="Settings"
                >
                    <Icon iconName="settings" />
                </IconButton>
            </Stack>
        </>
    );
}

export default SidebarBottom;