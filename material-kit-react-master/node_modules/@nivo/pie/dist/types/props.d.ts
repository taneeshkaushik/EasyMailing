import { OrdinalColorScaleConfig } from '@nivo/colors';
export declare const defaultProps: {
    id: string;
    value: string;
    sortByValue: boolean;
    innerRadius: number;
    padAngle: number;
    cornerRadius: number;
    layers: string[];
    startAngle: number;
    endAngle: number;
    fit: boolean;
    borderWidth: number;
    borderColor: {
        from: string;
        modifiers: import("./types").DatumFormattedValue[][];
    };
    radialLabel: string;
    enableRadialLabels: boolean;
    radialLabelsSkipAngle: number;
    radialLabelsLinkOffset: number;
    radialLabelsLinkDiagonalLength: number;
    radialLabelsLinkHorizontalLength: number;
    radialLabelsLinkStrokeWidth: number;
    radialLabelsTextXOffset: number;
    radialLabelsTextColor: {
        theme: string;
    };
    radialLabelsLinkColor: {
        theme: string;
    };
    enableSliceLabels: boolean;
    sliceLabel: string;
    sliceLabelsSkipAngle: number;
    sliceLabelsRadiusOffset: number;
    sliceLabelsTextColor: {
        theme: string;
    };
    colors: OrdinalColorScaleConfig<any>;
    defs: never[];
    fill: never[];
    isInteractive: boolean;
    tooltip: <RawDatum>({ datum }: {
        datum: import("./types").ComputedDatum<RawDatum>;
    }) => JSX.Element;
    legends: never[];
    role: string;
    pixelRatio: number;
};
//# sourceMappingURL=props.d.ts.map