import React from "react";
import {DisplayUnitsConfig, Styles} from "../TimeTicker/TimeTicker.types";

export interface TimeUnitProps {
    unitKey: 'years' | 'months' | 'days' | 'hours' | 'minutes' | 'seconds',
    value: number[],
    label: string,
    unitsToShow: Required<DisplayUnitsConfig>,
    showLabels: boolean,
    emphasizeLabels: boolean,
    finalStyles: Styles,
    digitBox: React.RefObject<HTMLDivElement>,
    labelBox: React.RefObject<HTMLDivElement>
}