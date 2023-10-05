import {
    Routes,
    Route
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

    return <ShopContext.Provider value={shop}>
        <Routes>
            <Route index element={<Menu />} />
            <Route path="add-employee" element={<AddEmployee />} />
            <Route path="add-client" element={<AddClient />} />
        </Routes>
    </ShopContext.Provider>
}

export default Shop;