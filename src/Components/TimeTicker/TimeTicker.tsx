/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import {FC, useMemo, useRef} from "react";
import {computeTimeUnits} from "../../Utility/time-util";
import useCountdown from "../../Hooks/useCountdown";
import TimeUnit from "../TimeUnit/TimeUnit";
import {DisplayUnitsConfig, Labels, Styles, Time, TimeTickerProps} from "./TimeTicker.types";


const TimeTicker: FC<TimeTickerProps> = ({
                                        initialSeconds = 0,
                                        displayUnitsConfig = {},
                                        onTimesUp = (): void => {
                                        },
                                        customStyles = {},
                                        labels = {},
                                        showLabels = true,
                                        emphasizeLabels = true,
                                        isDoubleLine = false,
                                    }) => {

    const [secondsRemaining] = useCountdown(initialSeconds, onTimesUp);
    //Get the remaining time in Years, Month, Days, Hours, Minutes, Seconds in double digits
    const timeUnits: Time = useMemo(() => computeTimeUnits(secondsRemaining), [secondsRemaining]);

    const unitsToShow: Required<DisplayUnitsConfig> = useMemo(() => {
        const defaultUnits: Required<DisplayUnitsConfig> = {
            years: true,
            months: true,
            days: true,
            hours: true,
            minutes: true,
            seconds: true
        };
        if (!Object.keys(displayUnitsConfig).length) {
            return defaultUnits
        }
        return {
            years: displayUnitsConfig?.years ?? false,
            months: displayUnitsConfig?.months ?? false,
            days: displayUnitsConfig?.days ?? false,
            hours: displayUnitsConfig?.hours ?? false,
            minutes: displayUnitsConfig?.minutes ?? false,
            seconds: displayUnitsConfig?.seconds ?? false,
        };
    }, [displayUnitsConfig]);


    const mergedLabels: Required<Labels> = useMemo(() => {
        return {
            years: labels?.years ?? 'Years',
            months: labels?.months ?? 'Months',
            days: labels?.days ?? 'Days',
            hours: labels?.hours ?? 'Hours',
            minutes: labels?.minutes ?? 'Minutes',
            seconds: labels?.seconds ?? 'Seconds'
        }
    }, [labels]);

    const finalStyles: Required<Styles> = useMemo((): Required<Styles> => {
        const defaultStyles: Required<Styles> = {
            labelBg: '#1f2937',
            labelColor: '#f9fafb',
            labelFontSize: '0.6875rem',
            labelPaddingY: '0.3rem',
            fontFamily: 'sans-serif',
            separatorColor: '#1f2937',
            verticalSeparatorColor: '#1f2937',
            digitBg: '#1f2937',
            digitColor: '#f9fafb',
            digitFontSize: '0.875rem',
            digitWidth: '1.75rem',
            digitHeight: '2rem',
        };
        return {
            labelBg: customStyles.labelBg ?? defaultStyles.labelBg,
            labelColor: customStyles.labelColor ?? defaultStyles.labelColor,
            labelFontSize: customStyles.labelFontSize ?? defaultStyles.labelFontSize,
            labelPaddingY: customStyles.labelPaddingY ?? defaultStyles.labelPaddingY,
            fontFamily: customStyles.fontFamily ?? defaultStyles.fontFamily,
            separatorColor: customStyles.separatorColor ?? defaultStyles.separatorColor,
            verticalSeparatorColor: customStyles.verticalSeparatorColor ?? defaultStyles.verticalSeparatorColor,
            digitBg: customStyles.digitBg ?? defaultStyles.digitBg,
            digitColor: customStyles.digitColor ?? defaultStyles.digitColor,
            digitFontSize: customStyles.digitFontSize ?? defaultStyles.digitFontSize,
            digitWidth: customStyles.digitWidth ?? defaultStyles.digitWidth,
            digitHeight: customStyles.digitHeight ?? defaultStyles.digitHeight,
        };
    }, [customStyles]);

    const digitBox = useRef<HTMLDivElement>(null);
    const labelBox = useRef<HTMLDivElement>(null);

    const containerStyles = css`
        display: ${isDoubleLine ? 'grid' : 'flex'};
        grid-template-columns: 1fr;
        justify-items: center;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: stretch;
    `;

    const digitGroupWrapperStyles = css`
        display: flex;
        margin: 0.25rem 0;
    `;

    const verticalSeparatorWrapperStyles = css`
        padding: 6px 0;
    `;

    const verticalSeparatorStyles = css`
        display: ${isDoubleLine ? 'none' : 'flex'};
        margin: 0 6px;
        border-radius: 0.5rem;
        width: 4px;
        height: 100%;
        background-color: ${finalStyles.verticalSeparatorColor};
    `;

    return (
        <div css={containerStyles}>

            <div css={digitGroupWrapperStyles}>
                <TimeUnit unitKey={'years'} value={timeUnits.years} label={mergedLabels.years} unitsToShow={unitsToShow}
                          showLabels={showLabels} emphasizeLabels={emphasizeLabels} finalStyles={finalStyles}
                          digitBox={digitBox} labelBox={labelBox} />
                <TimeUnit unitKey={'months'} value={timeUnits.months} label={mergedLabels.months}
                          unitsToShow={unitsToShow} showLabels={showLabels} emphasizeLabels={emphasizeLabels}
                          finalStyles={finalStyles} digitBox={digitBox} labelBox={labelBox} />
                <TimeUnit unitKey={'days'} value={timeUnits.days} label={mergedLabels.days} unitsToShow={unitsToShow}
                          showLabels={showLabels} emphasizeLabels={emphasizeLabels} finalStyles={finalStyles}
                          digitBox={digitBox} labelBox={labelBox} />
            </div>

            {((unitsToShow.years || unitsToShow.months || unitsToShow.days) && (unitsToShow.seconds || unitsToShow.minutes || unitsToShow.hours)) && (
                <div css={verticalSeparatorWrapperStyles}>
                    <div css={verticalSeparatorStyles}>&nbsp;</div>
                </div>
            )}

            <div css={digitGroupWrapperStyles}>
                <TimeUnit unitKey={'hours'} value={timeUnits.hours} label={mergedLabels.hours} unitsToShow={unitsToShow}
                          showLabels={showLabels} emphasizeLabels={emphasizeLabels} finalStyles={finalStyles}
                          digitBox={digitBox} labelBox={labelBox} />
                <TimeUnit unitKey={'minutes'} value={timeUnits.minutes} label={mergedLabels.minutes}
                          unitsToShow={unitsToShow} showLabels={showLabels} emphasizeLabels={emphasizeLabels}
                          finalStyles={finalStyles} digitBox={digitBox} labelBox={labelBox} />
                <TimeUnit unitKey={'seconds'} value={timeUnits.seconds} label={mergedLabels.seconds}
                          unitsToShow={unitsToShow} showLabels={showLabels} emphasizeLabels={emphasizeLabels}
                          finalStyles={finalStyles} digitBox={digitBox} labelBox={labelBox} />
            </div>
        </div>
    );
};

export default TimeTicker;
