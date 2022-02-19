import {
  createContext,
  useContext,
  useState,
  useMemo,
  useEffect,
  useCallback,
} from "react"
import { useLocation } from "react-router-dom"
import headerConfig from "../storeConfig/headerConfig"

const ShoppingContext = createContext({
  itemsQuantity: 0,
  items: [{}],
  totalPrice: 0,
  setItems: () => [{}],
  onAddItem: (item) => {},
  onRemoveItem: (item) => {},
  onIncrementItem: (item) => {},
  openSnackbar: false,
  onPurchase: () => {},
  toggleSnackbar: () => {},
  selectedCategory: "",
  setSelectedCategory: () => {},
})

export const ShoppingProvider = ({ children }) => {
  const location = useLocation()
  const path = location.pathname
  const availablePaths = headerConfig.navItems.map((item) => item.path)
  const [itemsQuantity, setItemsQuantity] = useState(0)
  const [items, setItems] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState("")

  const onPurchase = useCallback((selectedItems) => {
    console.log(
      "Sending order to backend - you can INTEGRATE API CALL IN ShoppingContext.js",
      "Purchase List:",
      selectedItems
    )
    setItems([])
    setTotalPrice(0)
    setItemsQuantity(0)
  }, [])

  useEffect(() => {
    const foundPath = availablePaths.find((avPath) => avPath === path)
    if (path !== "/Home" && path !== "/Contact" && foundPath) {
      const navItem = headerConfig.navItems.find((item) => item.path === path)
      if (navItem && navItem?.subMenu) {
        setSelectedCategory(navItem.subMenu[0])
      } else {
        setSelectedCategory(navItem.tag)
      }
    }

    //eslint-disable-next-line
  }, [])

  useEffect(() => {
    let calculatedQuantity = 0
    let calculatedPrice = 0

    if (items.length) {
      items.forEach((item) => {
        calculatedQuantity += item.quantity
        calculatedPrice += parseInt(item.price) * parseInt(item.quantity)
      })
    }

    setItemsQuantity(parseInt(calculatedQuantity))
    setTotalPrice(calculatedPrice)
  }, [items])

  const onAddItem = useCallback((item) => {
    setItems((prev) => {
      const foundItem = prev.find((prevItem) => prevItem.id === item.id)

      if (foundItem) {
        let newList = prev.map((prevItem) =>
          prevItem.id !== foundItem.id
            ? prevItem
            : { ...foundItem, quantity: foundItem.quantity + prevItem.quantity }
        )
        return newList
      }

      return [...prev, item]
    })
  }, [])

  const onRemoveItem = useCallback((item) => {
    setItems((prev) => {
      let newList = []

      prev.forEach((prevItem) => {
        if (prevItem.id !== item.id) {
          newList.push(prevItem)
        } else if (prevItem.quantity > 1) {
          newList.push({ ...prevItem, quantity: prevItem.quantity - 1 })
        }
        return
      })

      return newList
    })
  }, [])

  const onIncrementItem = useCallback((item) => {
    setItems((prev) => {
      const newList = prev.map((prevItem) => {
        if (prevItem.id !== item.id) {
          return prevItem
        } else {
          return { ...prevItem, quantity: prevItem.quantity + 1 }
        }
      })

      return newList
    })
  }, [])

  const value = useMemo(() => {
    return {
      itemsQuantity,
      items,
      setItems,
      totalPrice,
      onAddItem,
      onRemoveItem,
      onIncrementItem,
      onPurchase,
      selectedCategory,
      setSelectedCategory,
    }
  }, [
    itemsQuantity,
    items,
    setItems,
    onAddItem,
    onRemoveItem,
    onIncrementItem,
    totalPrice,
    onPurchase,
    selectedCategory,
    setSelectedCategory,
  ])

  return (
    <ShoppingContext.Provider value={value}>
      {children}
    </ShoppingContext.Provider>
  )
}

export const useShoppingContext = () => {
  return useContext(ShoppingContext)
}
