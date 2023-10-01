import { Package } from '../../types/types';
import { createTimeString, handleLinkClick, handleUsernameClick } from './helpers';

/**
 * ListItem component for displaying individual package information.
 * @param {Package} listItem - The package to display.
 * @returns {JSX.Element} List element displaying package details.
 */

type ListItemTypes = {
  listItem: Package;
};

const ListItem = ({ listItem }: ListItemTypes) => {
  const pkg = listItem.package;
  return (
    <div
      className="bg-white p-4 border-b border-gremlin-purple hover:bg-gray-100 cursor-pointer"
      onClick={() => handleLinkClick(pkg.links.npm)}
    >
      <div className="flex justify-between items-center">
        <div className="font-bold text-lg">{pkg.name}</div>
        {listItem.exactMatch ? (
          <div className="ml-4 bg-gremlin-purple text-gray-50 py-1 px-2 rounded-md text-xs">
            Exact Match
          </div>
        ) : null}
      </div>
      <div className="text-gray-500 mt-1">
        <div className="max-h-12 overflow-hidden">{pkg.description}</div>
      </div>
      {pkg.keywords && pkg.keywords.length ? (
        <div className="flex flex-wrap my-2">
          {pkg.keywords.map((keyword: string) => (
            <div
              key={keyword}
              className="mr-2 my-1.5 bg-gray-200 hover:bg-gray-300 text-gray-800 py-1 px-2 rounded-md text-xs"
            >
              {keyword}
            </div>
          ))}
        </div>
      ) : null}

      <div className="ml-0.5">
        <div className="flex flex-row items-center text-sm text-black-80">
          {pkg?.publisher?.username && (
            <span
              onClick={(e) => handleUsernameClick(e, pkg.publisher.username)}
              className="pr-2 font-semibold text-black-70 cursor-pointer"
            >
              {pkg.publisher.username}
            </span>
          )}
          <div className="flex-grow-1">version {pkg.version}</div>
        </div>
        <div className="mt-2">
          <div className="text-xs">Original Release: {createTimeString(pkg.date)}</div>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
