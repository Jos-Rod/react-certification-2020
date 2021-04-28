import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Favourites from './Favourites.page';
import SiteInfoProvider from '../../providers/SiteInfoProvider/SiteInfo.provider';
import mock from '../../components/mock/youtube-videos-mock.json';

const channelMock = mock.items[0];
const videosMock = [mock.items[1], mock.items[2], mock.items[3], mock.items[4]];

const setup = () => {
    render(<SiteInfoProvider><Favourites videoList={videosMock}  ></Favourites></SiteInfoProvider>);
}

test('Favourite Videos title exists', () => {
    setup();

    const relatedVideosLabel = screen.getByText(/Favourite videos/i);
    expect(relatedVideosLabel).toBeInTheDocument();
});

test('Title of video on list is rendered correctly', () => {
    setup();

    const titleOfVideo = screen.getByText(/We Are Wizeline/i);
    const descriptionVideo = screen.getByText(/En el 2014, Bismarck fundó Wizeline, compañía tecnológica que trabaja con los corporativos ofreciendo una plataforma para que desarrollen software de forma .../i);
    expect(titleOfVideo).toBeInTheDocument();
    expect(descriptionVideo).toBeInTheDocument();
});