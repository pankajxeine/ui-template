import { AppContext, AppLayoutProvider, useCreateTheme, themes } from 'eworldes-ui-toolkit';
import { useSelector } from "react-redux";
import { NAVIGATION } from "config/navigationConfig";
import { selectLayout } from "selectors";
import { router } from "./routing";
import 'styles/app.css';
import { RouterProvider } from 'react-router-dom';

function App() {
  const { themeMode } = useSelector(selectLayout);
  //@ts-ignore
  const theme = useCreateTheme(themes[themeMode || 'light']);
  return (
    <AppContext.Provider value={{ router }}>
      <AppLayoutProvider navigation={NAVIGATION} theme={theme} router={router}>
        <RouterProvider router={router} />
      </AppLayoutProvider>
    </AppContext.Provider>
  );
}

export default App;
