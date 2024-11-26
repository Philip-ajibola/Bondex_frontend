import {ROUTE} from "./routes/route.jsx";
import {BrowserRouter, useRoutes} from "react-router-dom";

function App() {
     // useRoutes within Router context
    return useRoutes(ROUTE);
}

export default function Root() {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
}

