import { Suspense, lazy } from "react";

export function lazyLoadRoutes(componentName) {
    console.log(`../pages/${componentName}.jsx`);

    const LazyElement = lazy(() => import(`../pages/${componentName}.jsx`));
                                           // ../pages/dashboard/Index.jsx
    // const LazyElement = lazy(() => import(`../pages/dashboard/Index.jsx`));
    return (
        <Suspense fallback="Loading...">
            <LazyElement />
        </Suspense>
    );
}
