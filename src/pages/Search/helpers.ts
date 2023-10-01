import { Package } from '../../types/types';

/**
 * Find and add exact match in packages' list.
 * @param {Package[]} packages - Array of packages.
 * @param {string} searchString - String to match against package names.
 * @returns {Package[]} An array of packages with an "exactMatch" key indicating
 * the matched package.
 */

export const findExactMatch = (packages: Package[], searchString: string) => {
  return packages.map((Package) => {
    const isExactMatch = Package.package.name === searchString;
    return {
      ...Package,
      exactMatch: isExactMatch,
    };
  });
};
