import { useRoutes } from "react-router-dom";

// import { lazyLoadRoutes } from "./LazyLoadRouts";
import { lazy } from "react";

export function RouterElement() {
    const routes = [
        {
            path: "/",
            name: "index",
            element: lazy(() => import(`../pages/dashboard/Index`)),
        },
        {
            path: "/master-data/product",
            name: "index",
            element: lazy(() => import(`../pages/master-data/product/Index`)),
        },
    ];

    return routes;
    // return useRoutes(routes);
}
