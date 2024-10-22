import axios from 'axios';
import { useForm, useFieldArray } from 'react-hook-form';

const ProductsBuy = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'products',
  });

  const onSubmit = async (data) => {
    const productsBuyDetails = {
        companyDetails: {
            companyName: data.companyName,
            payableMoney: data.payableMoney,
            moneyGiven: data.moneyGiven,
          },
        productsBuyDetails: data.products
    }

    try {
      const response = await axios.post('http://localhost:5000/company-products', productsBuyDetails);
      console.log('Data submitted successfully:', response.data);
    } catch (error) {
      console.error('Error submitting data:', error);
    }
    
  };



  return (
    <div className="max-w-4xl mx-auto p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 bg-gray-100 p-6 rounded-lg shadow-lg"
      >
        {/* Company Details */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Company Details</h2>

          <div className="flex flex-col space-y-2">
            <label htmlFor="companyName" className="font-medium">
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              className="p-2 border border-gray-300 rounded"
              {...register('companyName', { required: 'Company Name is required' })}
            />
            {errors.companyName && (
              <span className="text-red-500 text-sm">
                {errors.companyName.message}
              </span>
            )}
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="payableMoney" className="font-medium">
              Payable Money
            </label>
            <input
              type="number"
              id="payableMoney"
              className="p-2 border border-gray-300 rounded"
              {...register('payableMoney', { required: 'Payable Money is required' })}
            />
            {errors.payableMoney && (
              <span className="text-red-500 text-sm">
                {errors.payableMoney.message}
              </span>
            )}
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="moneyGiven" className="font-medium">
              I Give Money
            </label>
            <input
              type="number"
              id="moneyGiven"
              className="p-2 border border-gray-300 rounded"
              {...register('moneyGiven', { required: 'Money Given is required' })}
            />
            {errors.moneyGiven && (
              <span className="text-red-500 text-sm">
                {errors.moneyGiven.message}
              </span>
            )}
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Product Details</h2>

          {fields.map((item, index) => (
            <div key={item.id} className="space-y-4 border-b border-gray-300 pb-4">
              <div className="flex flex-col space-y-2">
                <label htmlFor={`products.${index}.productName`} className="font-medium">
                  Product Name
                </label>
                <input
                  type="text"
                  id={`products.${index}.productName`}
                  className="p-2 border border-gray-300 rounded"
                  {...register(`products.${index}.productName`, { required: 'Product Name is required' })}
                />
                {errors.products?.[index]?.productName && (
                  <span className="text-red-500 text-sm">
                    {errors.products[index].productName.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor={`products.${index}.perProductPrice`} className="font-medium">
                  Per Product Price
                </label>
                <input
                  type="number"
                  id={`products.${index}.perProductPrice`}
                  className="p-2 border border-gray-300 rounded"
                  {...register(`products.${index}.perProductPrice`, { required: 'Per Product Price is required' })}
                />
                {errors.products?.[index]?.perProductPrice && (
                  <span className="text-red-500 text-sm">
                    {errors.products[index].perProductPrice.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor={`products.${index}.totalProductPrice`} className="font-medium">
                  Total Products Price
                </label>
                <input
                  type="number"
                  id={`products.${index}.totalProductPrice`}
                  className="p-2 border border-gray-300 rounded"
                  {...register(`products.${index}.totalProductPrice`, { required: 'Total Products Price is required' })}
                />
                {errors.products?.[index]?.totalProductPrice && (
                  <span className="text-red-500 text-sm">
                    {errors.products[index].totalProductPrice.message}
                  </span>
                )}
              </div>

              <button
                type="button"
                className="text-white  bg-red-600/70 p-2"
                onClick={() => remove(index)}
              >
                Remove Product
              </button>
            </div>
          ))}

          {/* Add Product Button */}
          <button
            type="button"
            className="flex items-center bg-green-500 text-black p-2 rounded-md hover:bg-green-600"
            onClick={() => append({ productName: '', perProductPrice: '', totalProductPrice: '' })}
          >
            <span className="mr-2">+</span> Add Product
          </button>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-md font-semibold hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProductsBuy;
