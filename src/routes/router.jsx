import {
  Home,
  Getproduct,
  Product,
  EditProduct,
  DeleteProduct,
  Register,
  Users,
  Manager,
  UseInfiniteLoading,
  TestInfinitLoading
 
} from "../components";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <h3>Error element</h3>,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <h3>error element</h3>,
      },
      {
        path: "/register",
        element: <Register />,
        errorElement: <h3>error element</h3>,
      },
      {
        path: "/addproduct",
        element: <Getproduct />,
        errorElement: <h3>error element</h3>,
      },
      {
        path: "/products/:id",
        element: <Product />,
        errorElement: <h3>error element</h3>,
      },

      {
        path: "/products/edit/:id",
        element: <EditProduct />,
        errorElement: <h3>error element</h3>,
      },
      {
        path: "/products/delete/:id",
        element: <DeleteProduct />,
        errorElement: <h3>error element</h3>,
      },
      {
        path: "/users",
        element: <Users userId={10}/>,
        errorElement: <h3>error element</h3>,
      },
      {
        path: "/manager",
        element: <Manager />,
        errorElement: <h3>error element</h3>,
      },
      {
        path: "/use-infinite",
        element: <UseInfiniteLoading />,
        errorElement: <h3>error element</h3>,
      },
      {
        path: "/test-infinite",
        element: <TestInfinitLoading />,
        errorElement: <h3>error element</h3>,
      },


    ],
  },
]);
