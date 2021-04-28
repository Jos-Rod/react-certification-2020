import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import NiceInput from './NiceInput.component';

const setup = () => {
    render(<NiceInput placeholder="this is the placeholder"></NiceInput>);
}

test('Related videos label exists', () => {
    setup();
    const placeholderInput = screen.getByPlaceholderText('this is the placeholder');
    
    expect(placeholderInput).toBeInTheDocument();
});