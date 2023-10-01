import { useSelector } from 'react-redux';
import loading from '../../assets/loading.png';

/**
 * LoadingOverlay for displaying a loading spinner.
 * @returns {JSX.Element} Displays loading spinner.
 */

function LoadingOverlay() {
  const showLoadingModal = useSelector(({ loadingOverlaySlice }) => loadingOverlaySlice.display);

  return (
    <div
      className={`z-50 fixed top-0 left-0 w-full h-full flex items-center justify-center ${
        showLoadingModal ? '' : 'hidden'
      }`}
    >
      <div className="animate-spin w-12 h-12">
        <img src={loading} alt="logo" />
      </div>
    </div>
  );
}

export default LoadingOverlay;
