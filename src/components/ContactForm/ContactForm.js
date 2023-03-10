import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { FormBox, Label, Input, FormButton } from './ContactForm.styled';

class ContactForm extends Component {
  static propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

  state = {
    name: '',
    number: ''
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);

    const contact = {
      id: nanoid(4),
      name: this.state.name,
      number: this.state.number,
    };

    this.props.onSubmit(contact);

    // this.props.onSubmit(this.state);

    this.setState({ name: '' , number: ''});
  };

  render() {
    return (
      <FormBox onSubmit={this.handleSubmit} autocomplete="off">
        <Label>Name</Label>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={this.state.name}
          onChange={this.handleChange}
        />
        <Label>Number</Label>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={this.state.number}
          onChange={this.handleChange}
        />

        <FormButton type="submit">Add contact</FormButton>
      </FormBox>
    );
  }
}

export default ContactForm;
