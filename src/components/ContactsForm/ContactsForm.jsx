import React, { useState, useRef, memo } from 'react';
import styled from 'styled-components';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import Button from 'components/Button/Button';

const ContactsForm = ({ onSubmit }) => {
  const [contactInfo, setContactInfo] = useState({ name: '', number: '' });

  const onInputChange = e => {
    const { name, value } = e.target;
    setContactInfo(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { name, number } = contactInfo;
    const form = e.target;
    onSubmit(name, number, form);

    form.reset();
  };

  const reset = () => {
    setContactInfo({ name: '', number: '' });
  };

  const nameId = useRef(nanoid());
  const numberId = useRef(nanoid());

  return (
    <StyledForm onSubmit={handleSubmit} onReset={reset}>
      <label htmlFor={nameId.current}>Name</label>
      <StyledInput
        onChange={onInputChange}
        value={contactInfo.name}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        id={nameId.current}
      />

      <label htmlFor={numberId.current}>Number</label>
      <StyledInput
        id={numberId.current}
        onChange={onInputChange}
        value={contactInfo.number}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />

      <Button />
    </StyledForm>
  );
};

export default memo(ContactsForm);

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 200px;
`;

const StyledInput = styled.input`
  margin-bottom: 10px;
`;

ContactsForm.propTypes = {
  onSubmit: PropTypes.func,
};
