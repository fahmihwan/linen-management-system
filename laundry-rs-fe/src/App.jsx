import { Suspense, lazy, useState } from "react";
import { RouterElement } from "./routes";
import { Link, Route, Router, Routes, useRoutes } from "react-router-dom";

function App() {
    return (
        <Suspense fallback="loading...">
            <Routes>
                {RouterElement().map((r, i) => (
                    <Route key={i} path={r.path} element={<r.element />} />
                ))}
            </Routes>
        </Suspense>
    );
}

export default App;
