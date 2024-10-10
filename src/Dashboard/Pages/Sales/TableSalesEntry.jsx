

const TableSalesEntry = () => {
    return (
        <>
            <div className="table-section mt-4">
                <table className="min-w-full border-collapse border border-gray-300">
                    <thead>
                        <tr>
                            <th className="border border-gray-300 p-2">No.</th>
                            <th className="border border-gray-300 p-2">Product</th>
                            <th className="border border-gray-300 p-2">Quantity</th>
                            <th className="border border-gray-300 p-2">Rate</th>
                            <th className="border border-gray-300 p-2">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-gray-300 p-2">1</td>
                            <td className="border border-gray-300 p-2">Sample Product</td>
                            <td className="border border-gray-300 p-2">10</td>
                            <td className="border border-gray-300 p-2">$100</td>
                            <td className="border border-gray-300 p-2">$1000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default TableSalesEntry;