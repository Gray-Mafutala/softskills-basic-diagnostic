import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

type ButtonNextProps = {
  link: string;
  addStyles?: string;
  caption?: string;
};

const ButtonNext = ({
  link,
  addStyles,
  caption = "button.next",
}: ButtonNextProps) => {
  const { t } = useTranslation();
  return (
    <Link
      to={link}
      className={`bg-dark-blue rounded-lg px-4 py-2 text-white font-semibold flex items-center gap-x-4 ${addStyles}`}
    >
      {t(`${caption}`)}
      <span>
        <svg
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6 fill-none stroke-current stroke-[2]"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </span>
    </Link>
  );
};

export default ButtonNext;
