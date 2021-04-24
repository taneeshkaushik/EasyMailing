import { InheritedColorConfig } from '@nivo/colors';
import { CompletePieSvgProps, ComputedDatum, PieArcGenerator, LabelAccessorFunction, PieCustomLayerProps, RadialLabelData, SliceLabelData } from './types';
interface MayHaveLabel {
    label?: string | number;
}
/**
 * Format data so that we get a consistent data structure.
 * It will also add the `formattedValue` and `color` property.
 */
export declare const useNormalizedData: <RawDatum extends MayHaveLabel>({ data, id, value, valueFormat, colors, }: Pick<CompletePieSvgProps<RawDatum>, "id" | "value" | "valueFormat" | "colors"> & {
    data: RawDatum[];
}) => Pick<ComputedDatum<RawDatum>, "color" | "id" | "label" | "value" | "formattedValue" | "data">[];
/**
 * Compute arcs, which don't depend yet on radius.
 */
export declare const usePieArcs: <RawDatum>({ data, startAngle, endAngle, padAngle, sortByValue, }: {
    data: Pick<ComputedDatum<RawDatum>, "color" | "id" | "label" | "value" | "formattedValue" | "data">[];
    startAngle: number;
    endAngle: number;
    padAngle: number;
    sortByValue: boolean;
}) => Pick<ComputedDatum<RawDatum>, "color" | "arc" | "id" | "label" | "value" | "formattedValue" | "data">[];
export declare const usePieArcGenerator: ({ radius, innerRadius, cornerRadius, }: {
    radius: number;
    innerRadius: number;
    cornerRadius: number;
}) => PieArcGenerator;
/**
 * Compute pie layout using explicit radius/innerRadius,
 * expressed in pixels.
 */
export declare const usePie: <RawDatum>({ data, radius, innerRadius, startAngle, endAngle, padAngle, sortByValue, cornerRadius, }: Pick<CompletePieSvgProps<RawDatum>, "sortByValue" | "padAngle" | "cornerRadius" | "startAngle" | "endAngle"> & {
    data: Pick<ComputedDatum<RawDatum>, "color" | "fill" | "id" | "label" | "value" | "formattedValue" | "data">[];
    radius: number;
    innerRadius: number;
}) => {
    dataWithArc: Pick<ComputedDatum<RawDatum>, "color" | "arc" | "id" | "label" | "value" | "formattedValue" | "data">[];
    arcGenerator: PieArcGenerator;
};
/**
 * Compute pie layout using a box to find radius/innerRadius,
 * expressed in ratio (0~1), can optionally use the `fit`
 * attribute to find the most space efficient layout.
 *
 * It also returns `centerX`/`centerY` as those can be altered
 * if `fit` is `true`.
 */
export declare const usePieFromBox: <RawDatum>({ data, width, height, innerRadius: innerRadiusRatio, startAngle, endAngle, padAngle, sortByValue, cornerRadius, fit, }: Pick<CompletePieSvgProps<RawDatum>, "height" | "width" | "sortByValue" | "innerRadius" | "padAngle" | "cornerRadius" | "startAngle" | "endAngle" | "fit"> & {
    data: Pick<ComputedDatum<RawDatum>, "color" | "fill" | "id" | "label" | "value" | "formattedValue" | "data">[];
}) => {
    centerX: number;
    centerY: number;
    radius: number;
    innerRadius: number;
    debug: {
        box: any;
        ratio: number;
        points: any;
    } | undefined;
    dataWithArc: Pick<ComputedDatum<RawDatum>, "color" | "arc" | "id" | "label" | "value" | "formattedValue" | "data">[];
    arcGenerator: PieArcGenerator;
};
export declare const usePieSliceLabels: <RawDatum>({ enable, dataWithArc, skipAngle, radius, innerRadius, radiusOffset, label, textColor, }: {
    enable: boolean;
    dataWithArc: ComputedDatum<RawDatum>[];
    skipAngle: number;
    radius: number;
    innerRadius: number;
    radiusOffset: number;
    label: string | LabelAccessorFunction<RawDatum>;
    textColor: InheritedColorConfig<ComputedDatum<RawDatum>>;
}) => SliceLabelData<RawDatum>[];
export declare const usePieRadialLabels: <RawDatum>({ enable, dataWithArc, label, textXOffset, textColor, radius, skipAngle, linkOffset, linkDiagonalLength, linkHorizontalLength, linkColor, }: {
    enable: boolean;
    dataWithArc: ComputedDatum<RawDatum>[];
    label: string | LabelAccessorFunction<RawDatum>;
    textXOffset: number;
    textColor: InheritedColorConfig<ComputedDatum<RawDatum>>;
    radius: number;
    skipAngle: number;
    linkOffset: number;
    linkDiagonalLength: number;
    linkHorizontalLength: number;
    linkColor: InheritedColorConfig<ComputedDatum<RawDatum>>;
}) => RadialLabelData<RawDatum>[];
/**
 * Memoize the context to pass to custom layers.
 */
export declare const usePieLayerContext: <RawDatum>({ dataWithArc, arcGenerator, centerX, centerY, radius, innerRadius, }: {
    dataWithArc: ComputedDatum<RawDatum>[];
    arcGenerator: PieArcGenerator;
    centerX: number;
    centerY: number;
    radius: number;
    innerRadius: number;
}) => PieCustomLayerProps<RawDatum>;
export {};
//# sourceMappingURL=hooks.d.ts.map