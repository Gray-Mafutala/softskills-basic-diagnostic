import { useTranslation } from "react-i18next";
import DisplayFrame from "./DisplayFrame";

type OverallRating = "low" | "average" | "high";
type SelectedAnswer = {
  questionIndex: number;
  answerIndex: number;
};

type EndResultsProps = {
  overallScore: number;
  results: SelectedAnswer[];
};

const EndResults = ({ overallScore, results }: EndResultsProps) => {
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

  const getHeaderBgColor = () => {
    const rating = getOverallRating(overallScore);
    if (rating === "low") return "bg-red-500/60";
    else if (rating === "average") return "bg-yellow-500/60";
    else return "bg-lime-500/60";
  };

  return (
    <DisplayFrame
      linkNextBtn="www.feed.bb.coms"
      btnToGoForward="end-feedback"
      innerWrapperStyles="flex flex-col gap-y-4 h-[340px] w-[460px]"
    >
      {/* header */}
      <div
        className={`${getHeaderBgColor()} border-2 border-dark-blue border-dashed rounded-lg px-2 py-1 flex items-center justify-between`}
      >
        <h1 className="text-xl text-center font-bold uppercase">
          {t("endResults.title")}
        </h1>

        <p className="text-sm font-semibold">
          {t("endResults.overallScore")}:{" "}
          <span className="font-bold">
            {overallScore}/{MAX_SCORE}
          </span>
        </p>
      </div>

      {/* results and comments */}
      <div className="border-dashed border-4 border-dark-blue">
        {JSON.stringify(results)}
      </div>
    </DisplayFrame>
  );
};

export default EndResults;
