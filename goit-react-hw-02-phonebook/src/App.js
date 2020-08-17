import React, { Fragment, Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

import Section from "./Components/Section/Section";

// Task2
import Phonebook from "./Components/Phonebook/Phonebook";
import Contacts from "./Components/Contacts/Contacts";
import Filter from "./Components/Filter/Filter";

class App extends Component {
  state = {
    contacts: [],
    filteredContacts: [],
    filter: "",
  };
  addContact = (contact) => {
    if (this.state.contacts.find((item) => item.name === contact.name)) {
      alert(`${contact.name} id already in contacts`);
      return;
    }
    this.setState((prev) => ({
      contacts: [...prev.contacts, contact],
    }));
  };
  inputHeandlerFilter = ({ target }) => {
    this.setState({ filter: target.value });
    const newArray = this.state.contacts.filter((contact) => contact.name.toLowerCase().includes(target.value.toLowerCase()));
    this.setState({ filteredContacts: newArray });
  };
  removeContact = (id) => {
    this.setState((prev) => ({ contacts: prev.contacts.filter((contact) => contact.id !== id) }));
  };
  render = () => {
    return (
      <Fragment>
        <Section title="Phonebook">
          <Phonebook addContact={this.addContact} />
        </Section>
        <br />
        <Section title="Contacts">
          <Filter inputHeandlerFilter={this.inputHeandlerFilter} />
          <Contacts contacts={this.state.filteredContacts.length > 0 ? this.state.filteredContacts : this.state.contacts} removeContact={this.removeContact} />
        </Section>
      </Fragment>
    );
  };
}

export default App;
