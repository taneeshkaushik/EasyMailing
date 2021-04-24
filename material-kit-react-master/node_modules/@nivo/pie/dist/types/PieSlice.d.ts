import { ComputedDatum, CompletePieSvgProps } from './types';
interface PieSliceProps<RawDatum> {
    datum: ComputedDatum<RawDatum>;
    path?: string;
    borderWidth: CompletePieSvgProps<RawDatum>['borderWidth'];
    borderColor: string;
    isInteractive: CompletePieSvgProps<RawDatum>['isInteractive'];
    tooltip: CompletePieSvgProps<RawDatum>['tooltip'];
    onClick: CompletePieSvgProps<RawDatum>['onClick'];
    onMouseEnter: CompletePieSvgProps<RawDatum>['onMouseEnter'];
    onMouseMove: CompletePieSvgProps<RawDatum>['onMouseMove'];
    onMouseLeave: CompletePieSvgProps<RawDatum>['onMouseLeave'];
}
export declare const PieSlice: <RawDatum>({ datum, path, borderWidth, borderColor, isInteractive, onClick, onMouseEnter, onMouseMove, onMouseLeave, tooltip, }: PieSliceProps<RawDatum>) => JSX.Element;
export {};
//# sourceMappingURL=PieSlice.d.ts.map