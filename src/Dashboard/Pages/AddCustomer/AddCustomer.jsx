import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import AddCustomerTableData from "./AddCustomerTableData";

export default function AddCustomer() {
    const [formCustomerData, setFormCustomerData] = useState({
        customerName: "",
        address: "",
        mobile: "",
        GranterName1: "",
        GranterName2: "",
        GranterNumber1: "",
        GranterNumber2: "",
        picture: "",
        granterPicture1: "",
        granterPicture2: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormCustomerData({ ...formCustomerData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { customerName, address, mobile, GranterName1, GranterName2 } = formCustomerData;

        // Basic validation to check if all fields are filled
        if (!customerName || !address || !mobile || !GranterName1 || GranterName2) {
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
                GranterName: "",
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
                        <div className="flex flex-col">
                            <label htmlFor="customerName" className="text-md">
                                কাস্টমার পিতা/স্বামী নাম :
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
                        <div className="flex flex-col">
                            <label htmlFor="picture" className="text-md">
                                কাস্টমার ছবি :
                            </label>
                            <input
                                type="file"
                                name="picture"
                                id="picture"
                                value={formCustomerData.picture}
                                onChange={handleInputChange}
                                className="py-2 px-3 block outline-none rounded-sm border border-teal-400"
                            />
                        </div> 

                        {/* আগের বকেয়া */}
                        <div className="flex flex-col">
                            <label htmlFor="GranterName" className="text-md">
                                জামিনদারের নাম-১ :
                            </label>
                            <input
                                type="text"
                                name="GranterName"
                                id="GranterName"
                                value={formCustomerData.GranterName1}
                                onChange={handleInputChange}
                                placeholder="জামিনদারের নাম"
                                className="py-2 px-3 block outline-none rounded-sm border border-teal-400"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="GranterName" className="text-md">
                                জামিনদারের নাম্বার-১ :
                            </label>
                            <input
                                type="text"
                                name="GranterName" 
                                id="GranterName"
                                value={formCustomerData.GranterName1}
                                onChange={handleInputChange}
                                placeholder="জামিনদারের নাম"
                                className="py-2 px-3 block outline-none rounded-sm border border-teal-400"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="GranterName" className="text-md">
                                জামিনদারের ঠিকানা-১ : 
                            </label>
                            <input
                                type="text"
                                name="GranterName" 
                                id="GranterName"
                                value={formCustomerData.GranterName1}
                                onChange={handleInputChange}
                                placeholder="জামিনদারের নাম"
                                className="py-2 px-3 block outline-none rounded-sm border border-teal-400"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="granterPicture1" className="text-md">
                                জামিনদারের ছবি-১:
                            </label>
                            <input
                                type="file"
                                name="granterPicture1"
                                id="granterPicture1"
                                value={formCustomerData.granterPicture1}
                                onChange={handleInputChange}
                                className="py-2 px-3 block outline-none rounded-sm border border-teal-400"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="GranterName2" className="text-md">
                                জামিনদারের নাম-২ :
                            </label>
                            <input
                                type="text"
                                name="GranterName2"
                                id="GranterName2"
                                value={formCustomerData.GranterName2}
                                onChange={handleInputChange}
                                placeholder="জামিনদারের নাম-২"
                                className="py-2 px-3 block outline-none rounded-sm border border-teal-400"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="GranterNumber2" className="text-md">
                                জামিনদারের মোবাইল-২ :
                            </label>
                            <input
                                type="text"
                                name="GranterNumber2"
                                id="GranterNumber2"
                                value={formCustomerData.GranterNumber2}
                                onChange={handleInputChange}
                                placeholder="জামিনদারের মোবাইল-২ "
                                className="py-2 px-3 block outline-none rounded-sm border border-teal-400"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="GranterName" className="text-md">
                                জামিনদারের ঠিকানা-২: 
                            </label>
                            <input
                                type="text"
                                name="GranterName" 
                                id="GranterName"
                                value={formCustomerData.GranterName1}
                                onChange={handleInputChange}
                                placeholder="জামিনদারের নাম"
                                className="py-2 px-3 block outline-none rounded-sm border border-teal-400"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="granterPicture2" className="text-md">
                                জামিনদারের ছবি-২ :
                            </label>
                            <input
                                type="file"
                                name="granterPicture2"
                                id="granterPicture2"
                                value={formCustomerData.granterPicture2}
                                onChange={handleInputChange}
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
