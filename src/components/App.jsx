import React, { Component } from 'react';
import styled from 'styled-components';
import Contacts from 'components/Contacts/Contacts';
import ContactsForm from './ContactsForm/ContactsForm';
import ContactsFilter from './ContactsFilter/ContactsFilter';
import Title from 'components/Title/Title';

import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  onSubmitAddToContacts = (name, number, form) => {
    const sameName = this.state.contacts.find(contact => contact.name === name);
    if (sameName) {
      alert('This contact is already in your list');
      return form.reset();
    }

    const contact = {
      name,
      number,
      id: nanoid(),
    };

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, contact],
      };
    });
  };

  onInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onClickDelete = idToDel => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== idToDel),
    });
  };

  componentDidMount() {
    try {
      this.setState({
        contacts: JSON.parse(localStorage.getItem('contacts')) || [],
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <Container>
        <Title title="Phonebook" />
        <ContactsForm onSubmit={this.onSubmitAddToContacts} />
        <Title title="Contacts" />
        <ContactsFilter
          onChange={this.onInputChange}
          filter={this.state.filter}
        />
        <Contacts
          onClick={this.onClickDelete}
          nameList={this.state.contacts.filter(contact =>
            contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
          )}
        />
      </Container>
    );
  }
}

export default App;

const Container = styled.div`
  margin: 0 20px;
`;
