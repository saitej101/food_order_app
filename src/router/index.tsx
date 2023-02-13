import {
  createBrowserRouter,
} from "react-router-dom";

import Home from '../views/Home/Home';
import OrderOnline from '../views/OrderOnline/OrderOnline';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/order-online",
    element: <OrderOnline />,
  }
]);

export default router;