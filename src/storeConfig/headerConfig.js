import logo from "../imagesUI/logo/logo.png"

const LOGO_RESOLUTION = 200

const headerConfig = {
  logo: {
    resolution: {
      width: `${LOGO_RESOLUTION}px`,
    },
    imageFile: logo,
  },
  // mandatory types: homePage, merchandise, contact, shoppingBasket
  navItems: [
    { tag: "Acasa", type: "homePage", path: "/Acasa" },
    {
      tag: "Haine",
      type: "merchandise",
      subMenu: ["Bluze", "Fuste", "Rochii", "Tricouri", "Pantaloni"],
      path: "/Haine",
    },
    {
      tag: "Accesorii",
      type: "merchandise",
      path: "/Accesorii",
    },
    {
      tag: "Contact",
      type: "contactPage",
      path: "/Contact",
    },
    {
      tag: "Basket",
      type: "shoppingBasket",
      path: "",
    },
  ],
}

export default headerConfig
