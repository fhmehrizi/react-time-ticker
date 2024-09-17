import {ComputeTime, getDigitsType, PadWithZeroType} from "./time-util.types";

export const computeTimeUnits: ComputeTime  = (totalSeconds) => {
    const padWithZeroes: PadWithZeroType = (number, length) => String(number).padStart(length, "0");
    const getDigits: getDigitsType = (number) => padWithZeroes(number, 2).split("").map(Number);

    return {
        years: getDigits(Math.floor(totalSeconds / (365 * 24 * 60 * 60))),
        months: getDigits(Math.floor(totalSeconds / (30 * 24 * 60 * 60)) % 12),
        days: getDigits(Math.floor(totalSeconds / (24 * 60 * 60)) % 30),
        hours: getDigits(Math.floor((totalSeconds / (60 * 60)) % 24)),
        minutes: getDigits(Math.floor((totalSeconds / 60) % 60)),
        seconds: getDigits(totalSeconds % 60),
    };
};
