import { useState } from "react";
import styles from "./styles.module.scss";

const AddToCartButton = () => {
  const [quantity, setQuantity] = useState(0);

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className={styles.addToCartBtn}>
      {quantity === 0 ? (
        <button
          type="button"
          className={styles.addToCart}
          onClick={handleIncreaseQuantity}
        >
          Add to Cart
        </button>
      ) : (
        <div className={styles.quantityBtn}>
          <button type="button" onClick={handleDecreaseQuantity}>
            -
          </button>
          <span className={styles.quantity}>{quantity}</span>
          <button type="button" onClick={handleIncreaseQuantity}>
            +
          </button>
        </div>
      )}
    </div>
  );
};

export default AddToCartButton;
