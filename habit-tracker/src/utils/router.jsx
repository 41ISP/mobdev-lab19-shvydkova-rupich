import { createBrowserRouter } from "react-router-dom"
import Main from "../pages/Main/Main"
import History from "../pages/History/History"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />
    },
    {
        path: "/history/:id",
        element: <History />
    }
])