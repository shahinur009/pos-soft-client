import { useState } from "react";

const ProductsList = () => {
    const [selectedOption1, setSelectedOption1] = useState("");
    const [selectedOption2, setSelectedOption2] = useState("");

    const handleShowReport = () => {
        // Logic to handle the report based on selected options
        console.log(`Option 1: ${ selectedOption1 }, Option 2: ${ selectedOption2 }`);
    };

    return (
        <section>
            <div className="flex space-x-4 items-center p-4 rounded-lg my-5 bg-gray-300 border border-black/90 relative">
                <p className="absolute -top-4 left-5 text-xl font-semibold bg-[#D1D5DB] h-4">
                    Products List
                </p>
                <p className="text-lg">Search Type</p>
                <select
                    value={selectedOption1}
                    onChange={(e) => setSelectedOption1(e.target.value)}
                    className="block w-48 p-2 rounded outline-none border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                >
                    <option value="">-- Choose an option --</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>

                <select
                    value={selectedOption2}
                    onChange={(e) => setSelectedOption2(e.target.value)}
                    className="block w-48 p-2 rounded outline-none border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                >
                    <option value="">-- Choose an option --</option>
                    <option value="optionA">Option A</option>
                    <option value="optionB">Option B</option>
                    <option value="optionC">Option C</option>
                </select>

                <button
                    onClick={handleShowReport}
                    className="bg-[#1B6AAA] text-white px-4 py-2 rounded-md shadow"
                >
                    Show Report
                </button>
            </div>

            {/* here is table */}
            <div>
                <table className="min-w-full bg-white border-collapse">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 bg-[#146C94] text-white border border-gray-300">
                                SL
                            </th>
                            <th className="py-2 px-4 bg-[#146C94] text-white border border-gray-300">
                                Product ID
                            </th>
                            <th className="py-2 px-4 bg-[#146C94] text-white border border-gray-300">
                                Product Name
                            </th>
                            <th className="py-2 px-4 bg-[#146C94] text-white border border-gray-300">
                                Category
                            </th>
                            <th className="py-2 px-4 bg-[#146C94] text-white border border-gray-300">
                                Product Price
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((product, index) => (
                            <tr key={product.id} className="border-b">
                                <td className="py-2 px-4 text-center border border-gray-300">
                                    {index + 1}
                                </td>
                                <td className="py-2 px-4 text-center border border-gray-300">
                                    {product.id}
                                </td>
                                <td className="py-2 px-4 text-center border border-gray-300">
                                    {product.name}
                                </td>
                                <td className="py-2 px-4 text-center border border-gray-300">
                                    {product.category}
                                </td>
                                <td className="py-2 px-4 text-center border border-gray-300">
                                    {product.price}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

const data = [
    { id: "P001", name: "Product 1", category: "Category A", price: 500 },
    { id: "P002", name: "Product 2", category: "Category B", price: 1500 },
    { id: "P003", name: "Product 3", category: "Category C", price: 2500 },
    { id: "P004", name: "Product 4", category: "Category D", price: 3500 },
    { id: "P005", name: "Product 5", category: "Category E", price: 4500 },
];

export default ProductsList;