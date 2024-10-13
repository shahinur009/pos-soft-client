import { useState } from "react";

const Amount = () => {
    const [formData, setFormData] = useState({
        subtotal: 0,
        discount: 0,
        vat: 0,
        transport: 0,
        totalAmount: 0,
        cashPaid: 0,
        bankPaid: 0,
        due: 0,
        PreviousDue: 0,
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    return (
        <>
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
                        value={formData.PreviousDue}
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

export default Amount;