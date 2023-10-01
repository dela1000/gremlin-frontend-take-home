/**
 * Navigates to package's npm page.
 * @param {string} link - Link to the npm package.
 * @return {void}
 */

export const handleLinkClick = (link: string) => {
  window.open(link, '_blank', 'noreferrer');
};

/**
 * Navigates to package's username page.
 * @param {string} username - Username string for navigation.
 * @return {void}
 */

export const handleUsernameClick = (e: React.MouseEvent, username: string) => {
  e.stopPropagation();
  window.open(`https://www.npmjs.com/~${username}`, '_blank', 'noreferrer');
};

/**
 * Readable time since last update date.
 * @param {string} dateString - The published date string.
 * @return {string} Readable date string.
 */

export const createTimeString = (dateString: string): string => {
  const date = new Date(dateString);
  const currentDate = new Date();

  const timeDifference = currentDate.getTime() - date.getTime();
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (years > 0) {
    return years === 1 ? '1 year ago' : `${years} years ago`;
  } else if (months > 0) {
    return months === 1 ? '1 month ago' : `${months} months ago`;
  } else if (days > 0) {
    return days === 1 ? '1 day ago' : `${days} days ago`;
  } else if (hours > 0) {
    return hours === 1 ? '1 hour ago' : `${hours} hours ago`;
  } else if (minutes > 0) {
    return minutes === 1 ? '1 minute ago' : `${minutes} minutes ago`;
  } else {
    return seconds <= 10 ? 'just now' : `${seconds} seconds ago`;
  }
};
