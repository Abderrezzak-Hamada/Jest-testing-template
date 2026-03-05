import {getRank, addScores, hasWon, getHighScore} from './gameUtils';

test('getRank returns correct rank based on score', () => {
  expect(getRank(0)).toBe('Beginner');
  expect(getRank(10)).toBe('Intermediate');
  expect(getRank(20)).toBe('Advanced');
  expect(getRank(30)).toBe('Expert');
});