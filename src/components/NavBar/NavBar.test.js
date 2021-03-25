import React from 'react';
import { render, screen } from '@testing-library/react';
import NavBar from './NavBar.component';

test('document includes search button', () => {
    render(<NavBar />);

    const button = screen.getByText(/Search/i, { selector: 'button' });
    expect(button).toBeInTheDocument();
  });

test('document includes dark mode label', () => {
    render(<NavBar />);

    const labelDarkMode = screen.getByText(/Dark Mode/i);
    expect(labelDarkMode).toBeInTheDocument();
  });

  test('document includes text from the data provided', () => {
    render(<NavBar />);
  
    const searchPlaceholder = screen.getByPlaceholderText(/Search.../i);
    expect(searchPlaceholder).toBeInTheDocument();
  });
  