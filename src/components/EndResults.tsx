import { useTranslation } from "react-i18next";
import DisplayFrame from "./DisplayFrame";

type OverallRating = "low" | "average" | "high";
type SelectedAnswer = {
  questionIndex: number;
  answerIndex: number;
};

type EndResultsProps = {
  results: SelectedAnswer[];
};

const EndResults = ({ results }: EndResultsProps) => {
  const { t } = useTranslation();

  const MAX_SCORE = 216;

  const getOverallRating = (score: number): OverallRating => {
    // 33% of maxScore
    if (score < MAX_SCORE * 0.33) return "low";
    // 66% of maxScore
    else if (score < MAX_SCORE * 0.66) return "average";
    // > 66% of maxScore
    else return "high";
  };

  const getOverallScore = () => {
    const overallScore = results.reduce((acc, current) => {
      const answerText = t(
        `quiz.question${current.questionIndex}.answers`
      ).split("|")[current.answerIndex - 1];
      const scoreMatch = answerText.match(/<score: (\d+)>/);
      const score = scoreMatch ? parseInt(scoreMatch[1], 10) : 0;
      return acc + score;
    }, 0);

    return overallScore;
  };

  const getHeaderBgColor = () => {
    const rating = getOverallRating(getOverallScore());
    if (rating === "low") return "bg-red-300";
    else if (rating === "average") return "bg-yellow-300";
    else return "bg-lime-300";
  };

  return (
    <DisplayFrame
      linkNextBtn=""
      btnToGoForward="end-feedback"
      innerWrapperStyles="flex flex-col h-[280px] w-[480px] pt-[3px] px-[3px]"
    >
      {/* header */}
      <div className="sticky top-0 p-6 z-10 bg-slate-100">
        {/* inner wrapper */}
        <div
          onClick={getOverallScore}
          className={`${getHeaderBgColor()} border-2 border-dark-blue border-dashed rounded-lg
          flex items-center justify-between sticky top-0  px-2 py-1`}
        >
          <h1 className="text-xl text-center font-bold uppercase">
            {t("endResults.title")}
          </h1>

          <p className="text-sm font-semibold">
            {t("endResults.overallScore")}:{" "}
            <span className="font-bold">
              {getOverallScore()}/{MAX_SCORE}
            </span>
          </p>
        </div>
      </div>

      {/* results and comments */}
      <div className="mx-6 border-dashed border-2 p-1 border-dark-blue/40">
        {results.map((result, index) => (
          <div key={index} className="flex flex-col mb-4">
            <h2 className="font-bold">
              {index +
                1 +
                ". " +
                t(`quiz.question${result.questionIndex}.question`)}
            </h2>
            <h2 className="">
              {
                t(`quiz.question${result.questionIndex}.answers`).split("|")[
                  result.answerIndex - 1
                ]
              }
            </h2>
          </div>
        ))}
      </div>
    </DisplayFrame>
  );
};

export default EndResults;
