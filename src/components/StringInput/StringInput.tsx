import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateString } from '../../redux/slices/SearchSlice';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';

/**
 * StringInput for handling searching functionality.
 * @param {Function} handleSubmit - The function to call when the user submits the search.
 * @returns {JSX.Element} Input for entering and displaying a search string.
 */

type StringInputProps = {
  handleSubmit: () => void;
};

const StringInput = ({ handleSubmit }: StringInputProps) => {
  const dispatch = useDispatch();
  const searchString = useSelector(({ searchSlice }) => searchSlice.searchString);

  const [inputValue, setInputValue] = useState<string>(searchString);

  const handleKeyPress = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      dispatch(updateString(inputValue.trim()));
      if (searchString.trim() !== '') {
        handleSubmit();
      }
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (newValue.length <= 30) {
      dispatch(updateString(newValue.trim()));
      setInputValue(newValue);
    }
  };

  const handleClearClick = () => {
    dispatch(updateString(''));
    setInputValue('');
  };

  return (
    <div className="flex w-full relative">
      <div className="text-gremlin-purple absolute bg-transparent border-none px-2 left-1 mt-6 transform -translate-y-1/2">
        <SearchIcon />
      </div>
      <input
        type="text"
        name="StringInput"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Search npm"
        maxLength={50}
        onKeyUp={handleKeyPress}
        className="flex-1 px-10 border border-gremlin-purple rounded-none focus:outline-none w-full max-w-full"
      />
      {inputValue && (
        <button
          className="absolute bg-transparent border-none text-gremlin-purple hover:text-red-500 px-2 right-1 mt-6 transform -translate-y-1/2"
          onClick={handleClearClick}
        >
          <ClearIcon />
        </button>
      )}
    </div>
  );
};

export default StringInput;
