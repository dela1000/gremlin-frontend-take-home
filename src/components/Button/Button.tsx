type ButtonProps = {
  buttonString: string;
  onClick: () => void;
};

/**
 * Basic Button component.
 * @param {string} props.buttonString - The text to display on the button.
 * @param {function} props.onClick - The function to call when the button is clicked.
 * @returns {JSX.Element} A button element with the specified text.
 */

const Button = ({ buttonString, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className="px-6 py-3 text-white bg-gremlin-purple ml-0">
      {buttonString}
    </button>
  );
};

export default Button;
