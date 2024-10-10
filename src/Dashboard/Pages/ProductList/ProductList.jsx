import axios from "axios";
import { useState, useEffect } from "react";

const ProductsList = () => {
    const [categories, setCategories] = useState([]); // To hold distinct categories
    const [selectedCategory, setSelectedCategory] = useState(""); // Selected category
    const [products, setProducts] = useState([]); // To hold products based on the category

    // Fetch categories from the backend
    const fetchCategories = async () => {
        try {
            const response = await axios.get("http://localhost:5000/products-report"); // Fetch all products
            const allProducts = response.data;

            // Extract distinct categories from the products
            const distinctCategories = [
                ...new Set(allProducts.map(product => product.productCategory))
            ];

            setCategories(distinctCategories);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };

    // Fetch products based on the selected category or all products if no category is selected
    const fetchProducts = async (category) => {
        try {
            const response = await axios.get("http://localhost:5000/products-report", {
                params: { category } // If category is empty, it'll fetch all products
            });
            setProducts(response.data); // Set the products state
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    // Fetch categories when component mounts
    useEffect(() => {
        fetchCategories();
    }, []);

    // Fetch products whenever the selected category changes
    useEffect(() => {
        fetchProducts(selectedCategory);
    }, [selectedCategory]);

    return (
        <section>
            <div className="flex space-x-4 items-center p-4 rounded-lg my-5 bg-gray-300 border border-black/90 relative">
                <p className="absolute -top-4 left-5 text-xl font-semibold bg-[#D1D5DB] h-4">
                    Products List
                </p>
                <p className="text-lg">সব প্রোডাক্ট দেখুন </p>

                <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="block w-48 p-2 rounded outline-none border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                >
                    <option value="">-- সব প্রোডাক্ট --</option> {/* Option to show all products */}
                    {categories.map((category, index) => (
                        <option key={index} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>

            {/* Display products in a table */}
            <div>
                <table className="min-w-full bg-white border-collapse">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 bg-[#146C94] text-white border border-gray-300">
                            প্রোডাক্ট কোড 
                            </th>
                            <th className="py-2 px-4 bg-[#146C94] text-white border border-gray-300">
                            প্রোডাক্ট নাম 
                            </th>
                            <th className="py-2 px-4 bg-[#146C94] text-white border border-gray-300">
                            প্রোডাক্টের শ্রেণী 
                            </th>
                            <th className="py-2 px-4 bg-[#146C94] text-white border border-gray-300">
                                ক্রয় দাম
                            </th>
                            <th className="py-2 px-4 bg-[#146C94] text-white border border-gray-300">
                                খুচরা বিক্রয় দাম
                            </th>
                            <th className="py-2 px-4 bg-[#146C94] text-white border border-gray-300">
                                পাইকারি বিক্রয় দাম
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product._id} className="border-b">
                                <td className="py-2 px-4 text-center border border-gray-300">
                                    {product.productCode}
                                </td>
                                <td className="py-2 px-4 text-center border border-gray-300">
                                    {product.productName}
                                </td>
                                <td className="py-2 px-4 text-center border border-gray-300">
                                    {product.productCategory}
                                </td>
                                <td className="py-2 px-4 text-center border border-gray-300">
                                    {product.buyRate}
                                </td>
                                <td className="py-2 px-4 text-center border border-gray-300">
                                    {product.saleRate}
                                </td>
                                <td className="py-2 px-4 text-center border border-gray-300">
                                {product.wholeSales}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default ProductsList;
