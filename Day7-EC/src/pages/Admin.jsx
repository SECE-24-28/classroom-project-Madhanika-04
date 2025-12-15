function Admin() {
  return (
    <div className="px-4 mt-4">
      <h1 className="text-2xl font-bold mb-4">Admin - Add Product</h1>
      <form className="flex flex-col gap-2 max-w-sm">
        <input className="border px-2 py-1" placeholder="Product name" />
        <input className="border px-2 py-1" placeholder="Price" type="number" />
        <button className="bg-gray-700 text-white px-3 py-1 rounded">
          Add Product
        </button>
      </form>
    </div>
  );
}

export default Admin;
