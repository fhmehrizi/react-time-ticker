import {RefObject} from "react";
import {Styles} from "../TimeTicker/TimeTicker.types";

export interface DigitProps {
    current: number,
    styles: Styles,
    reference?: RefObject<HTMLDivElement>,
}