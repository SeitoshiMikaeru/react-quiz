import {useEffect} from "react";
import {useQuiz} from "../context/QuizProvider";

export default function Timer() {
    const {dispatch, secondsRemaining} = useQuiz();
    const min = Math.floor(secondsRemaining / 60);
    const secs = secondsRemaining % 60;

    useEffect(() => {
        const id = setInterval(() => {
            dispatch({type: "tick"});
        }, 1000);

        return () => {
            clearInterval(id);
        };
    }, [dispatch]);

    return (
      <div className="timer">
          {min < 10 ? `0${min}` : min}:{secs < 10 ? `0${secs}` : secs}
      </div>
    );
}