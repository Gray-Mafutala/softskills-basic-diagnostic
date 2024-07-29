import { useTranslation } from "react-i18next";
import DisplayFrame from "../components/DisplayFrame";
import LanguageSelector from "../components/LanguageSelector";
import TopBar from "../components/TopBar";

const ChooseLanguage = () => {
  const { t } = useTranslation();

  return (
    <main className="flex flex-col items-center gap-y-9">
      <TopBar tab="chooseLanguage" />

      <DisplayFrame
        linkNextBtn="/welcome"
        innerWrapperStyles="flex flex-col gap-y-2 w-[360px]"
      >
        <h2 className="text-lg font-medium"> {t("chooseLang")}</h2>
        <LanguageSelector />
      </DisplayFrame>
    </main>
  );
};

export default ChooseLanguage;
