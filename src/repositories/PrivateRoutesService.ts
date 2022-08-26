import React, { ReactFragment } from "react";
import { PathRouteProps , LayoutRouteProps , IndexRouteProps } from "react-router";

export interface PrivateRoutesService{
    path: string;
    element: React.ReactElement
    rest? :  PathRouteProps | LayoutRouteProps | IndexRouteProps | React.ReactElement | null | string
}

export interface IPrivateRoutes {
    PrivateRoute: (params:PrivateRoutesService) => ReactFragment;
}