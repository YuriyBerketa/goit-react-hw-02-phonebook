import React, { Component } from "react";
import {ListContact} from "./ContactList";
import data from './data/data.json';
import {Form} from './Form';
import { nanoid } from 'nanoid';
import {Filter} from "./Filter";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export class App extends Component {

  state = {
    contacts: data,
    filter: '',
  };
  
  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contactId !== contact.id)
    }))
  };

  ContactAdd = (data) => {

    if (this.state.contacts.filter(contact => contact.name === data.name).length > 0) {
      Notify.warning(`${data.name} is already in contacts`)
      return
    }

    const id = nanoid();
    const contact = { id: id, name: data.name, number: data.number };
    const contacts = [contact, ...this.state.contacts];

    this.setState({ contacts: contacts });
  };

  changeFilter = (event) => {
    this.setState({ filter: event.currentTarget.value })
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  }
  
  render() { 

    const visibleContacts = this.getVisibleContacts();

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <h1>Phonebook</h1>
        <Form onSubmit={this.ContactAdd} />

        <h2>Contacts</h2>
        <Filter
          filter={this.state.filter}
          onChange={this.changeFilter}
        />

        <ListContact
          contacts={visibleContacts}
          onContactDelete={this.deleteContact}
        />

      </div>
    )
  }
}
