import { useEffect, useState } from "react";
import axios from "axios";

export default function TableData() {
  const [products, setProducts] = useState([]);

  // Function to fetch data from the backend
  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Function to delete a product
  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/products/${id}`);
      // Remove the deleted product from the state
      console.log(id)
      setProducts(products.filter((product) => product._id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  useEffect(() => {
    fetchProducts(); // Initial fetch
    const interval = setInterval(fetchProducts, 5000); // Poll every 5 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div>
      <div className="max-w-full mx-auto p-4 bg-white shadow-lg rounded-lg">
        <table className="table-auto w-full border-collapse border border-teal-400">
          <thead>
            <tr className="bg-teal-600 text-white">
              <th className="px-4 py-2">Sl</th>
              <th className="px-4 py-2">Product Code</th>
              <th className="px-4 py-2">Product Name</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Purchase Price</th>
              <th className="px-4 py-2">Sales Price</th>
              <th className="px-4 py-2">Wholesale Price</th>
              <th className="px-4 py-2">Unit</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product._id} className="text-center">
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">{product.productCode}</td>
                <td className="border px-4 py-2">{product.productName}</td>
                <td className="border px-4 py-2">{product.productCategory}</td>
                <td className="border px-4 py-2">{product.buyRate}</td>
                <td className="border px-4 py-2">{product.saleRate}</td>
                <td className="border px-4 py-2">{product.wholeSales}</td>
                <td className="border px-4 py-2">Pcs</td>
                <td className="border px-4 py-2">
                  <button className="bg-blue-500 text-white px-2 py-1 rounded">Edit</button>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded ml-2"
                    onClick={() => deleteProduct(product._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
