import * as React from 'react';
import { Arc as ArcGenerator } from 'd3-shape';
import { Box, Dimensions, Theme, SvgDefsAndFill } from '@nivo/core';
import { OrdinalColorScaleConfig, InheritedColorConfig } from '@nivo/colors';
import { LegendProps } from '@nivo/legends';
export declare type DatumId = string | number;
export declare type DatumValue = number;
export declare type DatumFormattedValue = string | number;
export declare type ValueFormatter = (value: number) => DatumFormattedValue;
export interface DefaultRawDatum {
    id: DatumId;
    value: DatumValue;
}
export interface PieArc {
    index: number;
    startAngle: number;
    endAngle: number;
    angle: number;
    angleDeg: number;
    padAngle: number;
}
export interface ComputedDatum<RawDatum> {
    id: DatumId;
    label: DatumId;
    value: DatumValue;
    formattedValue: DatumFormattedValue;
    color: string;
    fill?: string;
    data: RawDatum;
    arc: PieArc;
}
export declare type DatumIdAccessorFunction<RawDatum> = (datum: RawDatum) => DatumId;
export declare type DatumValueAccessorFunction<RawDatum> = (datum: RawDatum) => DatumValue;
export declare type LabelAccessorFunction<RawDatum> = (datum: ComputedDatum<RawDatum>) => string | number;
export interface DataProps<RawDatum> {
    data: RawDatum[];
}
export interface PieTooltipProps<RawDatum> {
    datum: ComputedDatum<RawDatum>;
}
export declare type MouseEventHandler<RawDatum, ElementType = HTMLCanvasElement> = (datum: ComputedDatum<RawDatum>, event: React.MouseEvent<ElementType>) => void;
export declare type PieArcGenerator = ArcGenerator<any, PieArc>;
export declare type PieLayerId = 'slices' | 'radialLabels' | 'sliceLabels' | 'legends';
export interface PieCustomLayerProps<RawDatum> {
    dataWithArc: ComputedDatum<RawDatum>[];
    centerX: number;
    centerY: number;
    radius: number;
    innerRadius: number;
    arcGenerator: PieArcGenerator;
}
export declare type PieCustomLayer<RawDatum> = React.FC<PieCustomLayerProps<RawDatum>>;
export declare type PieLayer<RawDatum> = PieLayerId | PieCustomLayer<RawDatum>;
export declare type CommonPieProps<RawDatum> = {
    id: string | DatumIdAccessorFunction<RawDatum>;
    value: string | DatumValueAccessorFunction<RawDatum>;
    valueFormat?: string | ValueFormatter;
    margin: Box;
    sortByValue: boolean;
    innerRadius: number;
    padAngle: number;
    cornerRadius: number;
    startAngle: number;
    endAngle: number;
    fit: boolean;
    colors: OrdinalColorScaleConfig<Omit<ComputedDatum<RawDatum>, 'color' | 'fill' | 'arc'>>;
    theme: Theme;
    borderWidth: number;
    borderColor: InheritedColorConfig<ComputedDatum<RawDatum>>;
    enableRadialLabels: boolean;
    radialLabel: string | LabelAccessorFunction<RawDatum>;
    radialLabelsSkipAngle: number;
    radialLabelsTextXOffset: number;
    radialLabelsTextColor: InheritedColorConfig<ComputedDatum<RawDatum>>;
    radialLabelsLinkOffset: number;
    radialLabelsLinkDiagonalLength: number;
    radialLabelsLinkHorizontalLength: number;
    radialLabelsLinkStrokeWidth: number;
    radialLabelsLinkColor: InheritedColorConfig<ComputedDatum<RawDatum>>;
    enableSliceLabels: boolean;
    sliceLabel: string | LabelAccessorFunction<RawDatum>;
    sliceLabelsRadiusOffset: number;
    sliceLabelsSkipAngle: number;
    sliceLabelsTextColor: InheritedColorConfig<ComputedDatum<RawDatum>>;
    isInteractive: boolean;
    tooltip: React.FC<PieTooltipProps<RawDatum>>;
    legends: LegendProps[];
    role: string;
};
export declare type PieHandlers<RawDatum, ElementType> = {
    onClick?: MouseEventHandler<RawDatum, ElementType>;
    onMouseEnter?: MouseEventHandler<RawDatum, ElementType>;
    onMouseMove?: MouseEventHandler<RawDatum, ElementType>;
    onMouseLeave?: MouseEventHandler<RawDatum, ElementType>;
};
export declare type PieSvgProps<RawDatum> = DataProps<RawDatum> & Dimensions & Partial<CommonPieProps<RawDatum>> & SvgDefsAndFill<ComputedDatum<RawDatum>> & PieHandlers<RawDatum, SVGPathElement> & {
    layers?: PieLayer<RawDatum>[];
};
export declare type CompletePieSvgProps<RawDatum> = DataProps<RawDatum> & Dimensions & CommonPieProps<RawDatum> & SvgDefsAndFill<ComputedDatum<RawDatum>> & PieHandlers<RawDatum, SVGPathElement> & {
    layers: PieLayer<RawDatum>[];
};
export declare type PieCanvasProps<RawDatum> = DataProps<RawDatum> & Dimensions & Partial<CommonPieProps<RawDatum>> & Pick<PieHandlers<RawDatum, HTMLCanvasElement>, 'onClick' | 'onMouseMove'> & {
    pixelRatio?: number;
};
export declare type CompletePieCanvasProps<RawDatum> = DataProps<RawDatum> & Dimensions & CommonPieProps<RawDatum> & Pick<PieHandlers<RawDatum, HTMLCanvasElement>, 'onClick' | 'onMouseMove'> & {
    pixelRatio: number;
};
export declare type Point = {
    x: number;
    y: number;
};
export declare type RadialLabelData<RawDatum> = {
    text: string | number;
    textColor: string;
    position: Point;
    align: string;
    line: [Point, Point, Point];
    linkColor: string;
    datum: ComputedDatum<RawDatum>;
};
export declare type SliceLabelData<RawDatum> = {
    x: number;
    y: number;
    label: string | number;
    textColor: string;
    datum: ComputedDatum<RawDatum>;
};
//# sourceMappingURL=types.d.ts.map