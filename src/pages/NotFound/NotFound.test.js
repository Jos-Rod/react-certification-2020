import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

test('home button on not found page', () => {
    render(<ChannelCard channel={channelMock}></ChannelCard>);

    const title = screen.getByText(/Wizeline/i);
    expect(title).toBeInTheDocument();
});