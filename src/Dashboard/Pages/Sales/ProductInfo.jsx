
const ProductInfo = () => {
    return (
        <>
            {/* Customer Information */}
            <div>
                <div className="bg-blue-200 p-2 rounded text-sm">
                    <h2 className="font-bold mb-2">Customer Information</h2>
                    <div className="mb-2">
                        <label className="mr-2">Sales Type</label>
                        <input type="radio" name="salesType" id="retail" className="mr-1 p-1" />
                        <label htmlFor="retail" className="mr-2">Retail</label>
                        <input type="radio" name="salesType" id="wholesale" className="mr-1" />
                        <label htmlFor="wholesale">Wholesale</label>
                    </div>
                    
                    <div className="mb-2 flex items-center justify-center gap-2">
                        <label htmlFor="customer" className="mr-2 w-[20%]">Customer</label>
                        <div className="w-[80%] flex justify-center gap-1">
                            <input
                                type="text"
                                id="customer"
                                value="Cash Customer"
                                className="border p-1 rounded"
                            />
                            <button className="bg-red-500 text-white px-[10px] py-1 ">X</button>
                            <button className="bg-green-500 text-white 
                            px-[10px] py-1 ">+</button>
                        </div>
                    </div>
                    <div className="mb-2 flex items-center justify-center gap-2">
                        <label htmlFor="name" className="mr-2 w-[20%]">Name</label>
                        <input
                            type="text"
                            id="name"
                            value="Cash Customer"
                            className="border p-1 rounded w-[80%]"
                            readOnly
                        />
                    </div>
                    <div className="mb-2 flex items-center justify-center gap-2">
                        <label htmlFor="mobile" className="mr-2 w-[20%]">Mobile No</label>
                        <input
                            type="text"
                            id="mobile"
                            placeholder="Mobile No"
                            className="border p-1 rounded w-[80%]"
                        />
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <label htmlFor="address" className="mr-2 w-[20%]">Address</label>
                        <textarea
                            id="address"
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
                        <label htmlFor="product" className="mr-2 w-[20%]">Product</label>
                        <div className="w-[80%] flex justify-center gap-1">
                            <input
                                type="text"
                                id="product"
                                placeholder="Product"
                                className="border p-1 rounded "
                            />
                            <button className="bg-red-500 text-white px-2 py-1 ">X</button>
                            <button className="bg-green-500 text-white px-2 py-1">+</button>
                        </div>
                    </div>
                    <div className="mb-2 flex items-center justify-center">
                        <label htmlFor="rate" className="mr-2 w-[20%]">Sale Rate</label>
                        <input
                            type="number"
                            id="rate"
                            placeholder="Rate"
                            className="border p-1 rounded w-[80%]"
                        />
                    </div>
                    <div className="mb-2 flex items-center justify-center">
                        <label htmlFor="qty" className="mr-2 w-[20%]">Qty</label>
                        <input
                            type="number"
                            id="qty"
                            placeholder="Quantity"
                            className="border p-1 rounded w-[80%]"
                        />
                    </div>
                    <div className="mb-2 flex items-center justify-center">
                        <label htmlFor="total" className="mr-2 w-[20%]">Total</label>
                        <input
                            type="number"
                            id="total"
                            placeholder="Total"
                            className="border p-1 rounded w-[80%]"
                            readOnly
                        />
                    </div>
                    <div className="flex justify-end">
                        <button className="bg-orange-500 text-white px-4 py-2 mt-2">Add Cart</button>
                    </div>
                </div>
            </div>

            {/* Amount Details */}
            <div className="bg-blue-200 p-4 rounded text-sm">
                <h2 className="font-bold mb-2">Amount Details</h2>
                <div className="mb-1 flex items-center">
                    <label htmlFor="subtotal" className="mr-2 w-[20%]">SubTotal</label>
                    <input
                        type="number"
                        id="subtotal"
                        placeholder="0"
                        className="border p-1 rounded w-[80%]"
                    />
                </div>
                <div className="mb-1 flex items-center">
                    <label htmlFor="discount" className="mr-2 w-[20%]">Discount</label>
                    <div className="flex gap-2 w-[80%] items-center">
                        <input
                            type="number"
                            id="discount"
                            placeholder="0"
                            className="border p-1 rounded w-[90%]"
                        />
                        <span className="w-[10%]">%</span>
                    </div>
                </div>
                <div className="mb-1 flex items-center">
                    <label htmlFor="vat" className="mr-2 w-[20%]">Vat</label>
                    <div className="flex gap-2 w-[80%] items-center">
                        <input
                            type="number"
                            id="vat"
                            placeholder="0"
                            className="border p-1 rounded w-[90%]"
                        />
                        <span className="w-[10%]">%</span>
                    </div>
                </div>
                <div className="mb-1">
                    <label htmlFor="transport" className="mr-2">Transport / Labour Cost</label>
                    <input
                        type="number"
                        id="transport"
                        placeholder="0"
                        className="border p-1 rounded w-full"
                    />
                </div>
                <div className="mb-1">
                    <label htmlFor="totalAmount" className="mr-2">Total</label>
                    <input
                        type="number"
                        id="totalAmount"
                        placeholder="0"
                        className="border p-1 rounded w-full"
                        readOnly
                    />
                </div>
                <div className="mb-1">
                    <label htmlFor="cashPaid" className="mr-2">Cash Paid</label>
                    <input
                        type="number"
                        id="cashPaid"
                        placeholder="0"
                        className="border p-1 rounded w-full"
                    />
                </div>
                <div className="mb-1">
                    <label htmlFor="bankPaid" className="mr-2">Bank Paid</label>
                    <input
                        type="number"
                        id="bankPaid"
                        placeholder="0"
                        className="border p-1 rounded w-full"
                    />
                </div>
                <div className="mb-1">
                    <label htmlFor="due" className="mr-2">Due</label>
                    <input
                        type="number"
                        id="due"
                        placeholder="0"
                        className="border p-1 rounded w-full"
                    />
                </div>
                <div className="mb-1">
                    <label htmlFor="previousDue" className="mr-2">Previous Due</label>
                    <input
                        type="number"
                        id="previousDue"
                        placeholder="0"
                        className="border p-1 rounded w-full"
                        readOnly
                    />
                </div>
                <div className="flex justify-center items-center gap-2">
                    <button className="bg-green-500 text-white px-4 py-2 mt-2 w-full">
                        Sale
                    </button>
                    <button className="bg-blue-500 text-white px-4 py-2 mt-2 w-full">
                        New Sale
                    </button>
                </div>
            </div>
        </>
    );
};

export default ProductInfo;