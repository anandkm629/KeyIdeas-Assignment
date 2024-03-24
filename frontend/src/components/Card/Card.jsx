import React from "react";
import styles from "./styles.module.scss";
import AddToCartButton from "../Button/AddToCartButton";
import BestSellerLabel from "../Label/BestSellerLabel";
import Rating from "../Label/Rating";

const Card = ({ card }) => {
  return (
    <article className={styles.productCard}>
      <div className={styles.imgContainer}>
        <BestSellerLabel rating={card.rating} count={card.rating_count} />
        <img
          className={styles.image}
          src={card.attr_whitegold_platinum_round_default_img}
          alt={card.prod_name}
        />
      </div>
      <div className={styles.details}>
        <span className={styles.name}>{card.prod_name}</span>

        <div className={styles.ratingContainer}>
          <Rating rating={card.rating} />
          <span>({card.rating_count})</span>
        </div>

        <span className={styles.itemPrice}>${card.attr_14k_regular}</span>
        <AddToCartButton />
      </div>
    </article>
  );
};

export default Card;
