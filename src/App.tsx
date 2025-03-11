import { useEffect } from "react";
import { AppContext, AppLayoutProvider, useCreateTheme, themes } from 'ud-ui-toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION } from "config/navigationConfig";
import { selectLayout, selectAuth } from "selectors";
// import useTreeChanges from 'tree-changes-hook';
import isEmpty from "lodash/isEmpty";
import includes from "lodash/includes";
import { router } from "./routing";
import Storage from "helpers/storage";
import { gatwayAction } from "store/slices/gatway/gatway.slice";
import 'styles/app.css';

import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  const { themeMode } = useSelector(selectLayout);
  //@ts-ignore
  const theme = useCreateTheme(themes[themeMode || 'light']);
  const dispatch = useDispatch();
  const auth = useSelector(selectAuth);
  console.log("auth", auth);
  // const { changed } = useTreeChanges(auth?.user);
  // const location = useLocation();
  // const { isAuthenticated } = auth?.user;

  // useEffect(() => {
  //   if (changed('isAuthenticated', true)) {
  //     dispatch(alertShow('Hello! And welcome!', { type: 'success', icon: 'bell', timeout: 10 }));
  //   }
  // }, [dispatch, changed]);

  useEffect(() => {
    const cpanelEndpoint = Storage.loadDomainEndpoint();
    if (
      isEmpty(cpanelEndpoint) ||
      cpanelEndpoint == "null" ||
      includes(cpanelEndpoint, "undefined/api")
    ) {
      dispatch(gatwayAction.getAwsCpanelRouteGateway({ hostname: window.location.hostname, application: "crm" }));
    }
  })

  return (
    <QueryClientProvider client={queryClient}>
      <AppContext.Provider value={{ router }}>
        <AppLayoutProvider navigation={NAVIGATION} theme={theme} router={router}>
          <RouterProvider router={router} />
        </AppLayoutProvider>
      </AppContext.Provider>
    </QueryClientProvider>

  );
}

export default App;
