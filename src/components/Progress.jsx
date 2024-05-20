import {useQuiz} from "../context/QuizProvider";

export default function Progress() {
    const {index, questions, points, answer, maxPoints} = useQuiz();
    const numQuestions = questions.length;
    return (
        <header className="progress">
            <progress max={numQuestions} value={index + Number(answer !== null)} />

            <p>Question <strong>{index + 1}</strong> / {numQuestions}</p>
            <p><strong>{points} / {maxPoints}</strong></p>
        </header>
    );
}