import {
    Outlet,
    createBrowserRouter, 
    // Outlet,
} from "react-router-dom";

// loaders
import { loader as authLoader } from "../components/Auth";
// import { loader as SignupLoader } from './../pages/Signup';
import { loader as SignoutLoader } from './../components/SignOut';
// import { loader as AppConfirmPageLoader } from "../pages/AppConfirmPage";

import Landing from "./../pages/Landing"
import TermsAndConditions from "./../pages/TermsAndConditions"
// import Signup from './../pages/Signup';
import Error404Page from './../components/Error404Page'
// import Login from './../pages/Login';
// import ForgotPassword from './../pages/ForgotPassword';
import Auth from "../components/Auth";
import PricacyPolicy from "../pages/PricacyPolicy";
import SignOut from './../components/SignOut';
// import Meets from "../pages/Meets";
import Products from "../pages/Products";
import AddNewProduct from "../pages/AddNewProduct";
// import AppConfirmPage from "../pages/AppConfirmPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Auth />,
        errorElement: <Error404Page />,
        loader: authLoader,
        children: [
            {
                path: "/",
                element: <p></p>,
            },
            {
                path: "/products",
                element: <Outlet />,
                children: [
                    {
                        path: "/products",
                        element: <Products />,
                    },
                    {
                        path: "/products/add",
                        element: <AddNewProduct />,
                    },
                ]
            },
            {
                path: "/customer-service",
                element: <h1 style={{textAlign: 'center'}}>Whatsapp on +91 7999004229</h1>,
            },
            // {
            //     path: "/meeting/:meetId/confirm",
            //     element: <AppConfirmPage />,
            //     loader: AppConfirmPageLoader
            // },
        ]
    },
    {
        path: "/landing",
        element: <Landing />,
        errorElement: <Error404Page />,
    },
    {
        path: "/termsAndConditions",
        element: <TermsAndConditions />,
    },
    {
        path: "/privacyPolicy",
        element: <PricacyPolicy />,
    },
    // {
    //     path: "/signup/:planType",
    //     element: <Signup />,
    //     loader: SignupLoader,
    // },
    // {
    //     path: "/login",
    //     element: <Login />,
    // },
    // {
    //     path: "/create-store",
    //     element: <h6>Customer account</h6>,
    // },
    // {
    //     path: "/forgot-password",
    //     element: <h6>Forgot Password</h6>,
    // },
    // {
    //     path: "/forgot-password",
    //     element: <ForgotPassword />,
    // },
    {
        path: "/sign-out",
        element: <SignOut />,
        loader: SignoutLoader,
    },
]);