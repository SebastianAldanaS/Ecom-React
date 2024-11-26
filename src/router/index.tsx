import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layouts/RootLayouts";
import { HomePage, LogosPage, NosotrosPage } from "../pages";

export const router = createBrowserRouter([
    { 
        path: '/',
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'Logos',
                element: <LogosPage />
            },
            {
                path: 'Nosotros',
                element: <NosotrosPage />
            },
            
                ]
    }
]);