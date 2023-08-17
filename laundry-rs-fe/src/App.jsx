import { Suspense, lazy, useState } from "react";
import { RouterElement } from "./routes";

function App() {
    // const Dashboard = lazy(() => import('./pages/dashboard/Index.jsx'));

    return <RouterElement />;
}

export default App;
