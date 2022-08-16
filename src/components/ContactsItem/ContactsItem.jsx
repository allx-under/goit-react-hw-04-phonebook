import React from 'react';

import { StyledBtn } from 'components/Button/Button';

const ContactsItem = ({ name, number, id, onClick }) => {
  return (
    <li>
      <p>
        {name}: {number}{' '}
        <StyledBtn onClick={() => onClick(id)} type="button">
          Delete
        </StyledBtn>
      </p>
    </li>
  );
};

export default ContactsItem;
