import { ComputedDatum, CompletePieSvgProps } from './types';
interface RadialLabelsProps<RawDatum> {
    dataWithArc: ComputedDatum<RawDatum>[];
    label: CompletePieSvgProps<RawDatum>['radialLabel'];
    skipAngle: CompletePieSvgProps<RawDatum>['radialLabelsSkipAngle'];
    radius: number;
    linkOffset: CompletePieSvgProps<RawDatum>['radialLabelsLinkOffset'];
    linkDiagonalLength: CompletePieSvgProps<RawDatum>['radialLabelsLinkDiagonalLength'];
    linkHorizontalLength: CompletePieSvgProps<RawDatum>['radialLabelsLinkHorizontalLength'];
    linkStrokeWidth: CompletePieSvgProps<RawDatum>['radialLabelsLinkStrokeWidth'];
    textXOffset: CompletePieSvgProps<RawDatum>['radialLabelsTextXOffset'];
    textColor: CompletePieSvgProps<RawDatum>['radialLabelsTextColor'];
    linkColor: CompletePieSvgProps<RawDatum>['radialLabelsLinkColor'];
}
export declare const RadialLabels: <RawDatum>({ dataWithArc, label, radius, skipAngle, linkOffset, linkDiagonalLength, linkHorizontalLength, linkStrokeWidth, textXOffset, textColor, linkColor, }: RadialLabelsProps<RawDatum>) => JSX.Element;
export {};
//# sourceMappingURL=RadialLabels.d.ts.map