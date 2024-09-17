/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import {FC, useCallback, useEffect, useRef, useState} from "react";
import {DigitProps} from "./Digit.types";

const Digit:FC<DigitProps> = ({current, styles = {}, reference}) => {
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [transitionPosition, setTransitionPosition] = useState('-100%');
    const [activeDigit, setActiveDigit] = useState(current);
    const RenderCounter = useRef(0);

    const handleDigitTransition = useCallback((): void => {
        setIsTransitioning(true);
        setTimeout(() => setTransitionPosition('0'), 100);
        setTimeout(() => setActiveDigit(current), 800);
        setTimeout(() => {
            setIsTransitioning(false);
            setTransitionPosition('-100%');
        }, 900);
    }, [setIsTransitioning, current]);

    useEffect(() => {
        if (RenderCounter.current  < 2) {
            setActiveDigit(current);
            RenderCounter.current++;
        } else {
            handleDigitTransition();
        }
    }, [current, handleDigitTransition]);

    const digitWrapperStyles = css`
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 0.125rem;
        border-radius: 0.25rem;
        overflow: hidden;
        color: ${styles.digitColor};
        background-color: ${styles.digitBg};
        font-size: ${styles.digitFontSize};
        width: ${styles.digitWidth};
        height: ${styles.digitHeight};
    `;

    const activeDigitStyles = css`
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    `;

    const nextDigitStyles = css`
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: top 0.7s cubic-bezier(1, -0.54, 0.58, 1.96);
        top: ${transitionPosition};
        color: ${styles.digitColor};
        background-color: ${styles.digitBg};
        font-size: ${styles.digitFontSize};
    `;


    return (
        <div>
        <div ref={reference} css={digitWrapperStyles}>
            <div css={activeDigitStyles}>{activeDigit}</div>
            {isTransitioning && (
                <div css={nextDigitStyles}>
                    {current}
                </div>
            )}
        </div>
        </div>
    );
};

export default Digit;
