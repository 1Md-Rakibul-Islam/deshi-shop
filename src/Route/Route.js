import { createBrowserRouter } from "react-router-dom";
import ProductComponent from "../containers/ProductComponent";
import ProductDetails from "../containers/ProductDetails";
import ProductListing from "../containers/ProductListing";
import Main from "../layout/Main";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <ProductListing></ProductListing>
            },
            {
                path: "/product/:id",
                element: <ProductDetails></ProductDetails>
            },
            {
                path: "*",
                element: <div><h2 className="text-center text-5xl mx-auto my-auto">404 Not Found!</h2></div>
            }
        ]
    }
]);

export default router;