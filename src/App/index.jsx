import React from "react";

import {
    BrowserRouter,
    Route,
    Routes,
} from "react-router-dom";

import Shop from "./Shop"
import Pet from "./Pet"
import Bouqet from "./Bouqet"
import Hub from "./Hub";

function App () {
    return <BrowserRouter>
        <Routes>
            <Route path="/urfu-oop/">
                <Route index element={<Hub />} />
                <Route path="shop/*" element={<Shop />} />
                <Route exact path="pet" element={<Pet />} />
                <Route exact path="bouqet" element={<Bouqet />} />
            </Route>
        </Routes>
    </BrowserRouter>
}

export default App