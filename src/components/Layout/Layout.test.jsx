import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from './Layout.component';

test('Renders children', () => {
    render(<Layout>
        <h1>This is a test</h1>
    </Layout>);
  
    const children = screen.getByText(/This is a test/i);
    expect(children).toBeInTheDocument();
  });