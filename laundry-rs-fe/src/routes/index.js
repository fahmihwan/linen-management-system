import { useRoutes } from "react-router-dom";

import { lazyLoadRoutes } from "./LazyLoadRouts";
import { lazy } from "react";

export function RouterElement() {
    const routes = [
        {
            path: "/",
            name: "index",
            element: lazyLoadRoutes("About"),
            // element: lazy(() => import(`../pages/dashboard/Index`)),
        },
        // {
        //     path: "/about",
        //     name: "about",
        //     element: lazyLoadRoutes("About"),
        // },
        // {
        //     path: "services",
        //     name: "services",
        //     element: lazyLoadRoutes("Service"),
        // },
    ];

    return useRoutes(routes);
}
