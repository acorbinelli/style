import {
  createContext,
  useContext,
  useState,
  useMemo,
  useEffect,
  useCallback,
} from "react"

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
})

export const ShoppingProvider = ({ children }) => {
  const [itemsQuantity, setItemsQuantity] = useState(0)
  const [items, setItems] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)

  const onPurchase = useCallback(() => {
    setItems([])
    setTotalPrice(0)
    setItemsQuantity(0)
  }, [])

  useEffect(() => {
    let calculatedQuantity = 0
    let calculatedPrice = 0

    if (items.length) {
      items.forEach((item) => {
        calculatedQuantity += item.quantity
        for (let i = 0; i < calculatedQuantity; i++) {
          calculatedPrice += parseInt(item.price)
        }
      })
    }

    setItemsQuantity(parseInt(calculatedQuantity))
    setTotalPrice(parseInt(calculatedPrice))
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
