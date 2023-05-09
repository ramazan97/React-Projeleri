import Home from "./views/Home";
import Abaout from "./views/Abaout";
import Profile from "./views/Profile";

export const routes = [
  {
    path: "/",
    exact: true,
    component: Home,
    auth: false,
  },
  {
    path: "/about",
    exact: true,
    component: Abaout,
    auth: false,
  },
  {
    path: "/profile",
    exact: true,
    component: Profile,
    auth: true,
  },
];
