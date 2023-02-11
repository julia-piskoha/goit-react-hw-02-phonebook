import Phonebook from 'components/Phonebook/Phonebook.jsx';
import React from 'react';
class App extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    good: this.props.initialValue,
    bad: this.props.initialValue,
    neutral: this.props.initialValue,
  };
}
