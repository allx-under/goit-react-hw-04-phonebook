import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Button from 'components/Button/Button';

const ContactsFilter = ({ filter, onChange }) => {
  return (
    <Wrapper>
      <StyledLabel>Find contacts by name</StyledLabel>
      <input name="filter" onChange={onChange} value={filter} />
    </Wrapper>
  );
};

export default ContactsFilter;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
`;

const StyledLabel = styled.label`
  margin-bottom: 10px;
`;

Button.propTypes = {
  filter: PropTypes.string,
};
