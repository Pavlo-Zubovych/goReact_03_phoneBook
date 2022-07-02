import React from "react";
import { Component } from "react";
import { nanoid } from "nanoid";
import styles from "./App.module.css";

import Container from "./Container";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import contacts from "./contacts.json";
import Filter from "./Filter";

class App extends Component {
  state = {
    contacts,
    filter: "",
  };

  addContacts = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const alreadyFind = this.state.contacts.find(
      (contact) => contact.name === name
    );

    alreadyFind
      ? alert(`${name} is already in contacts`)
      : this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));
  };

  findContact = (event) => {
    this.setState({ filter: event.target.value });
  };

  getFilterContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLocaleLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  render() {
    const { filter } = this.state;
    const FilterContacts = this.getFilterContacts();

    return (
      <Container>
        <h1 className={styles.Title}>Phonebook</h1>
        <ContactForm onSubmit={this.addContacts} />

        <h2 className={styles.Title}>Contacts</h2>
        <Filter value={filter} onFindContact={this.findContact} />

        <ContactList
          onFilteredContacts={FilterContacts}
          onDeleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}

export default App;
