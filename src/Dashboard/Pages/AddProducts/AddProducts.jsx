import { useState } from "react";

export default function AddProducts() {
  // Initialize state for form data and product ID counter
  const [formData, setFormData] = useState({
    productCode: '000001', // Start with a 6-digit product code
    productName: '',
    productQty: '',
    productCategory: '',
    buyRate: '',
    saleRate: '',
    wholeSales: '',
    productImage: null,
  });

  const [productIdCounter, setProductIdCounter] = useState(1); // Counter to increment product code

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, productImage: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Increment the product code and pad it with leading zeros to make it 6 digits
    const newProductCode = String(productIdCounter).padStart(6, '0');
    console.log({ ...formData, productCode: newProductCode });

    // Increment the product ID counter for the next product
    setProductIdCounter(productIdCounter + 1);
  };

  return (
    <div className="w-full min-h-screen bg-slate-100 py-10">
      <h1 className="text-center text-lg md:text-3xl font-semibold mb-6 text-teal-700">প্রোডাক্ট যোগ করুন</h1>
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Product Code */}
          <div className="flex flex-col">
            <label htmlFor="productCode" className="text-md font-semibold text-teal-700">প্রোডাক্ট কোড :</label>
            <input
              type="text"
              name="productCode"
              id="productCode"
              value={String(productIdCounter).padStart(6, '0')}
              disabled
              className="py-2 px-3 block outline-none rounded-sm border border-teal-400 bg-gray-200"
            />
          </div>

          {/* Product Name */}
          <div className="flex flex-col">
            <label htmlFor="productName" className="text-md font-semibold text-teal-700">প্রোডাক্ট নাম :</label>
            <input
              type="text"
              name="productName"
              id="productName"
              value={formData.productName}
              onChange={handleInputChange}
              placeholder="প্রোডাক্ট নাম প্রদান করুন"
              className="py-2 px-3 block outline-none rounded-sm border border-teal-400"
            />
          </div>

          {/* Product Qty */}
          <div className="flex flex-col">
            <label htmlFor="productQty" className="text-md font-semibold text-teal-700">প্রোডাক্ট পিছ :</label>
            <input
              type="text"
              name="productQty"
              id="productQty"
              value={formData.productQty}
              onChange={handleInputChange}
              placeholder="প্রোডাক্ট পিছ প্রদান করুন"
              className="py-2 px-3 block outline-none rounded-sm border border-teal-400"
            />
          </div>

          {/* Product Category */}
          <div className="flex flex-col">
            <label htmlFor="productCategory" className="text-md font-semibold text-teal-700">প্রোডাক্ট শ্রেণী :</label>
            <input
              type="text"
              name="productCategory"
              id="productCategory"
              value={formData.productCategory}
              onChange={handleInputChange}
              placeholder="প্রোডাক্ট শ্রেণী প্রদান করুন"
              className="py-2 px-3 block outline-none rounded-sm border border-teal-400"
            />
          </div>

          {/* Buy Rate */}
          <div className="flex flex-col">
            <label htmlFor="buyRate" className="text-md font-semibold text-teal-700">ক্রয় রেট :</label>
            <input
              type="number"
              name="buyRate"
              id="buyRate"
              value={formData.buyRate}
              onChange={handleInputChange}
              placeholder="ক্রয় রেট প্রদান করুন"
              className="py-2 px-3 block outline-none rounded-sm border border-teal-400"
            />
          </div>

          {/* Sale Rate */}
          <div className="flex flex-col">
            <label htmlFor="saleRate" className="text-md font-semibold text-teal-700">খুচরা বিক্রয় রেট :</label>
            <input
              type="number"
              name="saleRate"
              id="saleRate"
              value={formData.saleRate}
              onChange={handleInputChange}
              placeholder="খুচরা বিক্রয় রেট প্রদান করুন"
              className="py-2 px-3 block outline-none rounded-sm border border-teal-400"
            />
          </div>

          {/* Wholesale Rate */}
          <div className="flex flex-col">
            <label htmlFor="wholeSales" className="text-md font-semibold text-teal-700">পাইকারি বিক্রয় রেট :</label>
            <input
              type="number"
              name="wholeSales"
              id="wholeSales"
              value={formData.wholeSales}
              onChange={handleInputChange}
              placeholder="পাইকারি বিক্রয় রেট প্রদান করুন"
              className="py-2 px-3 block outline-none rounded-sm border border-teal-400"
            />
          </div>

          {/* Product Image */}
          <div className="flex flex-col">
            <label htmlFor="productImage" className="text-md font-semibold text-teal-700">প্রোডাক্ট ছবি :</label>
            <input
              type="file"
              name="productImage"
              id="productImage"
              onChange={handleImageChange}
              className="py-2 px-3 block outline-none rounded-sm border border-teal-400"
            />
          </div>

          {/* Submit Button */}
          <div className="col-span-2 flex justify-center mt-4">
            <button
              type="submit"
              className="bg-teal-600 text-white font-semibold py-2 px-6 rounded hover:bg-teal-700 transition"
            >
              যোগ করুন
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
