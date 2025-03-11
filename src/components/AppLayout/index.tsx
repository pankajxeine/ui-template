import useDeepCompareEffect from '../../hooks/useDeepCompareEffect';
import Layouts from '../../layout/Layouts';
import isEqual from 'lodash/isEqual';
import merge from 'lodash/merge';
import { makeStyles } from '@mui/styles';
import AppContext from '../../AppContext';

import { generateSettings, setSettings } from '../../store/slices/app/settingsSlice';
import { memo, useContext, useMemo, useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { matchRoutes } from 'react-router-config';
import { useLocation, matchRoutes } from 'react-router-dom';
import { alpha } from '@mui/material/styles';
import { RootState } from '~/types';

const useStyles = makeStyles((theme: any) => ({
    '@global': {
        'code:not([class*="language-"])': {
            color: theme.palette.secondary.dark,
            backgroundColor:
                theme.palette.type === 'light' ? 'rgba(255, 255, 255, .9)' : 'rgba(0, 0, 0, .9)',
            padding: '2px 3px',
            borderRadius: 2,
            lineHeight: 1.7,
        },
        'table.simple tbody tr td': {
            borderColor: theme.palette.divider,
        },
        'table.simple thead tr th': {
            borderColor: theme.palette.divider,
        },
        'a:not([role=button])': {
            color: theme.palette.secondary.main,
            textDecoration: 'none',
            '&:hover': {
                textDecoration: 'underline',
            },
        },
        'a.link, a:not([role=button])[target=_blank]': {
            background: alpha(theme.palette.secondary.main, 0.2),
            color: 'inherit',
            borderBottom: `1px solid ${theme.palette.divider}`,
            textDecoration: 'none',
            '&:hover': {
                background: alpha(theme.palette.secondary.main, 0.3),
                textDecoration: 'none',
            },
        },
        '[class^="border-"]': {
            borderColor: theme.palette.divider,
        },
        '[class*="border-"]': {
            borderColor: theme.palette.divider,
        },
        hr: {
            borderColor: theme.palette.divider,
        },
        '::-webkit-scrollbar-thumb': {
            boxShadow: `inset 0 0 0 20px ${theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.24)' : 'rgba(255, 255, 255, 0.24)'
                }`,
        },
        '::-webkit-scrollbar-thumb:active': {
            boxShadow: `inset 0 0 0 20px ${theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.37)' : 'rgba(255, 255, 255, 0.37)'
                }`,
        },
        html: {
            backgroundColor: `${theme.palette.background.default}!important`,
            color: `${theme.palette.text.primary}!important`,
        },
    },
    root: {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
    },
}));

function AppLayout(props: any) {
    const dispatch = useDispatch();
    const settings = useSelector(({ app }: RootState) => app.settings.current);
    const defaultSettings = useSelector(({ app }: RootState) => app.settings.defaults);
    console.log("settings", settings);
    // const appContext = useContext(AppContext);
    // //@ts-ignore
    // const { routes } = appContext;
    const classes = useStyles(props);
    // console.log("routes", routes);
    //@ts-ignore
    //const matched = matchRoutes(routes, pathname)[0];
    const newSettings = useRef(defaultSettings);

    const shouldAwaitRender = useCallback(() => {
        console.log("shouldAwaitRender", shouldAwaitRender);
        let _newSettings;
        if (isEqual(newSettings.current, defaultSettings)) {
            /**
             * Reset to default settings on the new path
             */
            _newSettings = merge({}, defaultSettings);
        } else {
            _newSettings = newSettings.current;
        }

        if (isEqual(newSettings.current, _newSettings)) {
            newSettings.current = _newSettings;
        }
    }, [defaultSettings]);

    shouldAwaitRender();

    useDeepCompareEffect(() => {
        if (isEqual(newSettings.current, settings)) {
            dispatch(setSettings(newSettings.current));
        }
    }, [dispatch, newSettings.current, settings]);

    //@ts-ignore
    const Layout = useMemo(() => Layouts[settings.layout.style], [settings.layout.style]);

    return isEqual(newSettings.current, settings) ? (
        <Layout classes={{ root: classes.root }} {...props} />
    ) : null;
}

export default memo(AppLayout);
