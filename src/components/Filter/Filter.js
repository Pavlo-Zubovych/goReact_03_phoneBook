import React from "react";
import PropTypes from "prop-types";
import styles from "./Filter.module.css";

const Filter = ({ value, onFindContact }) => {
  return (
    <label className={styles.Label}>
      Find contacts by name
      <input
        type="text"
        value={value}
        className={styles.Input}
        onChange={onFindContact}
      />
    </label>
  );
};

Filter.propType = {
  value: PropTypes.string,
};
// 1
export default Filter;
