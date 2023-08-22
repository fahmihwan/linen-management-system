import { useRoutes } from "react-router-dom";

// import { lazyLoadRoutes } from "./LazyLoadRouts";
import { lazy } from "react";

export function RouterElement() {
    const routes = [
        {
            path: "/",
            name: "dashboard",
            element: lazy(() => import(`../pages/dashboard/Index`)),
        },
        {
            path: "/master-data/product",
            name: "product-index",
            element: lazy(() => import(`../pages/master-data/product/Index`)),
        },
        {
            path: "/master-data/product/create",
            name: "product-create",
            element: lazy(() => import(`../pages/master-data/product/Create`)),
        },
        {
            path: "/master-data/product/:id/edit",
            name: "product-edit",
            element: lazy(() => import(`../pages/master-data/product/Edit`)),
        },
        {
            path: "/master-data/room",
            name: "room-index",
            element: lazy(() => import(`../pages/master-data/room/Index`)),
        },
        {
            path: "/master-data/room/create",
            name: "room-create",
            element: lazy(() => import(`../pages/master-data/room/Create`)),
        },
        {
            path: "/master-data/room/:id/edit",
            name: "room-edit",
            element: lazy(() => import(`../pages/master-data/room/Edit`)),
        },
        {
            path: "/master-data/status",
            name: "status-index",
            element: lazy(() => import(`../pages/master-data/status/Index`)),
        },
        {
            path: "/master-data/status/create",
            name: "status-create",
            element: lazy(() => import(`../pages/master-data/status/Create`)),
        },
        {
            path: "/master-data/status/:id/edit",
            name: "status-create",
            element: lazy(() => import(`../pages/master-data/status/Edit`)),
        },
        {
            path: "/detail-product",
            name: "detail-product",
            element: lazy(() => import(`../pages/detail-product/Index`)),
        },
    ];

    return routes;
    // return useRoutes(routes);
}
