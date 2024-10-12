import { useState } from "react";
import ProductInfo from "./Productinfo";
import TableSalesEntry from "./TableSalesEntry";

export default function Sales() {
  const [sales, setSales] = useState([]);

  const handleAddToCard = (details) => {
    console.log("add to card click", details)
  }

  return (
    <div className="p-2">
      {/* Header Section */}
 
      <div className="grid grid-cols-3 gap-1 relative">
        {/* Customer Information */}
        <ProductInfo handleAddToCard={handleAddToCard}></ProductInfo>
        <div className="absolute top-64 w-[66.5%]">
          <TableSalesEntry></TableSalesEntry>
        </div>
      </div>
      {/* Product Table */}

    </div>
  );
};


