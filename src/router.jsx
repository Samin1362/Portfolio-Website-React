import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from "./components/PrivateRoute";
import DashboardLayout from "./layouts/DashboardLayout";
import DashboardHome from "./pages/Dashboard/DashboardHome";
import ProjectList from "./pages/Dashboard/ProjectList";
import ProjectForm from "./pages/Dashboard/ProjectForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
      {
        path: "projects",
        element: <ProjectList />,
      },
      {
        path: "projects/add",
        element: <ProjectForm />,
      },
      {
        path: "projects/edit/:id",
        element: <ProjectForm />,
      },
    ],
  },
]);

export default router;
