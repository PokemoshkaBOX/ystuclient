import React from "react";
import {BrowserRouter} from "react-router-dom";
import './App.css'
import SideBarMenu from "./components/SideBarMenu/SideBarMenu";

import AppRouter from "./components/AppRouter";
import {observer} from "mobx-react-lite";

const App = observer(() =>{
    return (
        <BrowserRouter>
            <SideBarMenu/>
            <AppRouter/>
        </BrowserRouter>
    );
})
export default App;
