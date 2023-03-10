import React from "react";
import PropTypes from 'prop-types';
import {ContactBox, ContactItem, ContactItemTitle, ContactItemNumber, ContactListButton } from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => (
    <ContactBox>
        {contacts.map(({ id, name, number }) => (
            <ContactItem  key={id}>
                <ContactItemTitle>{name}: <ContactItemNumber>{number}</ContactItemNumber>
                </ContactItemTitle> 
                <ContactListButton onClick={() => onDeleteContact(id)}>Delete</ContactListButton>
            </ContactItem >
        ))}
    </ContactBox>
);

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
}

export default ContactList;