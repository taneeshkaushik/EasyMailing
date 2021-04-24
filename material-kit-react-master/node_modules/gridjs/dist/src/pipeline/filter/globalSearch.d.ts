import Tabular from '../../tabular';
import { PipelineProcessor, PipelineProcessorProps, ProcessorType } from '../processor';
import { TCell } from '../../types';
interface GlobalSearchFilterProps extends PipelineProcessorProps {
    keyword: string;
    selector?: (cell: TCell, rowIndex: number, cellIndex: number) => string;
}
declare class GlobalSearchFilter extends PipelineProcessor<Tabular, GlobalSearchFilterProps> {
    get type(): ProcessorType;
    _process(data: Tabular): Tabular;
}
export default GlobalSearchFilter;
