import { useRoutes } from "react-router-dom";

import { lazy } from "react";

export function RouterElement() {
    const routes = [
        // user
        {
            path: "/",
            name: "auth-admin",
            element: lazy(() => import("../pages/auth/AuthAdmin")),
        },
        {
            path: "/super-admin/login",
            name: "auth-super-admin",
            element: lazy(() => import("../pages/auth/AuthSuperAdmin")),
        },
        {
            path: "/admin/dashboard",
            name: "dashboard",
            element: lazy(() => import("../pages/dashboard/Index")),
        },
        {
            path: "/admin/master-data/product",
            name: "product-index",
            element: lazy(() => import("../pages/master-data/product/Index")),
        },
        {
            path: "/admin/master-data/product/create",
            name: "product-create",
            element: lazy(() => import("../pages/master-data/product/Create")),
        },
        {
            path: "/admin/master-data/product/:id/edit",
            name: "product-edit",
            element: lazy(() => import("../pages/master-data/product/Edit")),
        },
        {
            path: "/admin/master-data/room",
            name: "room-index",
            element: lazy(() => import("../pages/master-data/room/Index")),
        },
        {
            path: "/admin/master-data/room/create",
            name: "room-create",
            element: lazy(() => import("../pages/master-data/room/Create")),
        },
        {
            path: "/admin/master-data/room/:id/edit",
            name: "room-edit",
            element: lazy(() => import("../pages/master-data/room/Edit")),
        },
        {
            path: "/admin/master-data/status",
            name: "status-index",
            element: lazy(() => import("../pages/master-data/status/Index")),
        },
        {
            path: "/admin/master-data/status/create",
            name: "status-create",
            element: lazy(() => import("../pages/master-data/status/Create")),
        },
        {
            path: "/admin/master-data/status/:id/edit",
            name: "status-create",
            element: lazy(() => import("../pages/master-data/status/Edit")),
        },
        {
            path: "/admin/master-data/role",
            name: "role-index",
            element: lazy(() => import("../pages/master-data/role/Index")),
        },
        {
            path: "/admin/master-data/role/create",
            name: "role-create",
            element: lazy(() => import("../pages/master-data/role/Create")),
        },
        {
            path: "/admin/detail-product",
            name: "detail-product",
            element: lazy(() => import("../pages/detail-product/Index")),
        },
        {
            path: "/admin/detail-product/create",
            name: "detail-product-create",
            element: lazy(() => import("../pages/detail-product/Create")),
        },
        {
            path: "/admin/detail-product/:id/edit",
            name: "detail-product-edit",
            element: lazy(() => import("../pages/detail-product/Edit")),
        },

        {
            path: "/admin/staff",
            name: "staff-index",
            element: lazy(() => import("../pages/staff/Index")),
        },
        {
            path: "/admin/staff/create",
            name: "staff-index",
            element: lazy(() => import("../pages/staff/Create")),
        },
        {
            path: "/admin/staff/:id/edit",
            name: "staff-edit",
            element: lazy(() => import("../pages/staff/Edit")),
        },
        // user
        {
            path: "/activity-menu",
            name: "activity-user",
            element: lazy(() => import("../pages/user-interface/ActivityMenu")),
        },
        {
            path: "/activity-menu/:menu/scanqr",
            name: "activity-user",
            element: lazy(() => import("../pages/user-interface/ScanQrCode")),
        },
    ];

    return routes;
    // return useRoutes(routes);
}
