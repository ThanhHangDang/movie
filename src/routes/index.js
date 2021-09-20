import React from 'react';
import HomeTemplate from '../cointainer/HomeTemplate';

const routesHome = [
    {
        exact: true,
        path: "/",
        component: HomeTemplate,
    }
]

export function RoutesHome() {
    return routesHome.map((route, index) => (
        <HomeTemplate 
            key={index}
            exact={route.exact}
            path={route.path}
            Component={route.component}
        />
    ))
}

export {routesHome};

