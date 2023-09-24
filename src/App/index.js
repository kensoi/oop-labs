import React from "react";

import {
    BrowserRouter,
    Route,
    Routes,
} from "react-router-dom";

import Shop from "./Shop"
import LabHub from "./LabHub";

function App () {
    return <BrowserRouter>
        <Routes>
            <Route path="/urfu-oop/">
                <Route index element={<LabHub />} />
                <Route path="shop/*" element={<Shop />} />
            </Route>
        </Routes>
    </BrowserRouter>
}

export default App