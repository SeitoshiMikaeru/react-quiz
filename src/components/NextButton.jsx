import {useQuiz} from "../context/QuizProvider";

export default function NextButton() {
    const {dispatch, answer, questions, index} = useQuiz();
    const numQuestions = questions.length;
    const isAnswered = answer !== null;
    const isFinished = index + 1 === numQuestions;
    return (
        <>
            {
                isAnswered &&
                <button
                    className="btn btn-ui"
                    onClick={() => dispatch({type: isFinished ? "finished" : "nextQuestion"})}
                >
                    {isFinished ? "Finish" : "Next"}
                </button>
            }
        </>
    );
}