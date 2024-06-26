import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('getFullYear', () => {
  it('returns the correct year', () => {
    const year = new Date().getFullYear();
    expect(getFullYear()).toBe(year);
  });
});

describe('getFooterCopy', () => {
  it('returns the correct string when the argument is true', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
  });

  it('returns the correct string when the argument is false', () => {
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
  });
});

describe('getLatestNotification', () => {
  it('returns the correct string', () => {
    expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
  });
});
