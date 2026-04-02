import { render, screen } from '@testing-library/react';
import ProfileCard from './ProfileCard';
 
describe('ProfileCard', () => {
  // VOORBEELD - Deze test is al ingevuld
  test('VOORBEELD: toont de naam', () => {
    render(<ProfileCard name='Jan' age={25} />);
    const result = screen.getByText('Jan');
    expect(result).toBeInTheDocument();
  });
 
  test('toont de leeftijd', () => {
    render(<ProfileCard name='Piet' age={30} />);
    const result = screen.getByText('Leeftijd: 30');
    expect(result).toBeInTheDocument();
  });
 
  test('toont bio als die er is', () => {
    render(<ProfileCard bio='Ik hou van programmeren' />);
    const result = screen.getByText('Ik hou van programmeren');
    expect(result).toBeInTheDocument();
  });
 
  test('toont fallback tekst als bio ontbreekt', () => {
    render(<ProfileCard />);
    // TODO: Render ProfileCard ZONDER bio prop
    const result = screen.getByText('Geen bio beschikbaar');
    // TODO: Check of "Geen bio beschikbaar" op het scherm staat
    expect(result).toBeInTheDocument();
  });
});