import React, { Component } from 'react';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        {/* <ContactForm /> */}

        <h2>Contacts</h2>
        {/* <Filter />
      <ContactList /> */}
      </div>
    );
  }
  // return (
  //   // <div
  //   //   style={{
  //   //     height: '100vh',
  //   //     display: 'flex',
  //   //     justifyContent: 'center',
  //   //     alignItems: 'center',
  //   //     fontSize: 40,
  //   //     color: '#010101',
  //   //   }}
  //   // >
  //   //   React homework template
  //   // </div>
  // );
}
