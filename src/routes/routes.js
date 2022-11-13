import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "../components/loading";

const Home = lazy(() => import("../pages/home"));
const About = lazy(() => import("../pages/about"));

function RouteApp() {
    return (
        <Suspense fallback={<Loading/>}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pages/about" element={<About />} />
            </Routes>
        </Suspense>
    )
}

export default RouteApp;