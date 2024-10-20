import { useEffect, useState } from "react";
import { useAuth } from "../../../provider/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Amount = () => {
    const { selectedCustomer, subtotalAmount, productsDetails, setInvoiceId } = useAuth();
    const navigate = useNavigate(); // Initialize navigate function

    const [formData, setFormData] = useState({
        subtotal: 0,
        discount: 0,
        vat: 0,
        transport: 0,
        totalAmount: 0,
        cashPaid: 0,
        due: 0,
        previousDue: 0,
        totalDue: 0, // New field for total due
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: parseFloat(value) || 0, // Parse inputs as numbers
        });
    };

    useEffect(() => {
        if (selectedCustomer && selectedCustomer?.PreviousDue) {
            setFormData((prevData) => ({
                ...prevData,
                previousDue: selectedCustomer?.PreviousDue,
            }));
        }
    }, [selectedCustomer]);

    useEffect(() => {
        if (subtotalAmount) {
            setFormData((prevData) => ({
                ...prevData,
                subtotal: subtotalAmount,
            }));
        }
    }, [subtotalAmount]);

    // Calculate totalAmount, due, and totalDue whenever formData changes
    useEffect(() => {
        const { subtotal, discount, vat, transport, cashPaid, previousDue } = formData;

        // Calculate discount and vat amounts
        const discountAmount = (subtotal * discount) / 100;
        const vatAmount = (subtotal * vat) / 100;

        // Calculate total amount
        const calculatedTotal = subtotal - discountAmount + vatAmount + transport;

        // Calculate due by subtracting cashPaid from totalAmount
        const dueAmount = calculatedTotal - cashPaid;

        // Calculate total due (previous + current)
        const totalDue = previousDue + (dueAmount > 0 ? dueAmount : 0);

        setFormData((prevData) => ({
            ...prevData,
            totalAmount: calculatedTotal, // Update totalAmount
            due: dueAmount > 0 ? dueAmount : 0, // Ensure due is not negative
            totalDue, // Update total due
        }));
    }, [formData.subtotal, formData.discount, formData.vat, formData.transport, formData.cashPaid, formData.previousDue]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Current transaction data
        const currentTransactionData = {
            subtotal: formData.subtotal,
            discount: formData.discount,
            vat: formData.vat,
            transport: formData.transport,
            totalAmount: formData.totalAmount,
            cashPaid: formData.cashPaid,
            due: formData.due, // Current due
            products: productsDetails,  // Send only current productsDetails
        };

        // Combined data for updating MongoDB (including previous due)
        const updatedSalesData = {
            ...formData,  // Includes previous due and new total due
            products: productsDetails,  // Send productsDetails as an array
        };

        try {
            Swal.fire({
                title: "আপনি কি ক্রয় করবেন?",
                text: "তাহলে কিন্ত ওকে করে দিলাম!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "হ্যাঁ!"
            }).then(async (result) => {
                if (result.isConfirmed) {
                    // Save the updated data to MongoDB
                    const res = await axios.post('http://localhost:5000/sales', updatedSalesData);
                    const productId = res?.data?.productId;
                    setInvoiceId(productId); // Store productId

                    console.log("Updated data sent to backend:", res.data);
                    Swal.fire({
                        title: "প্রিন্ট হবে!",
                        text: "ডকুমেন্ট প্রিন্টের জন্য প্রস্তুত ",
                        icon: "success"
                    });

                    // Navigate to the print page with the current transaction data
                    navigate(`/dashboard/sales-print/${productId}`, { state: currentTransactionData });
                }
            });
        } catch (err) {
            console.error("Error submitting form:", err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="bg-blue-200 p-4 rounded text-sm">
                <h2 className="font-bold mb-2">লেনদেন তথ্য </h2>

                <div className="mb-1 flex items-center">
                    <label htmlFor="subtotal" className="mr-2 w-[20%]">সাময়িক টাকা</label>
                    <input
                        type="number"
                        id="subtotal"
                        name="subtotal"
                        readOnly={true}
                        value={formData.subtotal}
                        onChange={handleInputChange}
                        placeholder="0"
                        className="border p-1 rounded w-[80%] outline-none bg-gray-500/30"
                    />
                </div>

                <div className="mb-1 flex items-center">
                    <label htmlFor="discount" className="mr-2 w-[20%]">কমিশন</label>
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
                    <label htmlFor="vat" className="mr-2 w-[20%]">ভ্যাট</label>
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
                    <label htmlFor="transport" className="mr-2">পরিবহন / লেবার খরচ</label>
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
                    <label htmlFor="totalAmount" className="mr-2">মোট টাকা</label>
                    <input
                        type="number"
                        id="totalAmount"
                        name="totalAmount"
                        readOnly={true}
                        value={formData.totalAmount}
                        placeholder="0"
                        className="border p-1 rounded w-full outline-none bg-gray-500/30"
                    />
                </div>

                <div className="mb-1">
                    <label htmlFor="cashPaid" className="mr-2">ক্যাশ জমা</label>
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
                    <label htmlFor="due" className="mr-2 block">বাকী</label>
                    <input
                        type="number"
                        id="due"
                        name="due"
                        readOnly={true}
                        value={formData.due}
                        placeholder="0"
                        className="border p-1 rounded w-full"
                    />
                </div>

                <div className="mb-1">
                    <label htmlFor="previousDue" className="mr-2">আগের বাকী</label>
                    <input
                        type="number"
                        id="previousDue"
                        name="previousDue"
                        value={formData.previousDue}
                        onChange={handleInputChange}
                        placeholder="0"
                        readOnly
                        className="border p-1 rounded w-full outline-none bg-black/50"
                    />
                </div>

                <div className="mb-1">
                    <label htmlFor="totalDue" className="mr-2">মোট বাকী</label>
                    <input
                        type="number"
                        id="totalDue"
                        name="totalDue"
                        readOnly={true}
                        value={formData.totalDue}
                        placeholder="0"
                        className="border p-1 rounded w-full outline-none bg-gray-500/30"
                    />
                </div>

                <button type="submit" className="bg-[#22C55E] py-3 px-2 mt-2 font-semibold text-white">
                    বিক্রি নিশ্চিত করুন
                </button>
            </div>
        </form>
    );
};

export default Amount;
