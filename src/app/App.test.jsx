/* eslint-disable indent */
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('GIM app testing', () => {
    it('checks that main components did mount on initial load', async () => {
        const gim = render(<App />);

        //check that nav bar in header is there 
        const navList = screen.getByRole('list', { name: 'navList' });
        expect(navList).not.toBeEmptyDOMElement();

        //check that home page section includes three images
        const galleryImages = screen.getAllByAltText('cage');
        expect(galleryImages).toHaveLength(3);

        //check that footer is there
        const footerList = screen.getByRole('list', { name: 'footerList' });
        expect(footerList).not.toBeEmptyDOMElement();

    });
});
