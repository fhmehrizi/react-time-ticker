import {useEffect, useRef, useState} from "react";
import {Countdown, UseCountdownReturn} from "./UseCountDown.types";

const useCountdown: Countdown = (initialSeconds, onTimesUp): UseCountdownReturn => {
    const [secondsRemaining, setSecondsRemaining] = useState<number>(initialSeconds);
    const initialRender = useRef(true);

    useEffect(() => {
        if (initialRender.current) {
            initialRender.current = false;
            setSecondsRemaining((prev) => {
                if (prev <= 0) {
                    onTimesUp();
                    return 0;
                }
                return prev - 1;
            });
        }
        const countdown = setInterval(() => {
            setSecondsRemaining((prev) => {
                if (prev <= 0) {
                    clearInterval(countdown);
                    onTimesUp();
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return (): void => clearInterval(countdown);
    }, [onTimesUp]);

    return [secondsRemaining, setSecondsRemaining];
}

export default useCountdown;