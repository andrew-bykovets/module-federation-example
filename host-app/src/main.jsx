import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./routes/Root";
import CounterRemouteApp from './routes/CounterRemouteApp';
import TodoRemoteApp from "./routes/TodoRemoteApp";
import ErrorPage from './404';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'todo',
    element: <TodoRemoteApp/>
  },
  {
    path: 'counter',
    element: <CounterRemouteApp/>
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);