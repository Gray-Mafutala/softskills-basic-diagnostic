import { Route, Routes } from "react-router-dom";
import ChooseLanguage from "./pages/ChooseLanguage";
import Welcome from "./pages/Welcome";
import Quiz from "./pages/Quiz";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<ChooseLanguage />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </>
  );
};

export default App;
