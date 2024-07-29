import { useTranslation } from "react-i18next";
import DisplayFrame from "../components/DisplayFrame";
import TopBar from "../components/TopBar";

const Welcome = () => {
  const { t } = useTranslation();

  return (
    <main className="flex flex-col items-center gap-y-9">
      <TopBar tab="welcome" />

      <DisplayFrame
        linkNextBtn="/quiz"
        linkPrevBtn="/"
        btnToGoForward="start"
        showPrevBtn={true}
        innerWrapperStyles="w-[360px]"
      >
        <h1 className="text-5xl/snug text-center font-bold uppercase">
          {t("welcome.part1")} <br />
          <span className="text-pink">{t("welcome.part2")}</span>
        </h1>
      </DisplayFrame>
    </main>
  );
};

export default Welcome;
