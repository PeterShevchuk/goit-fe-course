import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import "./Phonebook.css";

class Phonebook extends Component {
  state = {
    name: "",
    number: "",
  };
  stateDefault = {
    name: "",
    number: "",
  };
  inputHeandler = ({ target }) => {
    const { value, name } = target;
    if (value === "" || name === "") {
      return;
    }
    this.setState({ [name]: value });
  };
  checkContact = (e) => {
    if (this.state.name === "" || this.state.number === "") {
      alert("Заповніть поля");
      return;
    }
    e.preventDefault();
    let obj = { id: uuidv4(), name: this.state.name, number: this.state.number };
    this.props.addContact(obj);
    this.setState(this.stateDefault);
  };

  render() {
    return (
      <form className="form">
        <label>
          <b>Name</b>
          <br />
          <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={(e) => this.inputHeandler(e)}></input>
        </label>
        <label>
          <b>Number</b>
          <br />
          <input type="text" name="number" placeholder="Number" value={this.state.number} onChange={(e) => this.inputHeandler(e)}></input>
        </label>
        <input className="form__send" type="button" value="submit" onClick={(e) => this.checkContact(e)}></input>
      </form>
    );
  }
}

export default Phonebook;
