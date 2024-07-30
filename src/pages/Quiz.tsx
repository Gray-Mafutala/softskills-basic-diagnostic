import { useTranslation } from "react-i18next";
import DisplayFrame from "../components/DisplayFrame";
import InputRadio from "../components/InputRadio";
import { useEffect, useState } from "react";
import EndResults from "../components/EndResults";
import TopBar from "../components/TopBar";

type SelectedAnswer = {
  questionIndex: number;
  answerIndex: number;
};

const Quiz = () => {
  const { t } = useTranslation();

  const TOTAL_QUESTIONS = 27;

  const [indexCurrentQuestion, setIndexCurrentQuestion] = useState(1);
  const [shuffledQuestionList, setShuffledQuestionList] = useState<number[]>(
    []
  );

  const [selectedAnswers, setSelectedAnswers] = useState<SelectedAnswer[]>([]);

  useEffect(() => {
    // to display question randomly
    const getShuffledQuestionsIndex = () => {
      const array = Array.from(
        { length: TOTAL_QUESTIONS },
        (_, index) => index + 1
      );

      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }

      return array;
    };

    setShuffledQuestionList(getShuffledQuestionsIndex());
  }, []);

  const goToNextQuestion = () => {
    const selectedAnswer = [...selectedAnswers].find(
      ({ questionIndex }) =>
        questionIndex === shuffledQuestionList[indexCurrentQuestion - 1]
    );

    // if for this question, no answer is selected
    if (
      selectedAnswer &&
      selectedAnswer?.answerIndex >= 1 &&
      selectedAnswer?.answerIndex <= 4 &&
      indexCurrentQuestion <= TOTAL_QUESTIONS
    )
      setIndexCurrentQuestion((prevIndex) => prevIndex + 1);
    else alert(t("selectAnswerAlert"));
  };

  const prevBtnClick = () => {
    if (indexCurrentQuestion > 1) {
      setIndexCurrentQuestion((prevIndex) => prevIndex - 1);
    }
  };

  const handleAnswerSelect = (answerIndex: number) => {
    console.log(shuffledQuestionList[indexCurrentQuestion - 1], answerIndex);
    setSelectedAnswers((prevAnswers) => {
      const updatedAnswers = prevAnswers.filter(
        (answer) =>
          answer.questionIndex !==
          shuffledQuestionList[indexCurrentQuestion - 1]
      );
      updatedAnswers.push({
        questionIndex: shuffledQuestionList[indexCurrentQuestion - 1],
        answerIndex,
      });
      return updatedAnswers;
    });
  };

  const getSelectedAnswerIndex = () => {
    const selectedAnswer = [...selectedAnswers].find(
      ({ questionIndex }) =>
        questionIndex === shuffledQuestionList[indexCurrentQuestion - 1]
    );

    return selectedAnswer ? selectedAnswer.answerIndex : null;
  };

  return (
    <main className="flex flex-col items-center gap-y-9">
      <TopBar tab="quiz" activeQuestion={indexCurrentQuestion} />

      {indexCurrentQuestion <= TOTAL_QUESTIONS ? (
        <DisplayFrame
          linkNextBtn="" //{indexCurrentQuestion === TOTAL_QUESTIONS ? "/" : ""}
          linkPrevBtn={indexCurrentQuestion === 1 ? "/welcome" : ""}
          innerWrapperStyles="relative flex flex-col  h-[280px] w-[480px] pt-[3px] px-[3px]"
          nextBtnClick={goToNextQuestion}
          showPrevBtn={true}
          prevBtnClick={prevBtnClick}
        >
          {/* question */}
          <h1
            className="text-lg/tight font-semibold flex items-start gap-x-2 sticky top-0 bg-slate-100
            p-6 pb-4 z-10"
          >
            <span>{indexCurrentQuestion}.</span>
            {t(
              `quiz.question${
                shuffledQuestionList[indexCurrentQuestion - 1]
              }.question`
            )}
          </h1>

          {/* answers */}
          <div className="flex flex-col gap-y-3 px-6">
            {t(
              `quiz.question${
                shuffledQuestionList[indexCurrentQuestion - 1]
              }.answers`
            )
              .split("|")
              .map((option, index) => {
                console.log("option:", option);

                return (
                  <InputRadio
                    key={index}
                    label={option.slice(0, option.length - 11)}
                    onChange={() => handleAnswerSelect(index + 1)}
                    checked={getSelectedAnswerIndex() === index + 1}
                  />
                );
              })}
          </div>
        </DisplayFrame>
      ) : (
        <EndResults results={selectedAnswers} />
      )}
    </main>
  );
};

export default Quiz;
