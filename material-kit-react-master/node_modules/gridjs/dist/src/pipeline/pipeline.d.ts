import { PipelineProcessor, ProcessorType } from './processor';
import { EventEmitter } from '../util/eventEmitter';
interface PipelineEvents<T> {
    /**
     * Generic updated event. Triggers the callback function when the pipeline
     * is updated, including when a new processor is registered, a processor's props
     * get updated, etc.
     */
    updated: (processor: PipelineProcessor<any, any>) => void;
    /**
     * Triggers the callback function when a new
     * processor is registered successfully
     */
    afterRegister: () => void;
    /**
     * Triggers the callback when a registered
     * processor's property is updated
     */
    propsUpdated: () => void;
    /**
     * Triggers the callback function when the pipeline
     * is fully processed, before returning the results
     *
     * afterProcess will not be called if there is an
     * error in the pipeline (i.e a step throw an Error)
     */
    afterProcess: (prev: T) => void;
    /**
     * Triggers the callback function when the pipeline
     * fails to process all steps or at least one step
     * throws an Error
     */
    error: (prev: T) => void;
}
declare class Pipeline<T, P = {}> extends EventEmitter<PipelineEvents<T>> {
    private readonly _steps;
    private cache;
    private lastProcessorIndexUpdated;
    constructor(steps?: PipelineProcessor<any, any>[]);
    /**
     * Clears the `cache` array
     */
    clearCache(): void;
    /**
     * Registers a new processor
     *
     * @param processor
     * @param priority
     */
    register(processor: PipelineProcessor<any, any>, priority?: number): void;
    /**
     * Removes a processor from the list
     *
     * @param processor
     */
    unregister(processor: PipelineProcessor<any, any>): void;
    /**
     * Registers a new processor
     *
     * @param processor
     * @param priority
     */
    private addProcessorByPriority;
    /**
     * Flattens the _steps Map and returns a list of steps with their correct priorities
     */
    get steps(): PipelineProcessor<T, P>[];
    /**
     * Accepts ProcessType and returns an array of the registered processes
     * with the give type
     *
     * @param type
     */
    getStepsByType(type: ProcessorType): PipelineProcessor<T, P>[];
    /**
     * Returns a list of ProcessorType according to their priority
     */
    private getSortedProcessorTypes;
    /**
     * Runs all registered processors based on their correct priority
     * and returns the final output after running all steps
     *
     * @param data
     */
    process(data?: T): Promise<T>;
    /**
     * Returns the registered processor's index in _steps array
     *
     * @param processorID
     */
    private findProcessorIndexByID;
    /**
     * Sets the last updates processors index locally
     * This is used to invalid or skip a processor in
     * the process() method
     */
    private setLastProcessorIndex;
    private processorPropsUpdated;
    private afterRegistered;
}
export default Pipeline;
