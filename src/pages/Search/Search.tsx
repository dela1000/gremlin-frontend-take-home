import { useSelector, useDispatch } from 'react-redux';
import { setPackagesResults } from '../../redux/slices/SearchSlice';
import { getPackages } from '../../adapters/adapters';
import { Package } from '../../types/types';
import StringInput from '../../components/StringInput/StringInput';
import ListItem from '../../components/ListItem/ListItem';
import Button from '../../components/Button/Button';
import { displayErrorModal } from '../../redux/slices/ErrorModalSlice';
import { displayLoadingOverlay } from '../../redux/slices/LoadingOverlaySlice';
import { findExactMatch } from './helpers';

/**
 * Handle user search input and display search results, with error handling.
 * @returns {JSX.Element} Component to search and display search results.
 */

const Search = () => {
  const dispatch = useDispatch();
  const searchString = useSelector(({ searchSlice }) => searchSlice.searchString);
  const packages = useSelector(({ searchSlice }) => searchSlice.packagesResults);

  const handleGetSearchPackages = async () => {
    if (searchString.trim() !== '') {
      dispatch(displayLoadingOverlay(true));
      dispatch(displayErrorModal({ display: false, errorMessage: '' }));
      dispatch(setPackagesResults([]));
      try {
        const response = await getPackages(searchString);

        if (response && response.data && Array.isArray(response.data) && response.data.length > 0) {
          const dataWithExactMatch = findExactMatch(response.data, searchString);

          dispatch(setPackagesResults(dataWithExactMatch));
        } else if (response.errorMessage) {
          dispatch(
            displayErrorModal({
              display: true,
              errorMessage: `An error occurred. ${response.errorMessage}`,
            }),
          );
        } else {
          dispatch(displayErrorModal({ display: true, errorMessage: 'No results found' }));
        }
        dispatch(displayLoadingOverlay(false));
      } catch (error) {
        dispatch(
          displayErrorModal({
            display: true,
            errorMessage: `An error occurred. ${JSON.stringify(error)}`,
          }),
        );
        dispatch(displayLoadingOverlay(false));
      }
    }
  };

  return (
    <div className="bg-gray-50 flex-grow p-2 overflow-y-auto">
      <div className="flex bg-white p-4 shadow-md m-1">
        <StringInput handleSubmit={handleGetSearchPackages} />
        <Button buttonString="Search" onClick={handleGetSearchPackages} />
      </div>

      {packages.length > 0 && (
        <div className="bg-white p-4 shadow flex-1 m-1 overflow-y-auto">
          {packages.map((listItem: Package) => (
            <ListItem key={listItem.package.name} listItem={listItem} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
