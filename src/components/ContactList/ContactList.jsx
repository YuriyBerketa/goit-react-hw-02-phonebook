import React from "react";
import PropTypes from 'prop-types';
import { Contacts, ContactsLi, Span } from './ContactList.styled';

export const ListContact = ({ contacts, onContactDelete }) => (
    <Contacts>
        {contacts.map((e) => 
            <ContactsLi key={e.id}>
                <Span>{e.name} {e.number}</Span>
                <button onClick={()=> onContactDelete(e.id)}>Delete</button>
        </ContactsLi>)}
    </Contacts>
)

ListContact.propTypes = {
    contacts: PropTypes.arrayOf(Object).isRequired,
    onContactDelete: PropTypes.func.isRequired,
}