import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import ShopContext from "./context";

import Menu from "./Menu";
import AddEmployee from "./AddEmployee";
import AddClient from "./AddClient";
import { useState } from "react";


function Shop () {
    const [clients, setClientsRAW] = useState(JSON.parse(localStorage.getItem("clients")) || [])
    const [employee, setEmployeeRAW] = useState(JSON.parse(localStorage.getItem("employee")) || [])

    const shop = {
        clients,
        setClients: func => {
            let item = func(clients)
            let string = JSON.stringify(item)
            localStorage.setItem("clients", string)
            setClientsRAW(item)
        },
        employee, 
        setEmployee: func => {
            let item = func(employee)
            let string = JSON.stringify(item)
            localStorage.setItem("employee", string)
            setEmployeeRAW(item)
        },
    }

    const router = createBrowserRouter([
        {
            path: "shop/",
            element: <Menu />,
        },
        {
            path: "shop/add-employee/",
            element: <AddEmployee />,
        },
        {
            path: "shop/add-client/",
            element: <AddClient />,
        },
    ])

    return <ShopContext.Provider value={shop}>
        <RouterProvider router={router} />
    </ShopContext.Provider>
}

export default Shop;