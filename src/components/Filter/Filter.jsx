import React from 'react';
import css from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ value, changeFilter }) => (
  <label className={css.filter_label}>
    Find contacts by name
    <input
      className={css.filter_input}
      type="text"
      placeholder="Start typing a name..."
      value={value}
      onChange={changeFilter}
    />
  </label>
);
Filter.propTypes = {
  value: PropTypes.string,
  changeFilter: PropTypes.func.isRequired,
};

export default Filter;
