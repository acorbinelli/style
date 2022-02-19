// SAVE PICTURES IN THE /imagesMerchandise folder
// import them here and configure object { -object- }.
// Careful ! the import commands bellow are case sensitive !
// you can create more categories if you wish.
// Try to keep them organized as you see bellow if you wish to add new items

import { nanoid, customAlphabet } from "nanoid"

//accessories
import Catalunya from "../imagesMerchandise/accesorii/Catalunya.jpg"
import Cimao from "../imagesMerchandise/accesorii/Cimao.jpg"
import Moonstar from "../imagesMerchandise/accesorii/Moonstar.jpg"
import Moonstone from "../imagesMerchandise/accesorii/Moonstone.jpg"
import Reina from "../imagesMerchandise/accesorii/Reina.jpg"
import Rhinestone from "../imagesMerchandise/accesorii/Rhinestone.jpg"
import Stardrop from "../imagesMerchandise/accesorii/Stardrop.jpg"
import Trisica from "../imagesMerchandise/accesorii/Trisica.jpg"
//category 1
import Malnia from "../imagesMerchandise/fuste/Malnia.jpg"
import Meadow from "../imagesMerchandise/fuste/Meadow.jpg"
import Niji from "../imagesMerchandise/fuste/Niji.jpg"
import Sisphy from "../imagesMerchandise/fuste/Sisphy.jpg"
import Sosana from "../imagesMerchandise/fuste/Sosana.jpg"
import Yoshimi from "../imagesMerchandise/fuste/Yoshimi.jpg"
//category 2
import Akanya from "../imagesMerchandise/rochii/Akanya.jpg"
import DreamDrop from "../imagesMerchandise/rochii/DreamDrop.jpg"
import Fantoma from "../imagesMerchandise/rochii/Fantoma.jpg"
import Lorla from "../imagesMerchandise/rochii/Lorla.jpg"
import Sansweet from "../imagesMerchandise/rochii/Sansweet.jpg"
import Sugarcoat from "../imagesMerchandise/rochii/Sugarcoat.jpg"
import Ussoro from "../imagesMerchandise/rochii/Ussoro.jpg"
//category 3
import Dragon from "../imagesMerchandise/tricouri/Dragon.jpg"
import Essere from "../imagesMerchandise/tricouri/Essere.jpg"
import Hana from "../imagesMerchandise/tricouri/Hana.jpg"
import Lysij from "../imagesMerchandise/tricouri/Lysij.jpg"
import Rosec from "../imagesMerchandise/tricouri/Rosec.jpg"
import Ukyio from "../imagesMerchandise/tricouri/Ukyio.jpg"
//category 4
import Belle from "../imagesMerchandise/pantaloni/Belle.jpg"
import Giuliana from "../imagesMerchandise/pantaloni/Giuliana.jpg"
import MalniaPants from "../imagesMerchandise/pantaloni/MalniaPants.jpg"
import Sibpal from "../imagesMerchandise/pantaloni/Sibpal.jpg"
import Sienne from "../imagesMerchandise/pantaloni/Sienne.jpg"
import Tyamizu from "../imagesMerchandise/pantaloni/Tyamizu.jpg"
//category 5
import Cuflor from "../imagesMerchandise/bluze/Cuflor.jpg"
import Grenar from "../imagesMerchandise/bluze/Grenar.jpg"
import Gwendolyn from "../imagesMerchandise/bluze/Gwendolyn.jpg"
import Jowi from "../imagesMerchandise/bluze/Jowi.jpg"
import Lucuna from "../imagesMerchandise/bluze/Lucuna.jpg"
import Zgren from "../imagesMerchandise/bluze/Zgren.jpg"

const PRICE_DIGITS = 3

