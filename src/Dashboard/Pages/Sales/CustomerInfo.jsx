import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Select from "react-select"; // Import react-select
import axios from "axios"; // Import axios to fetch data from MongoDB

const CustomerInfo = () => {
    const [formData, setFormData] = useState({
        salesType: "retail",
        PreviousDue: "",
        name: "",
        mobile: "",
        address: "",
    });
    const [customers, setCustomers] = useState([]); // State to store customers from MongoDB
    const [selectedCustomer, setSelectedCustomer] = useState(null); // State for selected customer

    // Fetch customers from MongoDB
    useEffect(() => {
        const fetchCustomers = async () => {
            try {
                const response = await axios.get("http://localhost:5000/customers"); // Replace with your API route
                setCustomers(response.data); // Assuming the data is an array of customer objects
            } catch (error) {
                console.error("Error fetching customer data:", error);
            }
        };
        fetchCustomers();
    }, []);

    // Handle react-select customer change
    const handleCustomerChange = (selectedOption) => {
        setSelectedCustomer(selectedOption); // Set selected customer
        setFormData({
            ...formData,
            name: selectedOption.label, // Assuming customer name is the label
            mobile: selectedOption.mobile, // Fill mobile from selected customer
            address: selectedOption.address, // Fill address from selected customer
            PreviousDue: selectedOption.PreviousDue, // Fill Previous Due from selected customer
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Save data to local storage when all fields are filled
    useEffect(() => {
        // Check if all required fields are filled
        const { name, mobile, address, PreviousDue } = formData;
        if (name && mobile && address && PreviousDue) {
            // Save formData to localStorage
            localStorage.setItem('customerData', JSON.stringify(formData));
            console.log("Form data saved to local storage:", formData);
        }
    }, [formData]); // Watch formData for changes

    // Convert customer data to react-select format
    const customerOptions = customers.map((customer) => ({
        value: customer._id, // Use customer ID as value
        label: customer.customerName, // Use customer name as label
        mobile: customer.mobile,
        address: customer.address,
        PreviousDue: customer.PreviousDue,
    }));

    return (
        <div>
            <div className="bg-blue-200 p-2 rounded text-sm">
                <h2 className="font-bold mb-2">ক্রেতার তথ্য  </h2>

                {/* Customer Select */}
                <div className="mb-2 flex items-center justify-center gap-2">
                    <label htmlFor="customer" className="mr-2 w-[20%]">
                        ক্রেতার নাম
                    </label>
                    <div className="w-[80%] flex justify-center gap-1">
                        <Select
                            id="customer"
                            name="customer"
                            options={customerOptions} // React-select options
                            value={selectedCustomer} // Set selected customer
                            onChange={handleCustomerChange} // On customer selection
                            placeholder="Select Customer"
                            className="w-full"
                        />
                        <Link
                            to="/dashboard/add-customer"
                            className="bg-green-500 text-white px-[10px] py-1"
                        >
                            +
                        </Link>
                    </div>
                </div>

                {/* Mobile */}
                <div className="mb-2 flex items-center justify-center gap-2">
                    <label htmlFor="mobile" className="mr-2 w-[20%]">
                        মোবাইল
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

                {/* Previous Due */}
                <div className="mb-2 flex items-center justify-center gap-2">
                    <label htmlFor="previousDue" className="mr-2 w-[20%]">
                        আগের জের
                    </label>
                    <input
                        type="number"
                        id="previousDue"
                        name="PreviousDue"
                        value={formData.PreviousDue}
                        onChange={handleInputChange}
                        className="border p-1 rounded w-[80%]"
                    />
                </div>

                {/* Address */}
                <div className="flex items-center justify-center gap-2">
                    <label htmlFor="address" className="mr-2 w-[20%]">
                        ঠিকানা
                    </label>
                    <textarea
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="Address"
                        className="border p-2 resize-none h-24  rounded w-[80%]"
                    />
                </div>
            </div>
        </div>
    );
};

export default CustomerInfo;
