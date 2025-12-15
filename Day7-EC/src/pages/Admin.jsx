import { useState } from "react";

function Admin() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:3001/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        price: Number(price),
        image, // e.g. "item3.jpeg"
      }),
    });

    setName("");
    setPrice("");
    setImage("");
  };

  return (
    <div className="px-4 mt-4">
      <h1 className="text-2xl font-bold mb-4">Admin - Add Product</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 max-w-sm">
        <input
          className="border px-2 py-1"
          placeholder="Product name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="border px-2 py-1"
          placeholder="Price"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          className="border px-2 py-1"
          placeholder="Image file name (item3.jpeg)"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button className="bg-gray-700 text-white px-3 py-1 rounded">
          Add Product
        </button>
      </form>
    </div>
  );
}

export default Admin;
