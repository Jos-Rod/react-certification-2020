import React from 'react';
import { NiceInputStyled, PLabelStyled } from './NiceInput.styling';

const NiceInput = ({ value, setValue, placeholder, withLabel, isPassword = false }) => {
  function handleOnChange(e) {
    setValue(e.target.value);
  }

  return (
    <>
      {withLabel && <PLabelStyled>{withLabel}:</PLabelStyled>}
      <NiceInputStyled
        value={value}
        onChange={handleOnChange}
        placeholder={placeholder}
        type={isPassword ? 'password' : 'text'}
      />
    </>
  );
};

export default NiceInput;
