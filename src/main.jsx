import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root, { loader as rootLoader } from "./routes/root";
import Ticket, { loader as ticketLoader } from "./routes/ticket";
import Latest, { loader as latestLoader } from "./routes/latest";
import Login from "./routes/login";
import NewTicket, { action as newTicketAction } from "./routes/new";

import "./styles.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: rootLoader,
  },
  {
    path: "ticket/:ticketId",
    element: <Ticket />,
    loader: ticketLoader,
  },
  {
    path: "latest",
    element: <Latest />,
    loader: latestLoader,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "new",
    element: <NewTicket />,
    action: newTicketAction,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
