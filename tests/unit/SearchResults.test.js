import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchResults from '../../src/components/SearchResults';
import { toHaveNoViolations } from 'jest-axe';
import { axe } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('SearchResults Component', () => {
  const mockResults = [
    { id: 1, name: 'Leanne Graham', email: 'leanne@example.com' },
  ];

  test('renders results without accessibility violations', async () => {
    const { container } = render(<SearchResults results={mockResults} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
