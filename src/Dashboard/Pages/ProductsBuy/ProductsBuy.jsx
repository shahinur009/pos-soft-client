import axios from 'axios';
import { useForm, useFieldArray } from 'react-hook-form';

const CompanyProductForm = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
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
      reset()
      // index remove
      remove()
    } catch (error) {
      console.error('Error submitting data:', error);
    }

  };

  const headingColor = ['bg-red-200', 'bg-[#dc4b76f5]',]


  return (
    <div className="mx-auto bg-red-200">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-2 p-6 rounded-lg shadow-lg"
      >
        {/* Company Details */}
        <h2 className="text-2xl font-semibold">Company Details</h2>
        <div className="md:grid md:grid-cols-2 md:justify-center md:items-center gap-5">


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
          {fields.map((item, index) => (
            <div key={item.id} className="space-y-4 border-b border-gray-300 pb-4">

              <h2 className={`text-2xl font-semibold ${headingColor[index % headingColor.length]}`}>Product Details {index + 1}</h2>

              <div className="flex flex-col space-y-2">
                <label htmlFor={`products.${index}.productName`} className="font-medium">
                  Product Name
                </label>
                <input
                  type="text"
                  id={`products.${index}.productName`}
                  className="p-2 border border-gray-300 rounded"
                  {...register(`products.${index}.productName`, { required: 'Product Name is required' })}
                  placeholder='products name'
                />
                {errors.products?.[index]?.productName && (
                  <span className="text-red-500 text-sm">
                    {errors.products[index].productName.message}
                  </span>
                )}
              </div>

              {/* Product Qty */}
              <div className="flex flex-col">
                <label htmlFor={`products.${index}.productStock`} className="font-medium">
                  প্রোডাক্ট স্টক :
                </label>
                <input
                  type="number"
                  id={`products.${index}.productStock`}
                  className="p-2 border border-gray-300 rounded"
                  {...register(`products.${index}.productStock`, { required: 'Product stock Name is required' })}
                  placeholder="প্রোডাক্ট পিছ প্রদান করুন"
                />
                {errors.products?.[index]?.productStock && (
                  <span className="text-red-500 text-sm">
                    {errors.products[index].productStock.message}
                  </span>
                )}
              </div>

              {/* Product Category */}
              <div className="flex flex-col">
                <label htmlFor={`products.${index}.productCategory`} className="font-medium">
                  প্রোডাক্ট শ্রেণী :
                </label>
                <input
                  type="text"
                  id={`products.${index}.productCategory`}
                  className="p-2 border border-gray-300 rounded"
                  {...register(`products.${index}.productCategory`, { required: 'Product category Name is required' })}
                  placeholder="প্রোডাক্ট category প্রদান করুন"
                />
                {errors.products?.[index]?.productCategory && (
                  <span className="text-red-500 text-sm">
                    {errors.products[index].productCategory.message}
                  </span>
                )}
              </div>

              {/* Buy Rate */}
              <div className="flex flex-col">
                <label htmlFor={`products.${index}.productBuyPrice`} className="font-medium">
                  ক্রয় রেট :
                </label>
                <input
                  type="number"
                  id={`products.${index}.productBuyPrice`}
                  className="p-2 border border-gray-300 rounded"
                  {...register(`products.${index}.productBuyPrice`, { required: 'Product buy price is required' })}
                  placeholder="প্রোডাক্ট buy price প্রদান করুন"
                />
                {errors.products?.[index]?.productBuyPrice && (
                  <span className="text-red-500 text-sm">
                    {errors.products[index].productBuyPrice.message}
                  </span>
                )}
              </div>

              {/* Sale Rate */}
              <div className="flex flex-col">
                <label htmlFor={`products.${index}.retailSalesRate`} className="font-medium">
                  খুচরা বিক্রয় রেট :
                </label>
                <input
                  type="number"
                  id={`products.${index}.retailSalesRate`}
                  className="p-2 border border-gray-300 rounded"
                  {...register(`products.${index}.retailSalesRate`, { required: 'Product stock Name is required' })}
                  placeholder="প্রোডাক্ট পিছ প্রদান করুন"
                />
                {errors.products?.[index]?.retailSalesRate && (
                  <span className="text-red-500 text-sm">
                    {errors.products[index].retailSalesRate.message}
                  </span>
                )}
              </div>

              {/* Wholesale Rate */}
              <div className="flex flex-col">
                <label htmlFor={`products.${index}.wholesaleRate`} className="font-medium">
                  পাইকারি বিক্রয় রেট :
                </label>
                <input
                  type="number"
                  id={`products.${index}.wholesaleRate`}
                  className="p-2 border border-gray-300 rounded"
                  {...register(`products.${index}.wholesaleRate`, { required: 'Product wholesaleRate is required' })}
                  placeholder="প্রোডাক্ট wholesaleRate প্রদান করুন"
                />
                {errors.products?.[index]?.wholesaleRate && (
                  <span className="text-red-500 text-sm">
                    {errors.products[index].wholesaleRate.message}
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
            className="flex items-center bg-[#dc4b76f5] text-black p-2 rounded-md"
            onClick={() => append({ productName: '', productStock: '', productCategory: '', productBuyPrice: '', retailSalesRate: '', wholesaleRate: '' })}
          >
            <span className="mr-2">+</span> Add Product
          </button>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#dc4b76f5] text-white p-3 rounded-md font-semibold "
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CompanyProductForm;
