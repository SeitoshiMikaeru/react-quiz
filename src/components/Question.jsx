import Options from "./Options";
import {useQuiz} from "../context/QuizProvider";

export default function Question() {
    const {questions, index, dispatch, answer} = useQuiz();
    const question = questions[index];

    return (
      <div className="question">
          <h4>{question.question}</h4>

          <Options question={question} dispatch={dispatch} answer={answer}/>
      </div>
    );
}