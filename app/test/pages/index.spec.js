import { renderWithProviders, screen } from '../test-utils';
import HomePage from 'pages/index';

describe('HomePage', () => {
  it('should render the heading', () => {
    renderWithProviders(<HomePage />);

    const heading = screen.getByText(/Welcome/i);

    expect(heading).toBeInTheDocument();
  });
});
