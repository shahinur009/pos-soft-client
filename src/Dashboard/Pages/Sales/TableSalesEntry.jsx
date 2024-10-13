import { useEffect, useState } from "react";

const TableSalesEntry = () => {
    const [salesData, setSalesData] = useState([]);
    const [customerData, setCustomerData] = useState({});

    useEffect(() => {
        // Retrieve product data from local storage
        const storedProducts = localStorage.getItem("productData");
        const storedCustomer = localStorage.getItem("customerData");

        if (storedProducts) {
            const productData = JSON.parse(storedProducts);
            setSalesData((prevData) => [...prevData, productData]); // Append product data
        }

        if (storedCustomer) {
            const customerData = JSON.parse(storedCustomer);
            setCustomerData(customerData); // Store customer data
        }
    }, []); // Run only once on component mount

    // Function to calculate total from product data
    const calculateTotal = (products) => {
        return products.reduce((acc, product) => acc + product.rate * product.qty, 0);
    };

    return (
        <div className="table-section mt-9">
            <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                    <tr>
                        <th className="border border-gray-300 p-2">No.</th>
                        <th className="border border-gray-300 p-2">Product</th>
                        <th className="border border-gray-300 p-2">Quantity</th>
                        <th className="border border-gray-300 p-2">Rate</th>
                        <th className="border border-gray-300 p-2">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {salesData.map((product, index) => (
                        <tr key={index}>
                            <td className="border border-gray-300 p-2">{index + 1}</td>
                            <td className="border border-gray-300 p-2">{product.product}</td>
                            <td className="border border-gray-300 p-2">{product.qty}</td>
                            <td className="border border-gray-300 p-2">{product.rate}</td>
                            <td className="border border-gray-300 p-2">{product.rate * product.qty}</td>
                        </tr>
                    ))}
                    {salesData.length === 0 && (
                        <tr>
                            <td colSpan="5" className="border border-gray-300 p-2 text-center">
                                No data available
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

            {/* Display Customer Info */}
            {Object.keys(customerData).length > 0 && (
                <div className="mt-4">
                    <h2 className="font-bold mb-2">Customer Information</h2>
                    <p>Name: {customerData.name}</p>
                    <p>Mobile: {customerData.mobile}</p>
                    <p>Address: {customerData.address}</p>
                    <p>Previous Due: {customerData.PreviousDue}</p>
                </div>
            )}
        </div>
    );
};

export default TableSalesEntry;
