import { useState } from "react";
import "./Product.scss";
import ProductModal from "../ProductModal/ProductModal.jsx";
const Product = (props) => {
  const { product, orderedProducts, onAddToBasket } = props;
  const { name, price, description, imageUrl } = product;
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(true);
  };

  const handleProductModalClose = () => {
    setIsOpen(false);
  };

  const isOrdered = orderedProducts.some(
    (orderedProduct) => orderedProduct.id === product.id
  );

  const orderCount = orderedProducts.filter(
    (orderedProduct) => orderedProduct.id === product.id
  ).length;

  return (
    <article
      className="product"
      style={{
        borderColor: isOrdered ? "#8ea604" : "transparent",
      }}
    >
      {isOpen && (
        <ProductModal
          onClose={handleProductModalClose}
          product={product}
          onAddToBasket={onAddToBasket}
        />
      )}
      <div>
        <img src={imageUrl} alt={name} />
      </div>
      <div>
        <header>
          <h4>{name}</h4>
          <p>{description}</p>
        </header>
        <footer>
          <strong>{price}</strong>
          <button
            onClick={handleButtonClick}
            style={{
              color: isOrdered ? "white" : "",
              background: isOrdered ? "#8ea604" : "",
              fontSize: "15px",
            }}
          >
            {isOrdered ? `${orderCount}` : "+"}
          </button>
        </footer>
      </div>
    </article>
  );
};

export default Product;
