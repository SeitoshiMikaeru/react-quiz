import {useQuiz} from "../context/QuizProvider";

export default function StartScreen() {
    const {questions, dispatch} = useQuiz();
    const amount = questions.length;

    return (
      <div className="start">
          <h2>Welcome to the React Quiz!</h2>
          <h3>{amount} questions to test React Mastery!</h3>
          <button className="btn btn-ui" onClick={() => dispatch({type: "start"})}>Let's start!</button>
      </div>
    );
}