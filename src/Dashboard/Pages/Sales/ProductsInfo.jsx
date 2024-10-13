import { useState, useEffect } from "react";
import Select from "react-select"; // Import react-select
import axios from "axios"; // Import axios to fetch data from MongoDB
import { Link } from "react-router-dom";

const ProductsInfo = ({ handleAddToCard }) => {
    const [formData, setFormData] = useState({
        product: "",
        stock: "",
        rate: 0,
        qty: 0,
    });

    const [products, setProducts] = useState([]); // State to store products from MongoDB
    const [selectedProduct, setSelectedProduct] = useState(null); // State for selected product

    // Fetch products from MongoDB
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get("http://localhost:5000/product-info"); // Replace with your API route
                setProducts(response.data); // Assuming the data is an array of product objects
            } catch (error) {
                console.error("Error fetching product data:", error);
            }
        };
        fetchProducts();
    }, []);

    // Handle react-select product change
    const handleProductChange = (selectedOption) => {
        setSelectedProduct(selectedOption); // Set selected product
        setFormData({
            ...formData,
            product: selectedOption.label, // Assuming productName is the label
            stock: selectedOption.productQty, // Fill stock from selected product
            rate: selectedOption.saleRate, // Fill saleRate from selected product
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleAddCartClick = () => {
        // Call the handleAddToCard function with form data
        handleAddToCard(formData);
    };

    // Convert product data to react-select format
    const productOptions = products.map((product) => ({
        value: product._id, // Use product ID as value
        label: product.productName, // Use product name as label
        productQty: product.productQty,
        saleRate: product.saleRate,
    }));

    return (
        <div>
            <div className="bg-blue-200 p-1 rounded text-sm">
                <h2 className="font-bold mb-2">প্রোডাক্টের তথ্য </h2>

                {/* Product Name Select */}
                <div className="mb-2 flex items-center justify-center">
                    <label htmlFor="product" className="mr-2 w-[20%]">
                    প্রোডাক্ট
                    </label>
                    <div className="w-[80%] flex justify-center gap-1">
                        <Select
                            id="product"
                            name="product"
                            options={productOptions} // React-select options
                            value={selectedProduct} // Set selected product
                            onChange={handleProductChange} // On product selection
                            placeholder="Select Product"
                            className="w-full"
                        />
                        <Link to='/dashboard/add-product' className="bg-green-500 text-white px-2 py-1">+</Link>
                    </div>
                </div>

                {/* Stock */}
                <div className="mb-2 flex items-center justify-center">
                    <label htmlFor="stock" className="mr-2 w-[20%]">
                        স্টক
                    </label>
                    <input
                        type="number"
                        id="stock"
                        name="stock"
                        value={formData.stock}
                        onChange={handleInputChange}
                        className="border p-1 rounded w-[80%]"
                    />
                </div>

                {/* Sale Rate */}
                <div className="mb-2 flex items-center justify-center">
                    <label htmlFor="rate" className="mr-2 w-[20%]">
                        বিক্রয় মূল্য 
                    </label>
                    <input
                        type="number"
                        id="rate"
                        name="rate"
                        value={formData.rate}
                        onChange={handleInputChange}
                        placeholder="Rate"
                        className="border p-1 rounded w-[80%]"
                    />
                </div>

                {/* Quantity */}
                <div className="mb-2 flex items-center justify-center">
                    <label htmlFor="qty" className="mr-2 w-[20%]">
                        পরিমান 
                    </label>
                    <input
                        type="number"
                        id="qty"
                        name="qty"
                        value={formData.qty}
                        onChange={handleInputChange}
                        placeholder="Quantity"
                        className="border p-1 rounded w-[80%]"
                    />
                </div>

                {/* Total */}
                <div className="mb-2 flex items-center justify-center">
                    <label htmlFor="total" className="mr-2 w-[20%]">
                        মোট টাকা 
                    </label>
                    <input
                        type="number"
                        id="total"
                        name="total"
                        value={formData.rate * formData.qty}
                        onChange={handleInputChange}
                        placeholder="Total"
                        className="border p-1 rounded w-[80%]"
                        readOnly
                    />
                </div>

                {/* Add to Cart Button */} 
                <div className="flex justify-end">
                    <button
                        onClick={handleAddCartClick}
                        className="bg-orange-500 text-white px-4 py-2 mt-2"
                    >
                        কার্ডে এড করুন
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductsInfo;
