// src/pages/Products.jsx
import { useEffect, useState } from "react";
import item1 from "../assets/item1.jpg";
import item2 from "../assets/item2.jpeg";
import item3 from "../assets/item3.jpeg";
import item4 from "../assets/item4.jpeg";
import item5 from "../assets/item5 .jpeg";
import item6 from "../assets/item6.jpeg";
import item7 from "../assets/item7.jpeg";
import item8 from "../assets/item8.jpeg";
import item9 from "../assets/item9.jpeg";

const imageMap = {
  "item1.jpg": item1,
  "item2.jpeg": item2,
  "item3.jpeg": item3,
  "item4.jpeg": item4,
  "item5 .jpeg": item5,
  "item6.jpeg": item6,
  "item7.jpeg": item7,
  "item8.jpeg": item8,
  "item9.jpeg": item9
};

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Fetching products from backend...');
        const res = await fetch("http://localhost:3001/products");
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        console.log('Products received:', data);
        setProducts(data);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="px-4 mt-4">
        <h1 className="text-2xl font-bold mb-4">Products</h1>
        <p>Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="px-4 mt-4">
        <h1 className="text-2xl font-bold mb-4">Products</h1>
        <p className="text-red-500">Error: {error}</p>
        <p className="text-sm text-gray-600 mt-2">Make sure backend is running on port 3001</p>
      </div>
    );
  }

  return (
    <div className="px-4 mt-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <p className="mb-4">Found {products.length} products</p>

      {products.length === 0 ? (
        <p>No products found</p>
      ) : (
        <div className="product-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {products.map((p) => {
            const imgSrc = imageMap[p.image];
            return (
              <div key={p.id} className="product bg-white rounded shadow p-3">
                {imgSrc && (
                  <img
                    src={imgSrc}
                    alt={p.name}
                    className="w-full h-64 object-cover rounded"
                  />
                )}
                <h4 className="mt-2 text-sm font-medium">{p.name}</h4>
                <p className="mt-1 font-semibold">₹{p.price}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Products;
