import { CompletePieSvgProps, ComputedDatum } from './types';
interface SliceLabelsProps<RawDatum> {
    dataWithArc: ComputedDatum<RawDatum>[];
    label: CompletePieSvgProps<RawDatum>['sliceLabel'];
    radiusOffset: CompletePieSvgProps<RawDatum>['sliceLabelsRadiusOffset'];
    radius: number;
    innerRadius: number;
    skipAngle: CompletePieSvgProps<RawDatum>['sliceLabelsSkipAngle'];
    textColor: CompletePieSvgProps<RawDatum>['sliceLabelsTextColor'];
}
export declare const SliceLabels: <RawDatum>({ dataWithArc, label: labelAccessor, radius, innerRadius, radiusOffset, skipAngle, textColor, }: SliceLabelsProps<RawDatum>) => JSX.Element;
export {};
//# sourceMappingURL=SliceLabels.d.ts.map