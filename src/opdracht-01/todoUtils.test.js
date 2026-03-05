import { isValidTodo, getTodoPriority } from './todoUtils';

describe('Todo Utils', () => {

  test('isValidTodo geeft true voor normale tekst', () => {
    expect(isValidTodo('Boodschappen doen')).toBe(true);
  });

  test('isValidTodo geeft false voor lege string', () => {
    expect(isValidTodo('')).toBe(false);
  });

  test('isValidTodo geeft false voor string met alleen spaties', () => {
    expect(isValidTodo('   ')).toBe(false);
  });

  test('isValidTodo geeft false voor niet-string input', () => {
    expect(isValidTodo(123)).toBe(false);
    expect(isValidTodo(null)).toBe(false);
    expect(isValidTodo(undefined)).toBe(false);
  });

  test('getTodoPriority geeft high voor urgent', () => {
    expect(getTodoPriority('urgent bellen')).toBe('high');
  });

  test('getTodoPriority geeft medium voor snel', () => {
    expect(getTodoPriority('snel boodschappen doen')).toBe('medium');
  });

  test('getTodoPriority geeft low voor normale todo', () => {
    expect(getTodoPriority('koffie drinken')).toBe('low');
  });

});