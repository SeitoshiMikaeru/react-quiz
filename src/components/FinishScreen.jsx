import {useQuiz} from "../context/QuizProvider";

export default function FinishScreen() {
    const {points, highScore, dispatch, maxPoints} = useQuiz();
    const percentage = (points / maxPoints) * 100;

    return (
        <>
            <p className="result">
                You scored <strong>{points}</strong> points out of {maxPoints} : ({Math.ceil(percentage)}%)
            </p>
            <p className="highscore">
                (Highscore : <strong>{highScore}</strong> points)
            </p>
            <button className="btn btn-ui" onClick={() => dispatch({type: "restart"})}>Restart</button>
        </>
    );
}