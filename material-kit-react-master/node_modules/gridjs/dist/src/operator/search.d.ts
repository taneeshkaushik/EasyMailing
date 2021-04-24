import Tabular from '../tabular';
import { TCell } from '../types';
export default function (keyword: string, tabular: Tabular, selector?: (cell: TCell, rowIndex: number, cellIndex: number) => string): Tabular;
