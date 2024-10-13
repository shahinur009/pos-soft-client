
import CustomerInfo from "./CustomerInfo";
import ProductsInfo from "./ProductsInfo";
import Amount from "./Amount";

const ProductInfo = ({ handleAddToCard }) => {




    return (
        <>
            {/* Customer Information */}
            <CustomerInfo />

            {/* Product Information */}
            <ProductsInfo handleAddToCard={handleAddToCard} />

            {/* Amount Details */}
            <Amount />
        </>
    );
};

export default ProductInfo;
