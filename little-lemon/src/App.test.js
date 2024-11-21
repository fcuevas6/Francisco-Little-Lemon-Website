import { render, screen } from '@testing-library/react';
import Reservations from './components/pages/reservations/Reservations';

test('renders the booking page heading', () => {
  render(<Reservations />);
  const headingElement = screen.getByText("Join us for dinner");
  expect(headingElement).toBeInTheDocument();
});
