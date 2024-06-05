import { createBrowserRouter} from "react-router-dom";
import Home from "../components/Home/Home";

import ErrorPage from "../error-page";
import Root from "../layout/Root";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
        {
            path: "/",
            element: <PrivateRoute><Home/></PrivateRoute>,
        },
        {
            path: "login",
            element: <Login/>,
        },
        {
            path: "register",
            element: <Register/>,
        }
    ]
  },
]);
