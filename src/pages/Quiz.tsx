import { useTranslation } from "react-i18next";
import DisplayFrame from "../components/DisplayFrame";
import InputRadio from "../components/InputRadio";
import { useEffect, useState } from "react";
import EndResults from "../components/EndResults";

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
  const [isAnswerSelected, setIsAnswerSelected] = useState(false);

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

  useEffect(() => {
    setShuffledQuestionList(getShuffledQuestionsIndex());
  }, []);

  const goToNextQuestion = () => {
    if (!isAnswerSelected) {
      alert(t("selectAnswerAlert"));
      return;
    }

    if (indexCurrentQuestion < TOTAL_QUESTIONS) {
      setIndexCurrentQuestion((prevIndex) => prevIndex + 1);
      setIsAnswerSelected(false);
    }
  };

  const prevBtnClick = () => {
    if (indexCurrentQuestion > 1) {
      setIndexCurrentQuestion((prevIndex) => prevIndex - 1);
      // assumes an answer was selected for the previous question
      setIsAnswerSelected(true); 
    }
  };

  const handleAnswerSelect = (answerIndex: number) => {
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

    setIsAnswerSelected(true);
  };

  const getSelectedAnswerIndex = () => {
    const selectedAnswer = selectedAnswers.find(
      (answer) =>
        answer.questionIndex === shuffledQuestionList[indexCurrentQuestion - 1]
    );
    return selectedAnswer ? selectedAnswer.answerIndex : null;
  };

  return (
    <main>
      {indexCurrentQuestion <= TOTAL_QUESTIONS ? (
        <DisplayFrame
          linkNextBtn=""
          linkPrevBtn={indexCurrentQuestion === 1 ? "/welcome" : ""}
          innerWrapperStyles="flex flex-col gap-y-4 h-[340px] w-[460px]"
          nextBtnClick={goToNextQuestion}
          showPrevBtn={true}
          prevBtnClick={prevBtnClick}
        >
          {/* question */}
          <h1 className="text-lg/tight font-semibold">
            {indexCurrentQuestion +
              ". " +
              t(
                `quiz.question${
                  shuffledQuestionList[indexCurrentQuestion - 1]
                }.question`
              )}
          </h1>

          {/* answers */}
          <div className="flex flex-col gap-y-3">
            {t(
              `quiz.question${
                shuffledQuestionList[indexCurrentQuestion - 1]
              }.answers`
            )
              .split("|")
              .map((option, index) => (
                <InputRadio
                  key={index}
                  label={option.slice(0, option.length - 11)}
                  onChange={() => handleAnswerSelect(index + 1)} // Passer la fonction onChange ici
                  checked={getSelectedAnswerIndex() === index + 1}
                />
              ))}
          </div>
        </DisplayFrame>
      ) : (
        <EndResults overallScore={0} results={selectedAnswers} />
      )}
    </main>
  );
};

export default Quiz;
