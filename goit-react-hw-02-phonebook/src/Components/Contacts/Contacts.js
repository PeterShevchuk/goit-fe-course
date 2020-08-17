import React from "react";

import "./Contacts.css";

const Сontacts = ({ contacts, removeContact }) => {
  return (
    <ul className="contacts__list">
      {contacts.map((contact) => (
        <li key={contact.id} className="contacts__item">
          <span>
            {contact.name}: {contact.number}
          </span>
          <button className="contacts__item-delete" onClick={() => removeContact(contact.id)}>
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Сontacts;
