import React, { useState } from "react";
import "./ProductModal.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ProductModal = (props) => {
  const { onClose, product, onAddToBasket } = props;
  const { name, price, description, imageUrl } = product;
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleClick = () => {
    onClose();
  };

  const handleRemoveButtonClick = () => {
    setSelectedProducts(selectedProducts.slice(0, selectedProducts.length - 1));
  };
  const handleAddButtonClick = () => {
    setSelectedProducts([...selectedProducts, product]);
  };
  const selectedProductsCount = selectedProducts.filter(
    (selectedProduct) => selectedProduct.name === product.name
  ).length;

  const handleAddToBasketButtonClick = () => {
    onAddToBasket(selectedProducts);

    setSelectedProducts(selectedProducts);
    onAddToBasket(selectedProducts);
    onClose();
  };

  const recommendedProducts = [
    {
      id: 1,
      name: "Vanilla Shake 300ml",
      description: "Vanilla Shake Deluxe large 300ml",
      price: 12.99,
      imageUrl:
        "https://amrestcdn.azureedge.net/kfc-web-ordering/KFC/Rok2023grafika/Shakenowagrafika/Shake_sredni_vanilla_240.png",
    },
    {
      id: 2,
      name: "Strawberry Shake 300ml",
      description: "Shakes Deluxe Strawberry Large 300ml",
      price: 12.99,
      imageUrl:
        "https://amrestcdn.azureedge.net/kfc-web-ordering/KFC/Rok2023grafika/Shakenowagrafika/Shake_sredni_truskawka_240.png",
    },
    {
      id: 3,
      name: "Creamy Caramel Shake 300ml",
      description: "Shake Deluxe Cream Caramel Large 300ml",
      price: 12.99,
      imageUrl:
        "https://amrestcdn.azureedge.net/kfc-web-ordering/KFC/Rok2023grafika/Shakenowagrafika/Shake_sredni_krowka_240.png",
    },
    {
      id: 4,
      name: "Coffee Frappe 300ml",
      description: "Coffee Frappe 300 ml",
      price: 12.99,
      imageUrl:
        "https://amrestcdn.azureedge.net/kfc-web-ordering/KFC/Rok2023grafika/Shakenowagrafika/Shake_sredni_frappe_240.png",
    },
    {
      id: 5,
      name: "Chocolate Shakes 300ml",
      description: "Shake Deluxe chocolade Large 300ml",
      price: 12.99,
      imageUrl:
        "https://amrestcdn.azureedge.net/kfc-web-ordering/KFC/Rok2023grafika/Shakenowagrafika/Shake_sredni_choco_240.png",
    },
    {
      id: 6,
      name: "Peanut Butter Shake 300ml",
      description: "Shake Deluxe U.S. Peanut Butter Large 300ml",
      price: 12.99,
      imageUrl:
        "https://amrestcdn.azureedge.net/kfc-web-ordering/KFC/Rok2023grafika/Shakenowagrafika/Shake_sredni_peanut_240.png",
    },
    {
      id: 7,
      name: "30 Hot Wings Bucket",
      description: "30 Hot Wings, 4 x fries 80g",
      price: 76.99,
      imageUrl:
        "https://amrestcdn.azureedge.net/kfc-web-ordering/KFC/Images/Web/kubelki/nowe/kubelki_4os-Hot_Wings.png",
    },
  ];

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <article className="product-modal">
      <div>
        <header>
          <button onClick={handleClick}>x</button>
        </header>
        <img src={imageUrl} alt={name} />
        <div className="">{name}</div>
        <div className="price">{price}</div>
        <div>{description}</div>
        <div style={{ width: "100%", height: "200px" }}>
          <Carousel
            responsive={responsive}
            afterChange={(index) => setSelectedImageIndex(index)}
          >
            {recommendedProducts.map((recommendedProduct, index) => (
              <div key={product.id}>
                <img src={recommendedProduct.imageUrl} alt={product.name} />
                <div>
                  <button
                    onClick={() => {
                      setSelectedProducts([
                        ...selectedProducts,
                        recommendedProduct,
                      ]);
                    }}
                  >
                    +
                  </button>
                  <span>
                    {
                      selectedProducts.filter(
                        (selectedProduct) =>
                          selectedProduct.name === recommendedProduct.name
                      ).length
                    }
                  </span>
                  <button onClick={() => {}}>-</button>
                </div>
              </div>
            ))}
          </Carousel>
        </div>

        <footer>
          <div>
            <button onClick={handleAddButtonClick}>+</button>
            <span>{selectedProductsCount}</span>
            <button onClick={handleRemoveButtonClick}>-</button>
          </div>

          <button onClick={handleAddToBasketButtonClick}>
            Dodaj do koszyka
          </button>
        </footer>
      </div>
    </article>
  );
};

export default ProductModal;
