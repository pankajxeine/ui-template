import { injectReducer } from './index';

const withReducer = (key: string, reducer: any) => (WrappedComponent: any) => {
  injectReducer(key, reducer);

  return (props: any) => <WrappedComponent {...props} />;
};

export default withReducer;
