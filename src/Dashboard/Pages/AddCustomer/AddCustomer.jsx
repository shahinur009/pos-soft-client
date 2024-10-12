import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import AddCustomerTableData from "./AddCustomerTableData";

export default function AddCustomer() {
    const [formCustomerData, setFormCustomerData] = useState({
        customerName: "",
        address: "",
        mobile: "",
        PreviousDue: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormCustomerData({ ...formCustomerData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { customerName, address, mobile, PreviousDue } = formCustomerData;

        // Basic validation to check if all fields are filled
        if (!customerName || !address || !mobile || !PreviousDue) {
            Swal.fire({
                icon: "error",
                title: "All fields are required",
                showConfirmButton: true,
            });
            return;
        }

        try {
            // Send customer data to your server
            const response = await axios.post("http://localhost:5000/add-customer", formCustomerData);
            const result = response.data;
            console.log("Customer added successfully:", result);

            Swal.fire({
                position: "top",
                icon: "success",
                title: "Customer added successfully",
                showConfirmButton: false,
                timer: 1500,
            });

            // Reset the form after successful submission
            setFormCustomerData({
                customerName: "",
                address: "",
                mobile: "",
                PreviousDue: "",
            });
        } catch (error) {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: `Something went wrong: ${error.message}`,
                showConfirmButton: false,
                timer: 1500,
            });
        }
    };

    return (
        <div className="w-full h-auto bg-slate-100 py-8">
            <h1 className="text-center text-lg md:text-3xl font-semibold mb-6 text-teal-700">
                কাস্টমার তথ্য প্রদান করুন
            </h1>

            {/* Form Layout */}
            <div className="max-w-full mx-auto p-8 bg-white shadow-lg rounded-lg">
                <form onSubmit={handleSubmit} >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {/* কাস্টমার নাম */}
                        <div className="flex flex-col">
                            <label htmlFor="customerName" className="text-md">
                                কাস্টমার নাম :
                            </label>
                            <input
                                type="text"
                                name="customerName"
                                id="customerName"
                                value={formCustomerData.customerName}
                                onChange={handleInputChange}
                                placeholder="কাস্টমার নাম"
                                className="py-2 px-3 block outline-none rounded-sm border border-teal-400"
                            />
                        </div>

                        {/* ঠিকানা */}
                        <div className="flex flex-col">
                            <label htmlFor="address" className="text-md">
                                ঠিকানা :
                            </label>
                            <input
                                type="text"
                                name="address"
                                id="address"
                                value={formCustomerData.address}
                                onChange={handleInputChange}
                                placeholder="ঠিকানা প্রদান করুন"
                                className="py-2 px-3 block outline-none rounded-sm border border-teal-400"
                            />
                        </div>

                        {/* মোবাইল নাম্বার */}
                        <div className="flex flex-col">
                            <label htmlFor="mobile" className="text-md">
                                মোবাইল নাম্বার :
                            </label>
                            <input
                                type="text"
                                name="mobile"
                                id="mobile"
                                value={formCustomerData.mobile}
                                onChange={handleInputChange}
                                placeholder="মোবাইল নাম্বার"
                                className="py-2 px-3 block outline-none rounded-sm border border-teal-400"
                            />
                        </div>

                        {/* আগের বকেয়া */}
                        <div className="flex flex-col">
                            <label htmlFor="PreviousDue" className="text-md">
                                আগের বকেয়া :
                            </label>
                            <input
                                type="text"
                                name="PreviousDue"
                                id="PreviousDue"
                                value={formCustomerData.PreviousDue}
                                onChange={handleInputChange}
                                placeholder="আগের বকেয়া"
                                className="py-2 px-3 block outline-none rounded-sm border border-teal-400"
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="col-span-3 flex justify-center mt-4">
                        <button
                            type="submit"
                            className="bg-teal-600 text-white font-semibold py-2 px-6 rounded hover:bg-teal-700 transition"
                        >
                            যোগ করুন
                        </button>
                    </div>
                </form>
            </div>
            {/* Table Layout */}
            <div>
                <AddCustomerTableData />
            </div>
        </div>
    );
}
