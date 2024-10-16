import axios from 'axios';
import { useEffect, useRef, useState } from 'react';

const SalesInvoice = () => {
    const [salesData, setSalesData] = useState()

    const invoiceRef = useRef();

    useEffect(() => {
        const allSalesData = async () => {
            const res = await axios.get('http://localhost:5000/all-sales-data')
            setSalesData(res.data)
        }
        allSalesData();
    }, [])


    const printInvoice = () => {
        const printContents = invoiceRef.current.innerHTML;
        const originalContents = document.body.innerHTML;


        document.body.innerHTML = printContents;
        window.print();

        document.body.innerHTML = originalContents;
        window.location.reload();
    };

    return (
        <div className="max-w-4xl mx-auto p-4 bg-white shadow-lg rounded-lg">
            {/* Invoice content to be printed */}
            <div ref={invoiceRef} className="p-4">
                {/* Header */}
                <div className="flex justify-between items-center border-b pb-4">
                    <div>
                        <h1 className="text-2xl font-bold">বাবু ইলেকট্রনিক্স

                        </h1>
                        <p className="text-xl mt-1" >প্রোঃ মোঃ ইব্রাহিম হোসেন (বাবু)</p>
                        <p className='text-sm w-[70%] my-2'>এখানে এসি, ফ্রিজ, এলইডি টিভি, ফ্যান, রাইস কুকার, ম্যাজিক চুলা ও গ্যাস চুলা সহ অন্যান্য ইলেকট্রনিক্স পণ্য পাইকারী ও খুচরা বিক্রয় করা হয়।</p>
                        <p className='font-semibold text-sm'>তিন রাস্তার পাশে, ভবানীপুর ডাঙ্গারহাট, বীরগঞ্জ, দিনাজপুর </p>
                        <p className='text-sm '><span className='font-semibold'>মোবাইল:</span> ০১৩১৮০৯০৭৯৯, ০১৩০৩২৫১২৭৯</p>
                    </div>

                    <div className="text-right">
                        <p><span className="font-semibold">ইনভয়েজ নাম্বার:</span> 2400</p>
                        <p><span className="font-semibold">তারিখ :</span> 15-10-2024 11:53 pm</p>
                    </div>
                </div>

                {/* Customer Info */}
                <div className="mt-4 flex justify-between">
                    <div>
                        <p><strong>ক্রেতার নাম </strong>: Md Shahinur Islam</p>
                        <p><strong>মোবাইল</strong>: 01744604009</p>
                        <p><strong>ঠিকানা</strong>: দিঘলপহুড়া</p>
                    </div>
                </div>

                {/* Invoice Table */}
                <div className="mt-6">
                    <table className="w-full table-auto border-collapse border border-gray-200">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="border border-gray-300 px-4 py-2">ক্রমিক নং </th>
                                <th className="border border-gray-300 px-4 py-2">প্রোডাক্টের নাম </th>
                                <th className="border border-gray-300 px-4 py-2">পরিমাণ</th>
                                <th className="border border-gray-300 px-4 py-2">দাম</th>
                                <th className="border border-gray-300 px-4 py-2">মোট টাকা </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2 text-center">1</td>
                                <td className="border border-gray-300 px-4 py-2 text-center">Yohe9708 - P00227</td>
                                <td className="border border-gray-300 px-4 py-2 text-center">1.00</td>
                                <td className="border border-gray-300 px-4 py-2 text-center">Pcs</td>
                                <td className="border border-gray-300 px-4 py-2 text-center">6000.00</td>

                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Total Section */}
                <div className="mt-6 space-y-2 text-sm text-end ">
                    <p><strong>টাকা:</strong> 6000.00</p>
                    <p><strong>কমিশন:</strong> 0.00</p>
                    <p><strong>ভ্যাট :</strong> 0.00</p>
                    <p><strong>লেবার/ গাড়ি বিল :</strong> 0.00</p>
                    <p><strong>মোট টাকা:</strong> 6000.00</p>
                    <p><strong>জমার পরিমাণ:</strong> 6000.00</p>
                    <p><strong>বাকী :</strong> 0.00</p>
                </div>


                {/* Footer */}
                <div className="mt-8">
                    <p><strong>In Word:</strong> Six Thousand only</p>
                    <textarea name="Note" id="">Note:</textarea>
                </div>
            </div>

            {/* Print Button */}
            <div className="mt-4 text-center">
                <button
                    onClick={printInvoice}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Print Invoice
                </button>
            </div>
        </div>
    );
};

export default SalesInvoice;