import styles from "./styles.module.scss";

const BestSellerLabel = ({ rating, count }) => {
  const isBestSeller =
    (rating >= 4 && count >= 400) || (rating >= 3.8 && count >= 600);

  if (isBestSeller) {
    return <span className={styles.bestSellerLabel}>BESTSELLER</span>;
  } else {
    return null;
  }
};

export default BestSellerLabel;
