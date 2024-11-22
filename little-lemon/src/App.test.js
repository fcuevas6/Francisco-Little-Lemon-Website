import { render, screen, fireEvent } from '@testing-library/react';
import Reservations from './components/pages/reservations/Reservations';
import BookingForm from './components/pages/reservations/BookingForm';
import * as api from "./utils/api"
import { BrowserRouter } from 'react-router-dom';

jest.mock("./utils/api")

test('renders the booking page heading', () => {
  render(
    <BrowserRouter>
      <Reservations />
    </BrowserRouter>
  );
  const headingElement = screen.getByText("Join us for dinner");
  expect(headingElement).toBeInTheDocument();
});

describe("BookingForm", () => {
  beforeEach(() => {
    api.fetchAPI.mockReturnValue(["17:00", "18:00", "19:00"])
  })

  test("initializeTimes fetches available times", () => {
    render(<BookingForm onSubmit={jest.fn()} />)

    const timeSelect = screen.getByLabelText(/time/i)
    expect(timeSelect).toBeInTheDocument()

    expect(screen.getByText("17:00")).toBeInTheDocument()
    expect(screen.getByText("18:00")).toBeInTheDocument()
    expect(screen.getByText("19:00")).toBeInTheDocument()
  })
})