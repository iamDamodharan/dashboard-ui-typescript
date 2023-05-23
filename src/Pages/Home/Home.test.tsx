import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, waitFor } from '@testing-library/react';
import Home from '.';

describe('Home page', () => {
    let originFetch = '' as never;
    beforeEach(() => {
        originFetch = (global as any).fetch as never;
    });
    afterEach(() => {
        (global as any).fetch = originFetch as never;
    });
    it('should pass', async () => {
        const fakeResponse = {
            id: 1,
            name: 'Name'
        };
        const mRes = { json: jest.fn().mockResolvedValueOnce(fakeResponse) };
        const mockedFetch = jest.fn().mockResolvedValueOnce(mRes as any);
        (global as any).fetch = mockedFetch;
        const { getByTestId } = render(<Home />);
        const div = await waitFor(() => getByTestId('name'));
        expect(div).toHaveTextContent('Name');
        expect(mockedFetch).toBeCalledTimes(1);
        expect(mRes.json).toBeCalledTimes(1);
    });
});