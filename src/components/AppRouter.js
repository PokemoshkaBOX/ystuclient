import React from 'react';
import {Route, Routes, Navigate} from 'react-router-dom'
import {authRoutes} from "../routes";
import {HOME_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
const AppRouter = observer(() => {
    return (
        <Routes>
            {authRoutes.map(({path, Component})=>
                <Route key = {path} path={path}  Component={Component} exact/>
            )}
            { <Route path="*" element={ <Navigate to={HOME_ROUTE} replace={true} /> } /> }
        </Routes>
    );
});

export default AppRouter;