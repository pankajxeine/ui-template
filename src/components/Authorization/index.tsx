import { useEffect, useState, useContext } from "react";
// import { useUpdateEffect } from "react-use";
// import { createBrowserHistory } from 'history';
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
// import AppUtils from "~/core/utils";
import { RootState } from '~/types';
import { AppContext } from "ud-ui-toolkit";
import Suspense from '~/core/components/Suspense';
import { SnackbarProvider } from 'notistack';
import AppTheme from '~/core/components/AppTheme';
import AppLayout from '~/core/components/AppLayout';
import {
    QueryClient,
    QueryClientProvider,
} from 'react-query'
// import { Outlet } from "react-router-dom"
// import Loading from '~/core/components/Loading';
export const Authorization = (props: any) => {
    console.log("Authorization", props);
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false, // default: true
            },
        },
    })
    const { login } = useSelector((state: RootState) => state.auth);
    const [accessGranted, setAccessGranted] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();
    const appContext = useContext(AppContext);
    //@ts-ignore
    const { routes } = appContext;
    //console.log(routes)

    useEffect(() => {
        // const routePathConfig = matched ? matched[0] : "/404";
        // console.log("matched", routePathConfig);
        //@ts-ignore
        //const matched = useMatches();
        //const isAccessGranted = AppUtils.hasPermission(matched.route?.auth, ["Admin"]);
        //setAccessGranted(isAccessGranted);
        if (!true) {
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
        if (login.isAuthenticated) {
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
    return (
        accessGranted && (
            <Suspense >
                <AppTheme>
                    <SnackbarProvider
                        maxSnack={5}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        classes={{
                            containerRoot: 'bottom-0 right-0 mb-52 md:mb-68 mr-8 lg:mr-80 z-99',
                        }}
                    >
                        <AppLayout />

                    </SnackbarProvider>
                </AppTheme>
            </Suspense >
        )
    )
}