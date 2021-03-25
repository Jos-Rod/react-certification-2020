import React from 'react';
import { render, screen } from '@testing-library/react';
import VideoCard from './VideoCard.component';



describe('VideoCard component displays correctly properties', () => {
    

    test('title property correctly displayed', () => {
        render(<VideoCard title="This is the displayed title" description="This is de desired description" />);
        const title = screen.getByText(/This is the displayed title/i);
        
        expect(title).toBeInTheDocument();
    });

    test('description property correctly displayed', () => {
        render(<VideoCard title="This is the displayed title" description="This is de desired description" />);
        const title = screen.getByText(/This is de desired description/i);
        expect(title).toBeInTheDocument();
    });
});