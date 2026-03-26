import { calculateTotalScore, calculatePercentage, isPassed, getGrade, countWrongAnswers } from './quizScore';
 
describe('Quiz Score', () => {
  let quizAnswers;
 
  beforeEach(() => {
    // 5 pytań: 4 dobre, 1 zła = 80%
    quizAnswers = [
      { question: 1, isCorrect: true, points: 10 },
      { question: 2, isCorrect: true, points: 10 },
      { question: 3, isCorrect: false, points: 0 },
      { question: 4, isCorrect: true, points: 10 },
      { question: 5, isCorrect: true, points: 10 }
    ];
  });
 
  // VOORBEELD - Deze test is al ingevuld
  test('VOORBEELD: calculateTotalScore telt punten op', () => {
    const answers = [
      { question: 1, isCorrect: true, points: 10 },
      { question: 2, isCorrect: true, points: 15 }
    ];
    expect(calculateTotalScore(answers)).toBe(25);
  });
 
  test('calculatePercentage berekent juiste percentage', () => {
    const percentage = calculatePercentage(quizAnswers);
    expect(percentage).toBe(80); // 4/5 = 80%
  });
 
  test('isPassed geeft true bij 60% of hoger', () => {
    expect(isPassed(quizAnswers)).toBe(true); // 80% > 60%
  });
 
  test('isPassed geeft false bij lager dan 60%', () => {
    const answers = [
      { question: 1, isCorrect: true, points: 10 },
      { question: 2, isCorrect: false, points: 0 },
      { question: 3, isCorrect: false, points: 0 },
      { question: 4, isCorrect: true, points: 10 }
    ];
    expect(isPassed(answers)).toBe(false); // 50%
  });
 
  test('getGrade geeft Excellent bij 90%+', () => {
    const answers = [
      { question: 1, isCorrect: true, points: 10 },
      { question: 2, isCorrect: true, points: 10 },
      { question: 3, isCorrect: true, points: 10 },
      { question: 4, isCorrect: true, points: 10 },
      { question: 5, isCorrect: true, points: 10 }
    ];
    expect(getGrade(answers)).toBe('Excellent'); // 100%
  });
 
  test('getGrade geeft Goed bij 75-89%', () => {
    expect(getGrade(quizAnswers)).toBe('Goed'); // 80%
  });
 
  test('countWrongAnswers telt foute antwoorden', () => {
    const wrong = countWrongAnswers(quizAnswers);
    expect(wrong).toBe(1); // 1 foute antwoord
  });
 
});
 