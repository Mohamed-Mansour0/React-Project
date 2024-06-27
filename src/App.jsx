import React from "react";
import Parent from "./Compoents/Parent/Parent" ;
import Layout from "./Compoents/Layout/Layout";
import About from "./Compoents/About/About";
import Content from "./Compoents/Content/Content";
import Gallery from "./Compoents/Gallery/Gallery";
import Home from "./Compoents/Home/Home";
import Settings from "./Compoents/Settings/Settings";
import UserProfile from "./Compoents/UserProfile/UserProfile";
import UserApp from "./Compoents/UserApp/UserApp";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NotFound from "./Compoents/NotFound/NotFound";

export default function App() {


var routes = createBrowserRouter([
  {
  path:""
  ,element:<Layout/>
  ,children:[
    {index:true,element:<Home/> },
    {path:"Parent",element:<Parent/> },
    {path:"About",element:<About/> },
    {path:"Content",element:<Content/> },
    {path:"Gallery",element:<Gallery/> },
    {path:"Settings",element:<Settings/> ,children:[
      {path:"profile",element:<UserProfile/>},
      {path:"app",element:<UserApp/>},

    ]},

{path :"*" ,element:<NotFound/>},

  ],
},
]);

  return (
  <>
  {/* <Parent/> */}
<RouterProvider router={routes}></RouterProvider>
  </>
  );
}
