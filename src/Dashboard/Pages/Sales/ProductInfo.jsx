import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProductInfo = ({ handleAddToCard }) => {
    const [formData, setFormData] = useState({
        salesType: "retail",
        customer: "Cash Customer",
        name: "Cash Customer",
        mobile: "",
        address: "",
        product: "",
        rate: 0,
        qty: 0,
        total: 0,
        subtotal: 0,
        discount: 0,
        vat: 0,
        transport: 0,
        totalAmount: 0,
        cashPaid: 0,
        bankPaid: 0,
        due: 0,
        previousDue: 0,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleAddCartClick = () => {
        // Call the handleAddToCard function with all form data
        handleAddToCard(formData);
    };

    return (
        <>
            {/* Customer Information */}
            <div>
                <div className="bg-blue-200 p-2 rounded text-sm">
                    <h2 className="font-bold mb-2">Customer Information</h2>
                    <div className="mb-2">
                        <label className="mr-2">Sales Type</label>
                        <input
                            type="radio"
                            name="salesType"
                            id="retail"
                            value="retail"
                            checked={formData.salesType === "retail"}
                            onChange={handleInputChange}
                            className="mr-1 p-1"
                        />
                        <label htmlFor="retail" className="mr-2">
                            Retail
                        </label>
                        <input
                            type="radio"
                            name="salesType"
                            id="wholesale"
                            value="wholesale"
                            checked={formData.salesType === "wholesale"}
                            onChange={handleInputChange}
                            className="mr-1"
                        />
                        <label htmlFor="wholesale">Wholesale</label>
                    </div>

                    <div className="mb-2 flex items-center justify-center gap-2">
                        <label htmlFor="customer" className="mr-2 w-[20%]">
                            Customer
                        </label>
                        <div className="w-[80%] flex justify-center gap-1">
                            <input
                                type="text"
                                id="customer"
                                name="customer"
                                value={formData.customer}
                                onChange={handleInputChange}
                                className="border p-1 rounded"
                            />
                            
                            <Link to="/dashboard/add-customer" className="bg-green-500 text-white px-[10px] py-1 ">+</Link>
                        </div>
                    </div>

                    <div className="mb-2 flex items-center justify-center gap-2">
                        <label htmlFor="name" className="mr-2 w-[20%]">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="border p-1 rounded w-[80%]"
                            readOnly
                        />
                    </div>

                    <div className="mb-2 flex items-center justify-center gap-2">
                        <label htmlFor="mobile" className="mr-2 w-[20%]">
                            Mobile No
                        </label>
                        <input
                            type="text"
                            id="mobile"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleInputChange}
                            placeholder="Mobile No"
                            className="border p-1 rounded w-[80%]"
                        />
                    </div>

                    <div className="flex items-center justify-center gap-2">
                        <label htmlFor="address" className="mr-2 w-[20%]">
                            Address
                        </label>
                        <textarea
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            placeholder="Address"
                            className="border p-2 rounded w-[80%]"
                        />
                    </div>
                </div>
            </div>

            {/* Product Information */}
            <div>
                <div className="bg-blue-200 p-4 rounded text-sm">
                    <h2 className="font-bold mb-2">Product Information</h2>
                    <div className="mb-2 flex items-center justify-center">
                        <label htmlFor="product" className="mr-2 w-[20%]">
                            Product
                        </label>
                        <div className="w-[80%] flex justify-center gap-1">
                            <input
                                type="text"
                                id="product"
                                name="product"
                                value={formData.product}
                                onChange={handleInputChange}
                                placeholder="Product"
                                className="border p-1 rounded"
                            />
                            <button className="bg-red-500 text-white px-2 py-1">X</button>
                            <button className="bg-green-500 text-white px-2 py-1">+</button>
                        </div>
                    </div>

                    <div className="mb-2 flex items-center justify-center">
                        <label htmlFor="rate" className="mr-2 w-[20%]">
                            Sale Rate
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

                    <div className="mb-2 flex items-center justify-center">
                        <label htmlFor="qty" className="mr-2 w-[20%]">
                            Qty
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

                    <div className="mb-2 flex items-center justify-center">
                        <label htmlFor="total" className="mr-2 w-[20%]">
                            Total
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

                    <div className="flex justify-end">
                        <button
                            onClick={handleAddCartClick}
                            className="bg-orange-500 text-white px-4 py-2 mt-2"
                        >
                            Add Cart
                        </button>
                    </div>
                </div>
            </div>

            {/* Amount Details */}
            <div className="bg-blue-200 p-4 rounded text-sm">
                <h2 className="font-bold mb-2">Amount Details</h2>
                <div className="mb-1 flex items-center">
                    <label htmlFor="subtotal" className="mr-2 w-[20%]">
                        SubTotal
                    </label>
                    <input
                        type="number"
                        id="subtotal"
                        name="subtotal"
                        value={formData.subtotal}
                        onChange={handleInputChange}
                        placeholder="0"
                        className="border p-1 rounded w-[80%]"
                    />
                </div>

                <div className="mb-1 flex items-center">
                    <label htmlFor="discount" className="mr-2 w-[20%]">
                        Discount
                    </label>
                    <div className="flex gap-2 w-[80%] items-center">
                        <input
                            type="number"
                            id="discount"
                            name="discount"
                            value={formData.discount}
                            onChange={handleInputChange}
                            placeholder="0"
                            className="border p-1 rounded w-[90%]"
                        />
                        <span className="w-[10%]">%</span>
                    </div>
                </div>

                <div className="mb-1 flex items-center">
                    <label htmlFor="vat" className="mr-2 w-[20%]">
                        Vat
                    </label>
                    <div className="flex gap-2 w-[80%] items-center">
                        <input
                            type="number"
                            id="vat"
                            name="vat"
                            value={formData.vat}
                            onChange={handleInputChange}
                            placeholder="0"
                            className="border p-1 rounded w-[90%]"
                        />
                        <span className="w-[10%]">%</span>
                    </div>
                </div>

                <div className="mb-1">
                    <label htmlFor="transport" className="mr-2">
                        Transport / Labour Cost
                    </label>
                    <input
                        type="number"
                        id="transport"
                        name="transport"
                        value={formData.transport}
                        onChange={handleInputChange}
                        placeholder="0"
                        className="border p-1 rounded w-full"
                    />
                </div>

                <div className="mb-1">
                    <label htmlFor="totalAmount" className="mr-2">
                        Total Amount
                    </label>
                    <input
                        type="number"
                        id="totalAmount"
                        name="totalAmount"
                        value={formData.totalAmount}
                        onChange={handleInputChange}
                        placeholder="0"
                        className="border p-1 rounded w-full"
                    />
                </div>

                <div className="mb-1">
                    <label htmlFor="cashPaid" className="mr-2">
                        Cash Paid
                    </label>
                    <input
                        type="number"
                        id="cashPaid"
                        name="cashPaid"
                        value={formData.cashPaid}
                        onChange={handleInputChange}
                        placeholder="0"
                        className="border p-1 rounded w-full"
                    />
                </div>

                <div className="mb-1">
                    <label htmlFor="bankPaid" className="mr-2">
                        Bank Paid
                    </label>
                    <input
                        type="number"
                        id="bankPaid"
                        name="bankPaid"
                        value={formData.bankPaid}
                        onChange={handleInputChange}
                        placeholder="0"
                        className="border p-1 rounded w-full"
                    />
                </div>

                <div className="mb-1">
                    <label htmlFor="due" className="mr-2 block">
                        Due
                    </label>
                    <input
                        type="number"
                        id="due"
                        name="due"
                        value={formData.due}
                        onChange={handleInputChange}
                        placeholder="0"
                        className="border p-1 rounded w-full"
                    />
                </div>

                <div className="mb-1">
                    <label htmlFor="previousDue" className="mr-2">
                        Previous Due
                    </label>
                    <input
                        type="number"
                        id="previousDue"
                        name="previousDue"
                        value={formData.previousDue}
                        onChange={handleInputChange}
                        placeholder="0"
                        className="border p-1 rounded w-full"
                    />
                </div>
                <button className="bg-[#22C55E] py-3 px-2 mt-2 font-semibold text-white">বিক্রি নিশ্চিত করুন </button>
            </div>
        </>
    );
};

export default ProductInfo;
