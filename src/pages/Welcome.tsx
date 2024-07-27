import { useTranslation } from "react-i18next";
import DisplayFrame from "../components/DisplayFrame";

const Welcome = () => {
  const { t } = useTranslation();

  return (
    <main>
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
