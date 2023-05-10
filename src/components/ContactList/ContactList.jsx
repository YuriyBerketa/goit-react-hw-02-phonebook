import React from "react";
import PropTypes from 'prop-types';
import { Contacts, ContactsLi, BTN } from './ContactList.styled';

export const ListContact = ({ contacts, onContactDelete }) => (
    <Contacts>
        {contacts.map((e) => 
            <ContactsLi key={e.id}>
                <span>{e.name} {e.number}</span>
                <BTN onClick={()=> onContactDelete(e.id)}>Delete</BTN>
        </ContactsLi>)}
    </Contacts>
)

ListContact.propTypes = {
    contacts: PropTypes.arrayOf(Object).isRequired,
    onContactDelete: PropTypes.func.isRequired,
}