import { useSelector, useDispatch } from 'react-redux';
import { displayErrorModal } from '../../redux/slices/ErrorModalSlice';
import Button from '../../components/Button/Button';

/**
 * ErrorModal for displaying error messages.
 * @returns {JSX.Element} A component for presenting error messages to the user.
 */

function ErrorModal() {
  const dispatch = useDispatch();

  const showErrorModal = useSelector(({ errorModalSlice }) => errorModalSlice.display);
  const errorMessage = useSelector(({ errorModalSlice }) => errorModalSlice.errorMessage);

  const closeModal = () => {
    dispatch(displayErrorModal({ display: false, errorMessage: '' }));
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${
        showErrorModal ? '' : 'hidden'
      }`}
    >
      <div
        className="fixed top-0 left-0 w-full h-full bg-gray-600 opacity-30"
        onClick={closeModal}
      ></div>

      <div className="relative bg-white px-24 py-4 shadow-md text-center">
        <div className="py-4">
          <p>{errorMessage}</p>
        </div>
        <div className="py-4">
          <Button buttonString="close" onClick={closeModal} />
        </div>
      </div>
    </div>
  );
}

export default ErrorModal;
