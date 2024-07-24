import { useTranslation } from "react-i18next";
import DisplayFrame from "../components/DisplayFrame";
import InputRadio from "../components/InputRadio";

const Quiz = () => {
  const { t } = useTranslation();

  return (
    <main>
      <DisplayFrame
        linkNextBtn="/quiz"
        innerWrapperStyles="flex flex-col gap-y-4"
      >
        {/* question */}
        <h1 className="text-lg/tight font-semibold">
          {t("quiz.question1.question")}
        </h1>

        {/* answers */}
        <div className="flex flex-col gap-y-3">
          {t("quiz.question1.answers")
            .split("|")
            .map((option, index) => (
              <InputRadio key={index} label={option} />
            ))}
        </div>
      </DisplayFrame>
    </main>
  );
};

export default Quiz;
