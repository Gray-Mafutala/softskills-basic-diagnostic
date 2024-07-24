import { useTranslation } from "react-i18next";
import DisplayFrame from "../components/DisplayFrame";
import LanguageSelector from "../components/LanguageSelector";

const ChooseLanguage = () => {
  const { t } = useTranslation();

  return (
    <main className="flex flex-col">
      <DisplayFrame
        linkNextBtn="/welcome"
        innerWrapperStyles="flex flex-col gap-y-2"
        >
        <h2 className="text-lg font-medium"> {t("chooseLang")}</h2>
        <LanguageSelector />
      </DisplayFrame>
    </main>
  );
};

export default ChooseLanguage;
