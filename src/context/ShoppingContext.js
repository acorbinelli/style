import { createContext, useContext, useState, useMemo, useEffect } from "react"

const ShoppingContext = createContext({
  itemsQuantity: 0,
  items: [{}],
  totalPrice: 0,
  setItems: () => {},
})

export const ShoppingProvider = ({ children }) => {
  const [itemsQuantity, setItemsQuantity] = useState(0)
  const [items, setItems] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    let calculatedQuantity = 0
    let calculatedPrice = 0

    items.forEach(({ item }) => {
      calculatedQuantity += item.quantity
      calculatedPrice += item.price
    })

    setItemsQuantity(calculatedQuantity)
    setTotalPrice(calculatedPrice)
  }, [items])

  const value = useMemo(() => {
    return {
      itemsQuantity,
      items,
      setItems,
      totalPrice,
    }
  }, [itemsQuantity, items, setItems, totalPrice])

  return (
    <ShoppingContext.Provider value={value}>
      {children}
    </ShoppingContext.Provider>
  )
}

export const useShoppingContext = () => {
  return useContext(ShoppingContext)
}
