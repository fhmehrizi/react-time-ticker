export interface Styles {
    labelBg?: string,
    labelColor?: string,
    labelFontSize?: string,
    labelPaddingY?: string,
    fontFamily?: string,
    separatorColor?: string,
    verticalSeparatorColor?: string,
    digitBg?: string,
    digitColor?: string,
    digitFontSize?: string,
    digitWidth?: string,
    digitHeight?: string,
}
export interface DisplayUnitsConfig {
    years?: boolean,
    months?: boolean,
    days?: boolean,
    hours?: boolean,
    minutes?: boolean,
    seconds?: boolean
}
export interface Labels {
    years?: string,
    months?: string,
    days?: string,
    hours?: string,
    minutes?: string,
    seconds?: string
}
export interface Time {
    years: number[],
    months: number[],
    days: number[],
    hours: number[],
    minutes: number[],
    seconds: number[],
}
export interface TimeTickerProps {
    initialSeconds: number,
    displayUnitsConfig?: DisplayUnitsConfig,
    onTimesUp?: () => void
    customStyles?: Styles,
    labels?: Labels,
    showLabels?: boolean,
    emphasizeLabels?: boolean,
    isDoubleLine?: boolean,
}