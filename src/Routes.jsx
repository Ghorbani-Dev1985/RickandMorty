import Index from "./Pages/Index/Index";
import Layout from "./Layout/Layout";
import NotFound from "./Pages/404/404";
import SimCharge from "./Pages/SimCharge/SimCharge";
import Orders from "./Pages/Index/Orders/Orders";


let routes = [
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Index />,
      },
    ],
  },
  {
    element: <Layout />,
    children: [
      {
        path: "/orders",
        element: <Orders />,
      },
    ],
  },
   {
    element: <Layout />,
    children: [
      {
        path: "/simChargee",
        element: <SimCharge />,
      },
    ],
  },
  {
    element: <Layout />,
    children: [
      {
        path: "/*",
        element: <NotFound />,
      },
    ],
  },
];

export default routes;
