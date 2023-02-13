import {
  createBrowserRouter,
} from "react-router-dom";

import Home from '../views/Home/Home';
import OrderOnline from '../views/OrderOnline/OrderOnline';
import DineOut from '../views/DineOut/DineOut';
import NightLife from '../views/NightLife/NightLife';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/order-online",
    element: <OrderOnline />,
  },
  {
    path: "/dine-out",
    element: <DineOut/>,
  },
  {
    path: "/night-life",
    element: <NightLife/>,
  }
]);

export default router;