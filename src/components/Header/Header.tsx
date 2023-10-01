import { useDispatch, useSelector } from 'react-redux';
import { displayLoadingOverlay } from '../../redux/slices/LoadingOverlaySlice';
import getPackages from '../../adapters/adapters';
import { findExactMatch } from '../../pages/Search/helpers';
import { setPackagesResults } from '../../redux/slices/SearchSlice';
import { displayErrorModal } from '../../redux/slices/ErrorModalSlice';

/**
 * Basic Header component.
 * Clicking on "Search NPM" triggers the handleGetSearchPackages function.
 * To test errors, click on `Search NPM` without any text in the input field.
 * @returns {JSX.Element} A header element with a test function.
 */

const Header = () => {
  const dispatch = useDispatch();
  const searchString = useSelector(({ searchSlice }) => searchSlice.searchString);

  const handleGetSearchPackages = async () => {
    try {
      dispatch(setPackagesResults([]));
      dispatch(displayErrorModal({ display: false, errorMessage: '' }));
      dispatch(displayLoadingOverlay(true));
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
  };
  return (
    <header className="p-4 shadow-lg border-b border-gray-300">
      <div
        onClick={handleGetSearchPackages}
        className="text-xl text-gremlin-purple font-bold cursor-pointer"
      >
        Search NPM
      </div>
    </header>
  );
};

export default Header;
