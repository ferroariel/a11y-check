import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import SearchForm from '../../src/components/SearchForm';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('SearchForm Component', () => {
  test('renders without accessibility violations', async () => {
    const { container } = render(<SearchForm onSearch={() => {}} />);

    const results = await axe(container, {
      runOnly: {
        type: 'tag',
        values: ['wcag2a', 'wcag2aa'], // Targets WCAG 2.1 A and AA
      },
    });

    expect(results).toHaveNoViolations();
  });
});
