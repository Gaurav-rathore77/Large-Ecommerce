import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Userdetails from "../pages/Userdetails";
import Contact from "../pages/Contact";

export const router = createBrowserRouter([     
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,  // Use `index: true` instead of `path: ""`
                element: <Home />,
            },
            {
                path: "login",
                element: <Login/>,
            },
            {
                path: "register",
                element: <Register/>,
            },
            {
                Path : "user-details",
                element  : <Userdetails/>
            },
            {
                path : "contact",
                element : <Contact/>
            }
        ],
    },
]);
