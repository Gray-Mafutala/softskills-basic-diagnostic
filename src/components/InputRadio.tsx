type InputRadioProps = {
  label: string;
  onChange: () => void;
  checked: boolean;
};

const InputRadio = ({ label, onChange, checked }: InputRadioProps) => {
  return (
    <label
      className="flex items-center gap-x-3 cursor-pointer first-letter-uppercase select-none
      group"
    >
      <span className="relative flex items-center">
        <input
          type="radio"
          name="answers"
          className="min-w-5 min-h-5 rounded-full border-2 border-dark-blue cursor-pointer
          hover:bg-dark-blue checked:bg-dark-blue active:scale-95 duration-300"
          onChange={onChange}
          checked={checked}
        />

        {checked && (
          <span className="absolute text-white">
            <svg
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 fill-none stroke-[3] stroke-current"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </span>
        )}
      </span>

      {label.charAt(0).toLocaleUpperCase().concat(label.slice(1))}
    </label>
  );
};

export default InputRadio;
