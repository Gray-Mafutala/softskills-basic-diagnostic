import DisplayFrame from "./DisplayFrame";

type QuestionCardProps = {
  question: string;
  answers: string[];
};

const QuestionCard = ({ question, answers }: QuestionCardProps) => {


  return (
    <DisplayFrame>
      <h2 className="text-4xl font-bold font-titillium-web text-center capitalize"> {question} </h2>
      <p className="mt-6">{JSON.stringify(answers)}</p>
    </DisplayFrame>
  );
};

export default QuestionCard;
