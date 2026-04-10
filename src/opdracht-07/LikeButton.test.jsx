import { render, screen, fireEvent } from '@testing-library/react';
import LikeButton from './LikeButton';
 
describe('LikeButton', () => {
 
  test('initiële staat toont 0 likes en 🤍', () => {
    render(<LikeButton />);
 
    expect(screen.getByText(/0/)).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveTextContent('🤍');
  });
 
  test('klik verhoogt likes naar 1', () => {
    render(<LikeButton />);
   
    const button = screen.getByRole('button');
    fireEvent.click(button);
 
    expect(screen.getByText(/1/)).toBeInTheDocument();
  });
 
  test('button verandert van 🤍 naar ❤️ na klik', () => {
    render(<LikeButton />);
   
    const button = screen.getByRole('button');
    fireEvent.click(button);
 
    expect(button).toHaveTextContent(/❤️/);
  });
 
  test('meerdere kliks verhogen likes', () => {
    render(<LikeButton />);
   
    const button = screen.getByRole('button');
 
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
 
    expect(screen.getByText(/3/)).toBeInTheDocument();
  });
 
});