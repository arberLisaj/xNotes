import { Navigate, createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import ErrorPage from "./pages/ErrorPage";
import NewTaskPage from "./pages/tasks/NewTaskPage";
import TaskListPage from "./pages/tasks/TaskListPage";
import ExpenseListPage from "./pages/expenses/ExpenseListPage";

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
        path: "tasks",
        children: [
          { index: true, element: <TaskListPage /> },
          { path: "new", element: <NewTaskPage /> },
        ],
      },
      {
        path: "expenses",
        element: <ExpenseListPage />,
      },
    ],
  },
]);

export default router;
