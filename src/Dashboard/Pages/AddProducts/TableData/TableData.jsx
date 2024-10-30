import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

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
      setProducts(products.filter((product) => product._id !== id));
      Swal.fire({
        title: "ডিলেট করতে চান?",
        text: "ডিলেট হয়ে যাবে প্রোডাক্ট ",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Delete!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "ডিলেট সফল হয়েছে ",
            icon: "success"
          });
        }
      });
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
            <tr className="bg-teal-600 text-white text-sm">
              <th className="p-1">ক্রমিক নং </th>
              <th className="p-1">প্রোডাক্ট কোড </th>
              <th className="p-1">প্রোডাক্ট নাম</th>
              <th className="p-1">প্রোডাক্টের শ্রেণী</th>
              <th className="p-1">স্টকের পরিমান </th>
              <th className="p-1">ক্রয় মূল্য </th>
              <th className="p-1">খুচরা বিক্রয় মূল্য</th>
              <th className="p-1">পাইকারি বিক্রয় মূল্য</th>
              <th className="p-1"> প্রক্রিয়া </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product._id} className="text-center">
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">{product.productCode}</td>
                <td className="border px-4 py-2">{product.productName}</td>
                <td className="border px-4 py-2">{product.productCategory}</td>
                <td className="border px-4 py-2">{product.productQty}</td>
                <td className="border px-4 py-2">{product.buyRate}</td>
                <td className="border px-4 py-2">{product.saleRate}</td>
                <td className="border px-4 py-2">{product.wholeSales}</td>
                <td className="border px-4 py-2">
                  <div className="">
                    <Link to={`/update-product/${product._id}`}
                      className="bg-[#006A62] text-white w-[134px] p-1 block rounded mb-2">পরিবর্তন করুন</Link>
                    <button
                      className="bg-red-500 text-white w-[134px] p-1 rounded mt-2"
                      onClick={() => deleteProduct(product._id)}
                    >
                      মুছে ফেলুন
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
