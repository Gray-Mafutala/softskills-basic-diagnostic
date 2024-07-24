import { useState } from "react";
import i18n from "../i18n";

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const chooseLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    i18n.changeLanguage(e.target.value);
    setSelectedLanguage(e.target.value);
    localStorage.setItem("lang", e.target.value);
  };

  return (
    <div className="relative flex items-center">
      <select
        defaultValue={selectedLanguage}
        onChange={chooseLanguage}
        className="w-full outline-none cursor-pointer rounded-lg px-4 py-2 font-semibold
        border-2 border-dark-blue"
      >
        <option value="en" className="px-4 py-2">
          English
        </option>
        <option value="fr" className="px-4 py-2">
          Français
        </option>
      </select>

      <span className="absolute right-2">
        <svg
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6 fill-none stroke-current stroke-[2]"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </span>
    </div>
  );
};

export default LanguageSelector;
