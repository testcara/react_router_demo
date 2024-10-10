import { Navigate } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Users from "./user";
import UserProfile from "./userProfile";
import Search from "./search";

const routes = [
  { path: "/", element: <Navigate to="/" /> },
  { path: "/home", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/search", element: <Search /> },

  {
    path: "/users",
    element: <Users />,
    children: [{ path: "profile/:userId", element: <UserProfile /> }],
  },
  // 你可以继续添加更多的路由配置
];

export default routes;
