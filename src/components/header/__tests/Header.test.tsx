import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../Header';

test('fire event click on increment button', () => {
  render(<Header header='Hello' />);

  fireEvent.click(screen.getByText('Clique Aqui'));

  const valueIncremented = screen.getByText('101');

  expect(valueIncremented).toBeInTheDocument();
});

// test('render component 2', () => {
//   render(<Header header='Hello' />);

//   const valueIncremented = screen.getByText('102');

//   expect(valueIncremented).toBeInTheDocument();
// });

// test('render component', () => {
//   render(<Header header='Hello' />);

//   const valueIncremented = screen.getByText('100');

//   expect(valueIncremented).toBeInTheDocument();
// });

// test('render a text header', () => {
//   render(<Header header='Hello' />);
//   const linkElement = screen.getByText(/Hello/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test('render a link', () => {
//   render(<Header header='Hello' />);
//   const linkElement = screen.getByText(/Hello/i);
//   expect(linkElement).toBeInTheDocument();
// });
