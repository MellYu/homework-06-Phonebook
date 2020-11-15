import React, { Component } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
import { addContact } from "./../../redux/phonebook/phonebookActions";
import Notification from "./../Notification/Notification.js";
import styles from "./form.module.css";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
    alert: false,
  };

  changeHandler = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };
  submitHandler = (e) => {
    e.preventDefault();
    const { name, number, alert } = this.state;

    const { contacts } = this.props.phonebook;
    const isInclude = contacts.find((contact) => contact.name === name);
    if (isInclude) {
      this.reset();
      return this.setState({ alert: !alert });
    }
    const contact = {
      id: uuidv4(),
      name: name,
      number: number,
    };
    this.props.addContact(contact);

    this.reset();
  };

  reset = () => {
    this.setState({
      name: "",
      number: "",
      alert: false,
    });
  };

  render() {
    const { name, number, alert } = this.state;
    const delay = () => setTimeout(this.setState({ alert: !alert }),400);
    return (
      <>
        <Notification alert={alert} delay={delay} />
        <form className={styles.mainForm} onSubmit={this.submitHandler}>
          <label className={styles.nameLabel}>
            Name:
            <input
              className={styles.nameInput}
              type="text"
              name="name"
              value={name}
              placeholder="enter name..."
              onChange={this.changeHandler}
              id="nameInput"
            />
          </label>

          <label className={styles.numberLabel}>
            Number:
            <input
              className={styles.telInput}
              type="tel"
              name="number"
              value={number}
              placeholder="enter number..."
              onChange={this.changeHandler}
              id="numberInput"
            />
          </label>
          <button
            className={styles.addBtn}
            type="submit"
            disabled={!name.length || !number.length}
          >
            Add contact
          </button>
        </form>
      </>
    );
  }
}

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return state;
};
const mapDispatchToProps = {
  addContact: addContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
