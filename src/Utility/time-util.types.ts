import {Time} from "../Components/TimeTicker/TimeTicker.types";

export type ComputeTime = (seconds: number) => Time
export type PadWithZeroType = (number: number, length: number) => string
export type getDigitsType = (number: number) => number[]