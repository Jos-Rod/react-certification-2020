import React from 'react';
import { NiceInputStyled, PLabelStyled } from './NiceInput.styling';

const NiceInput = ({ value, handleOnChange, placeholder, withLabel, isPassword = false }) => {

    return (
    <>
        { withLabel && <PLabelStyled>{withLabel}:</PLabelStyled> }
        <NiceInputStyled value={value} onChange={handleOnChange} placeholder={placeholder} type={isPassword ? "password": "text"} ></NiceInputStyled>
    </>
    )
}

export default NiceInput