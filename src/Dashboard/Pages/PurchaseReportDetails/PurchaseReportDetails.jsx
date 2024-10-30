import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PurchaseReportDetails = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [pay, isPay] = useState(true);
  const [payAmount,SetPayAmount] = useState({
    payable: 0
  })

  const companyDetails = products?.companyDetails;
  const productsBuyDetails = products?.productsBuyDetails;
  const due = companyDetails?.payableMoney - companyDetails?.moneyGiven

  console.log(productsBuyDetails);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios(
        `http://localhost:5000/single-product-report/${id}`
      );
      setProducts(res.data);
    };
    
    fetchData();
  }, [id]);

  const handlePay = async () => {
    
    console.log(payAmount);

  }


  const CategoryColor = ['text-green-300', 'text-blue-300','text-yellow-300']


  return (
    <section className="p-10">
      {/* Top bar showing totals */}
      <div className="mb-6 bg-gray-100 p-4 rounded-lg shadow space-y-3">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold mb-2">Payment Summary</h2>
          <button onClick={handlePay} className="bg-green-400 p-2">
            Give money
          </button>
        </div>
        <div className="flex justify-between">
          <p className="text-lg">
            <strong>Total Payable:</strong> {companyDetails?.payableMoney} ৳
          </p>
          <p className="text-lg">
            <strong>Given:</strong> {companyDetails?.moneyGiven} ৳
          </p>
          <p className="text-lg">
            <strong>Due:</strong> {due} ৳
          </p>

        
          <div className="pb-3 flex gap-3 items-center">
            <p>Pay Money</p>
            <input
              disabled={pay}
              type="text"
              name="price"
              id="price"
              value={payAmount.payable}
              onChange={(e) =>SetPayAmount(e.target.value) }
              className="p-1 border-2"
            />
          </div>
          
        </div>
      </div>

      {/* Product Details Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">
                Product Name
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">
                Product Category
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">
                Quantity
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">
                Buy Price (৳)
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">
                WholeSale Price (৳)
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">
                Retail Price (৳)
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {productsBuyDetails?.map((product, index) => (
              <tr key={index}>
                <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900 border border-gray-300">
                  {product.productName}
                </td>
                <td className={`px-4 py-2 whitespace-nowrap text-sm font-medium ${CategoryColor[index % CategoryColor.length]} border border-gray-300 uppercase`}>
                  {product.productCategory}
                </td>
                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 border border-gray-300">
                  {product.productStock}
                </td>
                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 border border-gray-300">
                  {product.productBuyPrice}
                </td>
                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 border border-gray-300">
                  {product.wholesaleRate}
                </td>
                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 border border-gray-300">
                  {product.retailSalesRate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default PurchaseReportDetails;
