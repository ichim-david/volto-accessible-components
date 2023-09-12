import React from 'react';
import { render } from '@testing-library/react';
import { Dropdown } from 'semantic-ui-react';
import '@testing-library/jest-dom/extend-expect';

const { axe, toHaveNoViolations } = require('jest-axe');
expect.extend(toHaveNoViolations);

describe('Dropdown', () => {
  it('renders without errors', async () => {
    const { container } = render(<Dropdown />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
