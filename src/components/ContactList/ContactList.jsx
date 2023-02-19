import React from 'react';
import css from './ContactList.module.css';
import PropTypes from 'prop-types';
const ContactList = ({ contacts }) => {
  contacts.map(({ name, number, id }) => {
    return (
      <li className={css.contacts_list} key={id}>
        {name}: {number}
      </li>
    );
  });
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  //   onDelete: PropTypes.func.isRequired,
};

export default ContactList;
