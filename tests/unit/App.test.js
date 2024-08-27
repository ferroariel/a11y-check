import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from '../../src/App';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('App Component', () => {
  test('renders without accessibility violations', async () => {
    const { container } = render(<App />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
