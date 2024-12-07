import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import AddCoffe from "../pages/AddCoffe";
import CoffeeDetails from "../pages/CoffeeDetails";
import CoffeeUpdate from "../pages/CoffeeUpdate";

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
          path:"/coffee/:id",
          element:<CoffeeDetails></CoffeeDetails>,
          loader:({params})=> fetch(`https://espresso-emporium-server-tau.vercel.app/coffee/${params.id}`)
        },
        {
          path:"/coffeeUpdate/:id",
          element:<CoffeeUpdate></CoffeeUpdate>,
          loader:({params})=> fetch(`https://espresso-emporium-server-tau.vercel.app/coffee/${params.id}`)
        },
        {
          path:"/add-coffe",
          element:<AddCoffe></AddCoffe>,
        },
      ]
    },
  ]);



  export default router;