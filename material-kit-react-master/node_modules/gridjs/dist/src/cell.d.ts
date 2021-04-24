import Base from './base';
import { TCell } from './types';
import { ComponentChild } from 'preact';
declare class Cell extends Base {
    data: number | string | boolean | ComponentChild;
    constructor(data: TCell);
    private cast;
    /**
     * Updates the Cell's data
     *
     * @param data
     */
    update(data: TCell): Cell;
}
export default Cell;
