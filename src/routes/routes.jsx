import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import AddCoffe from "../pages/AddCoffe";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
          path:"/",
          element:<Home></Home>,
        },
        {
          path:"/add-coffe",
          element:<AddCoffe></AddCoffe>,
        },
      ]
    },
  ]);



  export default router;