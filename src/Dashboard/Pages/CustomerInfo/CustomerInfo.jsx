import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function CustomerTable() {
    const [customers, setCustomers] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    // Fetching data from MongoDB via an API
    useEffect(() => {
        async function fetchCustomers() {
            try {
                const response = await axios.get('http://localhost:5000/customers-info');
                setCustomers(response.data); // Set customer data from API response
                console.log(response.data);
            } catch (error) {
                console.error("Error fetching customer data:", error);
            }
        }
        fetchCustomers();
    }, []);

    // Handle search
    const filteredCustomers = customers.filter(customer =>
        customer.label && customer.label.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Helper function to summarize product data
    const getProductSummary = (products) => {
        // Product names combined by commas
        const productNames = products.map(product => product.product).join(', ');
        // Quantities combined by commas
        const totalQty = products.map(product => product.qty).join(', ');
        // Rates combined by commas
        const totalRate = products.map(product => product.rate).join(', ');
        // Summing total amounts
        const totalAmount = products.reduce((sum, product) => sum + Number(product.total), 0);

        return {
            productNames,
            totalQty,
            totalRate,
            totalAmount,
        };
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4 text-center">Customer List</h2>

            {/* Search input */}
            <input
                type="text"
                placeholder="Search by name"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full p-3 mb-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Responsive Table */}
            <div className="overflow-x-auto text-sm">
                <table className="min-w-full bg-white shadow-md rounded-lg">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="py-3 px-6 text-left">ক্রমিক </th>
                            <th className="py-3 px-6 text-left">নাম</th>
                            <th className="py-3 px-6 text-left">মোবাইল</th>
                            <th className="py-3 px-6 text-left">ঠিকানা</th>
                            <th className="py-3 px-6 text-left">মোট বাকী</th>
                            <th className="py-3 px-6 text-left">জমা </th>
                            <th className="py-3 px-6 text-left">বিবরণ </th>
                        </tr>
                    </thead>

                    <tbody>
                        {filteredCustomers.map((customer, index) => {
                            const { productNames, totalQty, totalRate, totalAmount, _id, PreviousDue, mobile, label, address, due } = getProductSummary(customer.products);

                            return (
                                <tr key={customer._id} className="bg-gray-100">
                                    <td className="py-3 px-6">{index + 1}</td>
                                    <td className="py-3 px-6">{label}</td>
                                    <td className="py-3 px-6">{mobile}</td>
                                    <td className="py-3 px-6">{address}</td>
                                    <td className="py-3 px-6">{due}</td>
                                    <td>
                                        <input type="text" className='w-[50%] border-lime-200 border-2 p-2 rounded-md' name="joma" id="" />
                                        <span className='bg-lime-400 ml-3 p-2'>জমা করুন </span>
                                    </td>
                                    <td>
                                        <Link to={`customer-details/${_id}`} className='bg-lime-400 p-2'>সব দেখুন </Link>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
