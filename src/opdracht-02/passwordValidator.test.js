import { validatePassword } from './passwordValidator';

describe('Password Validator', () => {
  
  // VOORBEELD - Deze test is al ingevuld
  test('VOORBEELD: geldig wachtwoord geeft isValid true', () => {
    const result = validatePassword('Welkom123');
    expect(result.isValid).toBe(true);
    expect(result.errors).toEqual([]);
  });

  test('te kort wachtwoord geeft error', () => {
    const result = validatePassword('Test1');

    expect(result.isValid).toBe(false);
    expect(result.errors).toContain('Password must be at least 8 characters');
  });

  test('wachtwoord zonder nummer geeft error', () => {
    const result = validatePassword('Welkomtestje');

    expect(result.isValid).toBe(false);
    expect(result.errors).toContain('Password must contain a number');
  });

  test('wachtwoord zonder hoofdletter geeft error', () => {
    const result = validatePassword('welkom123');

    expect(result.isValid).toBe(false);
    expect(result.errors).toContain('Password must contain an uppercase letter');
  });

  test('errors array bevat juiste foutmeldingen', () => {
    const result = validatePassword('test');

    expect(result.isValid).toBe(false);

    expect(result.errors).toContain('Password must be at least 8 characters');
    expect(result.errors).toContain('Password must contain a number');
    expect(result.errors).toContain('Password must contain an uppercase letter');
  });

});