const merchandise = [
  //accessories
  {
    id: 32,
    //YOU CAN REPLACE itemCode with whatever string value you wish.
    //nanoid is just a random generator
    itemCode: nanoid(5).toUpperCase(),
    name: "Catalunya",
    category: "Accesorii",
    type: "Cercei",
    //YOU CAN REPLACE price with whatever string value you wish.
    //customAlphabet is just a random generator
    price: parseInt(customAlphabet("123456789000", PRICE_DIGITS)()).toString(),
    availableSizes: [],
    picture: Catalunya,
  },
  {
    id: 33,
    itemCode: nanoid(5).toUpperCase(),
    name: "Cimao",
    category: "Accesorii",
    type: "Curea",
    price: parseInt(customAlphabet("123456789000", PRICE_DIGITS)()).toString(),
    availableSizes: [],
    picture: Cimao,
  },
  {
    id: 34,
    itemCode: nanoid(5).toUpperCase(),
    name: "Moonstar",
    category: "Accesorii",
    type: "Cercei",
    price: parseInt(customAlphabet("123456789000", PRICE_DIGITS)()).toString(),
    availableSizes: [],
    picture: Moonstar,
  },
  {
    id: 35,
    itemCode: nanoid(5).toUpperCase(),
    name: "Moonstone",
    category: "Accesorii",
    type: "Cercei",
    price: parseInt(customAlphabet("123456789000", PRICE_DIGITS)()).toString(),
    availableSizes: [],
    picture: Moonstone,
  },
  {
    id: 36,
    itemCode: nanoid(5).toUpperCase(),
    name: "Reina",
    category: "Accesorii",
    type: "Cercei",
    price: parseInt(customAlphabet("123456789000", PRICE_DIGITS)()).toString(),
    availableSizes: [],
    picture: Reina,
  },
  {
    id: 37,
    itemCode: nanoid(5).toUpperCase(),
    name: "Rhinestone",
    category: "Accesorii",
    type: "Inel",
    price: parseInt(customAlphabet("123456789000", PRICE_DIGITS)()).toString(),
    availableSizes: [],
    picture: Rhinestone,
  },
  {
    id: 38,
    itemCode: nanoid(5).toUpperCase(),
    name: "Stardrop",
    category: "Accesorii",
    type: "Cercei",
    price: parseInt(customAlphabet("123456789000", PRICE_DIGITS)()).toString(),
    availableSizes: [],
    picture: Stardrop,
  },
  {
    id: 39,
    itemCode: nanoid(5).toUpperCase(),
    name: "Trisica",
    category: "Accesorii",
    type: "Corset",
    price: parseInt(customAlphabet("123456789000", PRICE_DIGITS)()).toString(),
    availableSizes: ["S", "M", "L", "XL"],
    picture: Trisica,
  },
  //category 1
  {
    id: 7,
    itemCode: nanoid(5).toUpperCase(),
    name: "Malnia",
    type: "Fusta",
    category: "Fuste",
    price: parseInt(customAlphabet("123456789000", PRICE_DIGITS)()).toString(),
    availableSizes: ["S", "M", "L", "XL"],
    picture: Malnia,
  },
  {
    id: 8,
    itemCode: nanoid(5).toUpperCase(),
    name: "Meadow",
    type: "Fusta",
    category: "Fuste",
    price: parseInt(customAlphabet("123456789000", PRICE_DIGITS)()).toString(),
    availableSizes: ["S", "M", "L", "XL"],
    picture: Meadow,
  },
  {
    id: 9,
    itemCode: nanoid(5).toUpperCase(),
    name: "Niji",
    type: "Fusta",
    category: "Fuste",
    price: parseInt(customAlphabet("123456789000", PRICE_DIGITS)()).toString(),
    availableSizes: ["S", "M", "L", "XL"],
    picture: Niji,
  },
  {
    id: 10,
    itemCode: nanoid(5).toUpperCase(),
    name: "Sisphy",
    type: "Fusta",
    category: "Fuste",
    price: parseInt(customAlphabet("123456789000", PRICE_DIGITS)()).toString(),
    availableSizes: ["S", "M", "L", "XL"],
    picture: Sisphy,
  },
  {
    id: 11,
    itemCode: nanoid(5).toUpperCase(),
    name: "Sosana",
    type: "Fusta",
    category: "Fuste",
    price: parseInt(customAlphabet("123456789000", PRICE_DIGITS)()).toString(),
    availableSizes: ["S", "M", "L", "XL"],
    picture: Sosana,
  },
  {
    id: 12,
    itemCode: nanoid(5).toUpperCase(),
    name: "Yoshimi",
    type: "Fusta",
    category: "Fuste",
    price: parseInt(customAlphabet("123456789000", PRICE_DIGITS)()).toString(),
    availableSizes: ["S", "M", "L", "XL"],
    picture: Yoshimi,
  },
  //category 2
  {
    id: 19,
    itemCode: nanoid(5).toUpperCase(),
    name: "Akanya",
    type: "Rochie",
    category: "Rochii",
    price: parseInt(customAlphabet("123456789000", PRICE_DIGITS)()).toString(),
    availableSizes: ["S", "M", "L", "XL"],
    picture: Akanya,
  },
  {
    id: 20,
    itemCode: nanoid(5).toUpperCase(),
    name: "DreamDrop",
    type: "Rochie",
    category: "Rochii",
    price: parseInt(customAlphabet("123456789000", PRICE_DIGITS)()).toString(),
    availableSizes: ["S", "M", "L", "XL"],
    picture: DreamDrop,
  },
  {
    id: 21,
    itemCode: nanoid(5).toUpperCase(),
    name: "Fantoma",
    type: "Rochie",
    category: "Rochii",
    price: parseInt(customAlphabet("123456789000", PRICE_DIGITS)()).toString(),
    availableSizes: ["S", "M", "L", "XL"],
    picture: Fantoma,
  },
  {
    id: 22,
    itemCode: nanoid(5).toUpperCase(),
    name: "Lorla",
    type: "Rochie",
    category: "Rochii",
    price: parseInt(customAlphabet("123456789000", PRICE_DIGITS)()).toString(),
    availableSizes: ["S", "M", "L", "XL"],
    picture: Lorla,
  },
  {
    id: 23,
    itemCode: nanoid(5).toUpperCase(),
    name: "Sansweet",
    type: "Rochie",
    category: "Rochii",
    price: parseInt(customAlphabet("123456789000", PRICE_DIGITS)()).toString(),
    availableSizes: ["S", "M", "L", "XL"],
    picture: Sansweet,
  },
  {
    id: 24,
    itemCode: nanoid(5).toUpperCase(),
    name: "Sugarcoat",
    type: "Rochie",
    category: "Rochii",
    price: parseInt(customAlphabet("123456789000", PRICE_DIGITS)()).toString(),
    availableSizes: ["S", "M", "L", "XL"],
    picture: Sugarcoat,
  },
  {
    id: 25,
    itemCode: nanoid(5).toUpperCase(),
    name: "Ussoro",
    type: "Rochie",
    category: "Rochii",
    price: parseInt(customAlphabet("123456789000", PRICE_DIGITS)()).toString(),
    availableSizes: ["S", "M", "L", "XL"],
    picture: Ussoro,
  },
  //category 3
  {
    id: 26,
    itemCode: nanoid(5).toUpperCase(),
    name: "Dragon",
    type: "Tricou",
    category: "Tricouri",
    price: parseInt(customAlphabet("123456789000", PRICE_DIGITS)()).toString(),
    availableSizes: ["S", "M", "L", "XL"],
    picture: Dragon,
  },
  {
    id: 27,
    itemCode: nanoid(5).toUpperCase(),
    name: "Essere",
    type: "Tricou",
    category: "Tricouri",
    price: parseInt(customAlphabet("123456789000", PRICE_DIGITS)()).toString(),
    availableSizes: ["S", "M", "L", "XL"],
    picture: Essere,
  },
  {
    id: 28,
    itemCode: nanoid(5).toUpperCase(),
    name: "Hana",
    type: "Tricou",
    category: "Tricouri",
    price: parseInt(customAlphabet("123456789000", PRICE_DIGITS)()).toString(),
    availableSizes: ["S", "M", "L", "XL"],
    picture: Hana,
  },
  {
    id: 29,
    itemCode: nanoid(5).toUpperCase(),
    name: "Lysij",
    type: "Tricou",
    category: "Tricouri",
    price: parseInt(customAlphabet("123456789000", PRICE_DIGITS)()).toString(),
    availableSizes: ["S", "M", "L", "XL"],
    picture: Lysij,
  },
  {
    id: 30,
    itemCode: nanoid(5).toUpperCase(),
    name: "Rosec",
    type: "Tricou",
    category: "Tricouri",
    price: parseInt(customAlphabet("123456789000", PRICE_DIGITS)()).toString(),
    availableSizes: ["S", "M", "L", "XL"],
    picture: Rosec,
  },
  {
    id: 31,
    itemCode: nanoid(5).toUpperCase(),
    name: "Ukyio",
    type: "Tricou",
    category: "Tricouri",
    price: parseInt(customAlphabet("123456789000", PRICE_DIGITS)()).toString(),
    availableSizes: ["S", "M", "L", "XL"],
    picture: Ukyio,
  },
  //category 4
  {
    id: 13,
    itemCode: nanoid(5).toUpperCase(),
    name: "Belle",
    type: "Pantaloni",
    category: "Pantaloni",
    price: parseInt(customAlphabet("123456789000", PRICE_DIGITS)()).toString(),
    availableSizes: ["S", "M", "L", "XL"],
    picture: Belle,
  },
  {
    id: 14,
    itemCode: nanoid(5).toUpperCase(),
    name: "Giuliana",
    type: "Pantaloni",
    category: "Pantaloni",
    price: parseInt(customAlphabet("123456789000", PRICE_DIGITS)()).toString(),
    availableSizes: ["S", "M", "L", "XL"],
    picture: Giuliana,
  },
  {
    id: 15,
    itemCode: nanoid(5).toUpperCase(),
    name: "Malnia",
    type: "Pantaloni",
    category: "Pantaloni",
    price: parseInt(customAlphabet("123456789000", PRICE_DIGITS)()).toString(),
    availableSizes: ["S", "M", "L", "XL"],
    picture: MalniaPants,
  },
  {
    id: 16,
    itemCode: nanoid(5).toUpperCase(),
    name: "Sibpal",
    type: "Pantaloni",
    category: "Pantaloni",
    price: parseInt(customAlphabet("123456789000", PRICE_DIGITS)()).toString(),
    availableSizes: ["S", "M", "L", "XL"],
    picture: Sibpal,
  },
  {
    id: 17,
    itemCode: nanoid(5).toUpperCase(),
    name: "Sienne",
    type: "Pantaloni",
    category: "Pantaloni",
    price: parseInt(customAlphabet("123456789000", PRICE_DIGITS)()).toString(),
    availableSizes: ["S", "M", "L", "XL"],
    picture: Sienne,
  },
  {
    id: 18,
    itemCode: nanoid(5).toUpperCase(),
    name: "Tyamizu",
    type: "Pantaloni",
    category: "Pantaloni",
    price: parseInt(customAlphabet("123456789000", PRICE_DIGITS)()).toString(),
    availableSizes: ["S", "M", "L", "XL"],
    picture: Tyamizu,
  },
  //category 5
  {
    id: 10,
    itemCode: nanoid(5).toUpperCase(),
    name: "Cuflor",
    type: "Bluza",
    category: "Bluze",
    price: parseInt(customAlphabet("123456789000", PRICE_DIGITS)()).toString(),
    availableSizes: ["S", "M", "L", "XL"],
    picture: Cuflor,
  },
  {
    id: 2,
    itemCode: nanoid(5).toUpperCase(),
    name: "Grenar",
    type: "Bluza",
    category: "Bluze",
    price: parseInt(customAlphabet("123456789000", PRICE_DIGITS)()).toString(),
    availableSizes: ["S", "M", "L", "XL"],
    picture: Grenar,
  },
  {
    id: 3,
    itemCode: nanoid(5).toUpperCase(),
    name: "Gwendolyn",
    type: "Bluza",
    category: "Bluze",
    price: parseInt(customAlphabet("123456789000", PRICE_DIGITS)()).toString(),
    availableSizes: ["S", "M", "L", "XL"],
    picture: Gwendolyn,
  },
  {
    id: 4,
    itemCode: nanoid(5).toUpperCase(),
    name: "Jowi",
    type: "Bluza",
    category: "Bluze",
    price: parseInt(customAlphabet("123456789000", PRICE_DIGITS)()).toString(),
    availableSizes: ["S", "M", "L", "XL"],
    picture: Jowi,
  },
  {
    id: 5,
    itemCode: nanoid(5).toUpperCase(),
    name: "Lucuna",
    type: "Bluza",
    category: "Bluze",
    price: parseInt(customAlphabet("123456789000", PRICE_DIGITS)()).toString(),
    availableSizes: ["S", "M", "L", "XL"],
    picture: Lucuna,
  },
  {
    id: 6,
    itemCode: nanoid(5).toUpperCase(),
    name: "Zgren",
    type: "Bluza",
    category: "Bluze",
    price: parseInt(customAlphabet("123456789000", PRICE_DIGITS)()).toString(),
    availableSizes: ["S", "M", "L", "XL"],
    picture: Zgren,
  },
]

export default merchandise
