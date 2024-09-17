/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Digit from "../Digit/Digit";
import Separator from "../Separator/Separator";
import {FC} from "react";
import {TimeUnitProps} from "./TimeUnit.types";

const TimeUnit: FC<TimeUnitProps> = ({unitKey, value, label,unitsToShow, showLabels, emphasizeLabels, finalStyles, digitBox, labelBox}) => {
    if (!unitsToShow[unitKey]) return null;

    const timeUnitWrapperStyles = css`
    position: relative;
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: center;
    align-items: center;
    font-family: ${finalStyles.fontFamily};
  `;

    const labelWrapperStyles = css`
        margin-top: 0.25rem;
        width: 100%;
    `;

    const labelStyles = css`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 0.25rem;
    margin: 0 0.125rem;
    font-size: ${finalStyles.labelFontSize};
    background-color: ${finalStyles.labelBg};
    color: ${finalStyles.labelColor};
    padding: ${finalStyles.labelPaddingY} 0;
    font-weight: ${emphasizeLabels ? 'bold' : 'normal'};
  `;

    return (
        <>
            <div css={timeUnitWrapperStyles} >
                <div style={{height: '100%'}}>
                    <Separator condition={unitKey === 'seconds' && (unitsToShow.minutes || unitsToShow.hours)} finalStyles={finalStyles} />
                    <Separator condition={unitKey === 'minutes' && unitsToShow.hours} finalStyles={finalStyles} />
                    <Separator condition={unitKey === 'days' && (unitsToShow.months || unitsToShow.years)} finalStyles={finalStyles} />
                    <Separator condition={unitKey === 'months' && unitsToShow.years} finalStyles={finalStyles} />
                </div>
                <div style={{display: "flex"}}>
                <Digit current={value[0]} styles={finalStyles} reference={digitBox} />
                <Digit current={value[1]} styles={finalStyles} />
                </div>
                {showLabels && (
                    <>
                        <div></div>
                    <div ref={labelBox} css={labelWrapperStyles}>
                        <p css={labelStyles}>{label}</p>
                    </div>
                    </>
                )}
            </div>
        </>
    );
};

export default TimeUnit;