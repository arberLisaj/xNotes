import { Navigate, createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Expenses from "./pages/Expenses";
import ErrorPage from "./pages/ErrorPage";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        errorElement: <ErrorPage />,
        index: true,
        element: <Navigate to="expenses" replace />,
      },
      {
        path: "expenses",
        element: <Expenses />,
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
