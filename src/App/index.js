import React from "react";

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Shop from "./Shop"
import LabHub from "./LabHub";

function App () {
    const router = createBrowserRouter([
        {
            path: "urfu-oop/",
            element: <LabHub />,
        },
        {
            path: "urfu-oop/shop/",
            element: <Shop />,
        }
    ])

    return <RouterProvider router={router} />
}

export default App