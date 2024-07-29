type TopBarProps = {
  tab: "chooseLanguage" | "welcome" | "quiz" | "end-results";
  activeQuestion?: number;
};

const TOTAL_QUESTIONS = 27;

const TopBar = ({ tab, activeQuestion = 0 }: TopBarProps) => {
  return (
    <header className="flex items-center">
      <a href="/" className="bg-dark-blue p-2 rounded-full text-white mr-3">
        <span>
          <svg
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6 stroke-current fill-none stroke-[2]"
          >
            <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
            <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          </svg>
        </span>
      </a>

      {/* list of square */}
      {Array.from({ length: TOTAL_QUESTIONS }, (_, i) => {
        if (tab === "chooseLanguage" || tab === "welcome") {
          return (
            <span
              key={i}
              className={`w-5 h-5 bg-[#d8d8d8] border-b-[3px] border-b-[#00000040] border-r
            border-[#00000040] border-t-0`}
            ></span>
          );
        } else if (tab === "quiz" && i === activeQuestion - 1) {
          return (
            <span
              key={i}
              className={`w-5 h-5 bg-[#d8d8d8] border-b-[3px] border-b-[#00000040] border-r
              border-[#00000040] border-t-0 flex justify-center items-center`}
            >
              <span className="w-2 h-2 bg-dark-blue rounded-full"></span>
            </span>
          );
        } else if (tab === "quiz" && i < activeQuestion) {
          return (
            <span
              key={i}
              className={`w-5 h-5 bg-dark-blue border-b-[3px] border-[#00000040] border-r border-t-0`}
            ></span>
          );
        } else if (tab === "quiz" && i > activeQuestion) {
          return (
            <span
              key={i}
              className={`w-5 h-5 bg-[#d8d8d8] border-b-[3px] border-[#00000040] border-r border-t-0`}
            ></span>
          );
        }
      })}

      <span className="bg-dark-blue p-2 rounded-full text-white ml-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6 fill-none stroke-current stroke-[2]"
        >
          <path d="m3 17 2 2 4-4" />
          <path d="m3 7 2 2 4-4" />
          <path d="M13 6h8" />
          <path d="M13 12h8" />
          <path d="M13 18h8" />
        </svg>
      </span>
    </header>
  );
};

export default TopBar;
