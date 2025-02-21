import { AppLayout } from "eworldes-ui-toolkit";
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LAYOUTCONFIG } from "config/layoutConfig";
import { navbarToggleFolded } from "store/slices/layoutSlice";
import { selectLayout } from "selectors";
import Footer from "./Footer";
import HeaderToolbar from "./HeaderToolbar";
import SidebarBottom from "./SidebarBottom";

export const Layout = () => {
    const dispatch = useDispatch();
    const { foldedOpen } = useSelector(selectLayout);
    const navExpandedClick = () => {
        dispatch(navbarToggleFolded());
    }
    return (
        <AppLayout
            hideNavigation={LAYOUTCONFIG.hideNavigation}
            defaultSidebarCollapsed={LAYOUTCONFIG.defaultSidebarCollapsed || foldedOpen}
            footerView={<Footer />}
            toolbarView={<HeaderToolbar />}
            sidebarFooter={<SidebarBottom />}
            navExpandedToggleHandler={navExpandedClick}
        >
            <Outlet />
        </AppLayout>
    );
}