import Women from "../assets/item6.jpeg";
import Men from "../assets/item8.jpeg";
import { useState, useEffect } from "react";

function Cart() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await fetch("http://localhost:3001/cart");
        const data = await res.json();
        if (data.length === 0) {
          setItems([
            { id: 1, name: "T-Shirt", price: 500, qty: 1, img: Women },
            { id: 2, name: "Sneakers", price: 1200, qty: 1, img: Men },
          ]);
        } else {
          setItems(data);
        }
      } catch {
        setItems([
          { id: 1, name: "T-Shirt", price: 500, qty: 1, img: Women },
          { id: 2, name: "Sneakers", price: 1200, qty: 1, img: Men },
        ]);
      }
    };
    fetchCart();
  }, []);

  const updateCartAPI = async (updatedItems) => {
    try {
      await fetch("http://localhost:3001/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedItems)
      });
    } catch (err) {
      console.error("Error updating cart:", err);
    }
  };

   const discountRate = 0.1; 

  const increaseQty = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    );
    setItems(updatedItems);
    updateCartAPI(updatedItems);
  };

  const decreaseQty = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id && item.qty > 1
        ? { ...item, qty: item.qty - 1 }
        : item
    );
    setItems(updatedItems);
    updateCartAPI(updatedItems);
  };

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const discountAmount = subtotal * discountRate;
  const total = subtotal - discountAmount;

  return (
    <div className="flex gap-6 mt-6 px-4">

      <div className="flex flex-col gap-4 w-2/3">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 bg-gray-700 text-white p-4 rounded-md"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-20 h-20 object-cover rounded"
            />

            <div className="flex-1">
              <p className="font-medium">{item.name}</p>
              <p className="text-sm text-gray-300">₹{item.price}</p>
            </div>

       
            <div className="flex items-center gap-2">
              <button
                onClick={() => decreaseQty(item.id)}
                className="px-2 py-1 bg-gray-600 rounded hover:bg-gray-500"
              >
                −
              </button>

              <input
                type="text"
                value={item.qty}
                readOnly
                className="w-10 text-center text-black rounded"
              />

              <button
                onClick={() => increaseQty(item.id)}
                className="px-2 py-1 bg-gray-600 rounded hover:bg-gray-500"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="w-1/3 bg-gray-800 text-white p-4 rounded-md h-fit">
        <h3 className="font-semibold mb-3">Order Summary</h3>

        <div className="flex justify-between text-sm mb-2">
          <span>Subtotal</span>
          <span>₹{subtotal}</span>
        </div>

        <div className="flex justify-between text-sm mb-2">
          <span>Discount (10%)</span>
          <span>- ₹{discountAmount}</span>
        </div>

        <hr className="border-gray-600 my-2" />

        <div className="flex justify-between font-semibold">
          <span>Total</span>
          <span>₹{total}</span>
        </div>
      </div>

    </div>
  );
}

export default Cart;