global.fetch = require('node-fetch');
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import NewsSearch from './NewsSearch';
// import Search from '../components/articles/Search'

describe('NewsSearch container', () => {
    it('changes the search results', () => {
        render(<NewsSearch />);

        const display = screen.getByTestId('display');
        // const searchInput = screen.getByTestId('search-bar');
        const searchInput = screen.getByLabelText('Search Bar');
        const submitButton = screen.getByText('Search')
        fireEvent.change(searchInput, {
            target: {
                value: 'news'
            }
        });
        fireEvent.submit(submitButton);

        return waitFor(() => {
            expect(display).toHaveTextContent('news');
        });

        // screen.getByTestId()
        // screen.getByAltText()
        // screen.getByDisplayValue()
        // screen.getByLabelText
        // screen.getByText
        // screen.getByTitle
    });
});
