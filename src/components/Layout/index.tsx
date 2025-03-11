import { useEffect } from "react";
import { AppLayout } from "ud-ui-toolkit";
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from "react-router-dom";
import { LAYOUTCONFIG } from "config/layoutConfig";
import { navbarToggleFolded } from "store/slices/layoutSlice";
import { selectLayout, selectAuth } from "selectors";
import Footer from "./Footer";
import HeaderToolbar from "./HeaderToolbar";
import SidebarBottom from "./SidebarBottom";

export const Layout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const { foldedOpen } = useSelector(selectLayout);
    const { login } = useSelector(selectAuth);


    useEffect(() => {
        // const routePathConfig = matched ? matched[0] : "/404";
        // console.log("matched", routePathConfig);
        //@ts-ignore
        //const matched = useMatches();
        //const isAccessGranted = AppUtils.hasPermission(matched.route?.auth, ["Admin"]);
        //setAccessGranted(isAccessGranted);
        if (!false) {
            redirectRoute();
        }
    }, [login]);

    const redirectRoute = () => {
        const { pathname, state } = location;
        const redirectUrl = state && state.redirectUrl ? state.redirectUrl : '/';
        /*
            User is guest
            Redirect to Login Page
            */
        if (!login.isAuthenticated) {
            navigate("/login", { state: { redirectUrl: pathname } });
        } else {
            /*
              User is member
              User must be on unAuthorized page or just logged in
              Redirect to dashboard or redirectUrl
              */
            navigate(redirectUrl);
        }
    }

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