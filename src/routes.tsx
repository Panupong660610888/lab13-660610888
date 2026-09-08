import { createBrowserRouter } from "react-router";
import HomePage from "./pages/HomePage";
import TodolistPage from "./pages/TodolistPage";
import MainLayout from "./layout/MainLayout";
import ErrorPage from "./pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      // localhost:5173/
      { index: true, element: <HomePage /> },
    ],
  },
  {
    path: "/my",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      // localhost:5173/my/todolistpage
      { path: "todolistpage", element: <TodolistPage /> },
    ],
  },
]);
