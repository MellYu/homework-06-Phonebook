import React from "react";
import { connect } from "react-redux";
import { filterContacts } from "../../redux/phonebook/phonebookActions";
import styles from './filter.module.css';

const style = {
  display: "block",
};

const Filter = ({ onChangeFilter }) => {
  return (
    <label className={styles.nameLabel}>
      Find contacts by name
      <input className={styles.nameInput}
        type="text"
        onChange={e=> onChangeFilter(e.target.value)}
        name="filter"
        style={style}
        id="filterInput"
      />
    </label>
  );
};

const mapDispatchToProps={
  onChangeFilter: filterContacts,
}
export default connect(null, mapDispatchToProps)(Filter);