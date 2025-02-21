import './i18n';
import { createRoot } from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import { Provider } from 'react-redux';
import ErrorHandler from 'components/ErrorHandler';

import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store';

window.store = store;

const { APP_ENV = '' } = process.env;

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);

  root.render(
    <>
      {' '}
      <App />{' '}
    </>,
  );

  root.render(
    <Provider store={store}>
      <ErrorBoundary FallbackComponent={ErrorHandler}>
        <App />
      </ErrorBoundary>
    </Provider>,
  );
}

/* c8 ignore next 3 */
if (['local', 'development'].includes(APP_ENV)) {
  // eslint-disable-next-line no-console
  reportWebVitals(console.log);
}
