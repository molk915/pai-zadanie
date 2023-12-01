import { groupBy } from "../../utils";
import BasketItem from "../BasketItem/BasketItem";
import Product from "../Product/Product";
import "./Basket.scss";

const Basket = (props) => {
  const { orderedProducts, onProductRemove, orderCount } = props;
  const { name, price } = orderedProducts;

  const totalCost = orderedProducts.reduce(
    (acc, orderedProduct) => acc + orderedProduct.price,
    0
  );

  const gropedOrderedProducts = Object.entries(
    groupBy(orderedProducts, (Product) => Product.name)
  );

  const handleProductRemove = (orderedProduct) => {
    onProductRemove(orderedProduct);
  };

  return (
    <div className="basket">
      <header>
        <h5>
          <span>Basket</span>
          <span>({orderCount} products)</span>
        </h5>
        <button>X</button>
      </header>
      <div>
        <ul>
          {gropedOrderedProducts.map(([name, orderedProducts]) => (
            <BasketItem
              orderCount={orderedProducts.length}
              orderedProduct={orderedProducts[0]}
              onProductRemove={handleProductRemove}
            />
          ))}
        </ul>
      </div>
      <footer>
        <button>Order and Pay ({totalCost.toFixed(2)})</button>
      </footer>
    </div>
  );
};

export default Basket;
