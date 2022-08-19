import { PathRouteProps , LayoutRouteProps , IndexRouteProps } from "react-router";

export interface PrivateRoutesService{
    isPrivate?: boolean;
    path: string;
    element: React.ReactElement
    rest? :  PathRouteProps | LayoutRouteProps | IndexRouteProps | React.ReactElement | null | string
}