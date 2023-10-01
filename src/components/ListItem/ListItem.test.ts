import { handleLinkClick, handleUsernameClick, createTimeString } from './helpers';

describe('handleLinkClick', () => {
  it('should open the npm package in a new tab', () => {
    const windowOpenMock = jest.fn();
    const originalOpen = global.window.open;
    global.window.open = windowOpenMock;

    const link = 'https://example.com';
    handleLinkClick(link);

    expect(windowOpenMock).toHaveBeenCalledWith(link, '_blank', 'noreferrer');

    global.window.open = originalOpen;
  });
});

describe('handleUsernameClick', () => {
  it('should open the npm user in a new tab', () => {
    const windowOpenMock = jest.fn();
    const originalOpen = global.window.open;
    global.window.open = windowOpenMock;

    const e: React.MouseEvent = {
      stopPropagation: jest.fn(),
      preventDefault: jest.fn(),
      currentTarget: document.createElement('span'),
    } as unknown as React.MouseEvent;
    const username = 'exampleUser';

    handleUsernameClick(e, username);

    expect(windowOpenMock).toHaveBeenCalledWith(
      `https://www.npmjs.com/~${username}`,
      '_blank',
      'noreferrer',
    );

    global.window.open = originalOpen;
  });
});

describe('createTimeString', () => {
  it('should return "just now" for the current time', () => {
    const now = new Date();
    expect(createTimeString(now.toISOString())).toBe('just now');
  });

  it('should return "1 minute ago" for a date 1 minute in the past', () => {
    const oneMinuteAgo = new Date(new Date().getTime() - 60000);
    expect(createTimeString(oneMinuteAgo.toISOString())).toBe('1 minute ago');
  });

  it('should return "5 minutes ago" for a date 5 minutes in the past', () => {
    const fiveMinutesAgo = new Date(new Date().getTime() - 300000);
    expect(createTimeString(fiveMinutesAgo.toISOString())).toBe('5 minutes ago');
  });

  it('should return "1 hour ago" for a date 1 hour in the past', () => {
    const oneHourAgo = new Date(new Date().getTime() - 3600000);
    expect(createTimeString(oneHourAgo.toISOString())).toBe('1 hour ago');
  });

  it('should return "1 day ago" for a date 1 day in the past', () => {
    const oneDayAgo = new Date(new Date().getTime() - 86400000);
    expect(createTimeString(oneDayAgo.toISOString())).toBe('1 day ago');
  });

  it('should return "1 month ago" for a date 1 month in the past', () => {
    const oneMonthAgo = new Date(new Date().getTime() - 2592000000);
    expect(createTimeString(oneMonthAgo.toISOString())).toBe('1 month ago');
  });

  it('should return "2 month ago" for a date 2 month in the past', () => {
    const oneMonthAgo = new Date(new Date().getTime() - 2 * 2592000000);
    expect(createTimeString(oneMonthAgo.toISOString())).toBe('2 months ago');
  });

  it('should return "5 months ago" for a date 5 months in the past', () => {
    const fiveMonthsAgo = new Date(new Date().getTime() - 5 * 2592000000);
    expect(createTimeString(fiveMonthsAgo.toISOString())).toBe('5 months ago');
  });

  it('should return "1 year ago" for a date 1 year in the past', () => {
    const oneYearAgo = new Date(new Date().getTime() - 31536000000);
    expect(createTimeString(oneYearAgo.toISOString())).toBe('1 year ago');
  });

  it('should return "2 years ago" for a date 2 years in the past', () => {
    const twoYearsAgo = new Date(new Date().getTime() - 2 * 31536000000);
    expect(createTimeString(twoYearsAgo.toISOString())).toBe('2 years ago');
  });

  it('should return "3 years ago" for a date 3 years in the past', () => {
    const twoYearsAgo = new Date(new Date().getTime() - 3 * 31536000000);
    expect(createTimeString(twoYearsAgo.toISOString())).toBe('3 years ago');
  });
});
