import { dateFormat } from './date';

describe('Date functionality', () => {
  const dateStr = '2010-09-16T15:13:46.677020+00:00';

  test('dateFormat should return current date for en-US locale', () => {
    expect(dateFormat(dateStr, 'en-US')).toBe('9/16/2010');
  });

  test('dateFormat should return current date for de-DE locale', () => {
    expect(dateFormat(dateStr, 'de-DE')).toBe('16.9.2010');
  });

  test('dateFormat should return current date for en-GB locale', () => {
    expect(dateFormat(dateStr, 'en-GB')).toBe('16/09/2010');
  });
});
