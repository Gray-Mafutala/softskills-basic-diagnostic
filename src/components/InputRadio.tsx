type InputRadioProps = {
  label: string;
  onChange: () => void;
  checked: boolean;
};

const InputRadio = ({ label, onChange, checked }: InputRadioProps) => {
  return (
    <label className="flex items-center gap-x-3 cursor-pointer first-letter-uppercase select-none">
      <input
        type="radio"
        name="answers"
        className="min-w-5 min-h-5 rounded-full border-2 border-dark-blue cursor-pointer
        hover:border-pink checked:border-8 checked:border-pink duration-300 peer"
        onChange={onChange}
        checked={checked}
      />
      {label.charAt(0).toLocaleUpperCase().concat(label.slice(1))}
    </label>
  );
};

export default InputRadio;
