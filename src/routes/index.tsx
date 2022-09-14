import Annoucements from "../pages/Annoucements"
import Home from "../pages/Home"
import Journal from "../pages/Journal"
import Users from "../pages/Users"

export const routes = [
  {
    id: 1,
    component: <Home />,
    path: "/home",
  },
  {
    id: 2,
    component: <Annoucements />,
    path: "/news",
  },
  {
    id: 3,
    component: <Journal />,
    path: "/qode-journal",
  },
  {
    id: 4,
    component: <Users />,
    path: "/ubuntos",
  },
]
