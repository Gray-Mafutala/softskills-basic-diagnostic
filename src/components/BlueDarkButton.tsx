import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

type BlueDarkButtonProps = {
  link?: string;
  addStyles?: string;
  onClick?: () => void;
  btnType?: "prev" | "next" | "start" | "end-feedback";
};

const BlueDarkButton = ({
  link = "",
  addStyles = "",
  onClick,
  btnType = "next",
}: BlueDarkButtonProps) => {
  const { t } = useTranslation();
  return (
    <Link
      to={link}
      onClick={onClick}
      className={`bg-dark-blue rounded-lg px-4 py-2 text-white font-semibold flex items-center gap-x-4 ${addStyles}`}
    >
      {btnType === "prev" && ""}
      {btnType === "next" && t("button.next")}
      {btnType === "start" && t("button.start")}

      <span className={btnType === "prev" ? "-order-1 rotate-180" : ""}>
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

export default BlueDarkButton;
