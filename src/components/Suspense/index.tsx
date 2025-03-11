import { Loading } from 'ud-ui-toolkit';
import { Suspense } from 'react';

type SuspenseProps = {
    loadingProps: object;
    children: any
}
/**
 * React Suspense defaults
 * For to Avoid Repetition
 */ function AppSuspense({ loadingProps = {
    delay: 0
}, children }: SuspenseProps) {
    return <Suspense fallback={<Loading {...loadingProps} />}>{children}</Suspense>;
}

export default AppSuspense;
