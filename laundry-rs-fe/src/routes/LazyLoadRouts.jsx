import { Suspense, lazy } from "react";

export function lazyLoadRoutes(componentName) {
    const LazyElement = lazy(() => import(`../pages/${componentName}.jsx`));

    return (
        <Suspense fallback="Loading...">
            <LazyElement />
        </Suspense>
    );
}
