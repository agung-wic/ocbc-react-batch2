import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders halaman home dengan benar', () => {
  render(<App />);
  const title = screen.getByText(/why do we need test ?/i)
  expect(title).toBeInTheDocument();

  const button = screen.getByRole('button')
  expect(button).toBeInTheDocument()
  expect(button).toHaveTextContent('User List')

  fireEvent.click(button)

  const backToHomeButton = screen.getByRole('button')
  expect(backToHomeButton).toBeInTheDocument()
  expect(backToHomeButton).toHaveTextContent('Back To Home')

});
