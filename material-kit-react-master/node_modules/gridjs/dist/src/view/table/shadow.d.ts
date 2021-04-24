import { Component, h, RefObject } from 'preact';
import { BaseComponent, BaseProps } from '../base';
interface ShadowTableProps extends BaseProps {
    tableRef?: RefObject<Component>;
}
/**
 * ShadowTable renders a hidden table and is used to calculate the column's width
 * when autoWidth option is enabled
 */
export declare class ShadowTable extends BaseComponent<ShadowTableProps, {}> {
    render(): h.JSX.Element;
}
export {};
