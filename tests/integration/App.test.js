import '@testing-library/jest-dom';

import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import App from '../../src/App';

expect.extend(toHaveNoViolations);

describe('App Component', () => {
  test('App integrates form submission and result display, and has no accessibility violations', async () => {
    const mockFetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve([{ id: 1, name: 'Test Name', email: 'Test Email' }]),
      })
    );

    global.fetch = mockFetch;

    const { container } = render(<App />);

    let axeResults = await axe(container);

    expect(axeResults).toHaveNoViolations();

    const searchInput = screen.getByLabelText(/Search for users:/i);

    const searchButton = screen.getByText(/Search!/i);

    fireEvent.change(searchInput, { target: { value: 'test' } });

    fireEvent.click(searchButton);

    expect(mockFetch).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/users?name_like=test'
    );

    const resultItem = await screen.findByText(/Test Name/i);

    expect(resultItem).toBeInTheDocument();
    expect(screen.getByText(/Test Email/i)).toBeInTheDocument();

    axeResults = await axe(container);

    expect(axeResults).toHaveNoViolations();
  });
});
