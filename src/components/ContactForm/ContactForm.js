import React from "react";
import { Component } from "react";
import { nanoid } from "nanoid";
import styles from "./ContactForm.module.css";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handelInput = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handelSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state);
    this.resetInput();
  };

  resetInput = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;
    const nameId = nanoid();

    return (
      <form className={styles.Form} onSubmit={this.handelSubmit}>
        <label className={styles.Label}>
          Name
          <input
            className={styles.Input}
            id={nameId}
            type="text"
            name="name"
            value={name}
            onChange={this.handelInput}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label className={styles.Label}>
          Number
          <input
            className={styles.Input}
            type="tel"
            name="number"
            value={number}
            onChange={this.handelInput}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button type="submit" className={styles.Button}>
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
