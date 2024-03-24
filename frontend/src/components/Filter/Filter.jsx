import { useState } from "react";
import styles from "./styles.module.scss";
import { useEffect } from "react";

const Filter = ({
  filterOptions,
  selectedFilter,
  onFilterUpdate,
  filterType,
  defaultLabel
}) => {
  const [selectedOption, setSelectedOption] = useState(selectedFilter);

  useEffect(() => {
    onFilterUpdate(selectedOption);
  }, [selectedOption]);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className={styles.filterContainer}>
      <select
        name="filter"
        id="filter"
        value={selectedOption}
        onChange={handleChange}
      >
        <option value="">{defaultLabel}</option>
        {filterOptions.map((option, index) => (
          <option
            key={`unique_filter_${filterType}_option_${index}`}
            value={option}
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
