import React from "react";

export type Countdown = (initialNumber: number, callback: () => void) => [number, React.Dispatch<React.SetStateAction<number>>];
export type UseCountdownReturn = [number, React.Dispatch<React.SetStateAction<number>>];