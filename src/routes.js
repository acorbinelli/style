import Acasa from "./pages/Acasa/Acasa"
import Accesorii from "./pages/Accesorii/Accesorii"
import Contact from "./pages/Contact/Contact"
import Cumparaturi from "./pages/Cumparaturi/Cumparaturi"

export const appRoutes = [
  {
    name: "Acasa",
    element: <Acasa />,
    path: "/Acasa",
  },
  {
    name: "Haine",
    path: "/Haine",
  },
  {
    name: "Accesorii",
    element: <Accesorii />,
    path: "/Accesorii",
  },
  {
    name: "Contact",
    element: <Contact />,
    path: "/Contact",
  },
  {
    name: "Cumparaturi",
    path: "/Cumparaturi",
  },
]
