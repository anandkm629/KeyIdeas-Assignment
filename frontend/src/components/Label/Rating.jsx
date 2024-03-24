import styles from "./styles.module.scss";

const Rating = ({ rating }) => {
  let ratingColorClass = "";

  if (rating >= 0 && rating < 1) {
    ratingColorClass = styles.ratingRed;
  } else if (rating >= 1 && rating < 3) {
    ratingColorClass = styles.ratingYellow;
  } else if (rating >= 3 && rating <= 5) {
    ratingColorClass = styles.ratingGreen;
  }

  return (
    <span className={`${styles.rating} ${ratingColorClass}`}>
      {rating.toFixed(1)}★
    </span>
  );
};

export default Rating;
