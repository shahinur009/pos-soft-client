import Header from "./Header";
import ProductInfo from "./Productinfo";
import TableSalesEntry from "./TableSalesEntry";

export default function Sales() {
  return (
    <div className="p-2">
      {/* Header Section */}
      <Header></Header>
      <div className="grid grid-cols-3 gap-1 relative">
        {/* Customer Information */}
        <ProductInfo></ProductInfo>
        <div className="absolute top-64 w-[66.5%]">
          <TableSalesEntry></TableSalesEntry>
        </div>
      </div>
      {/* Product Table */}

    </div>
  );
};


