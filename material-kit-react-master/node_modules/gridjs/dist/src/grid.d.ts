import { Config, UserConfig } from './config';
import { VNode } from 'preact';
import { EventEmitter } from './util/eventEmitter';
import { GridEvents } from './events';
import { PluginManager } from './plugin';
declare class Grid extends EventEmitter<GridEvents> {
    config: Config;
    plugin: PluginManager;
    constructor(userConfig?: UserConfig);
    updateConfig(userConfig: Partial<UserConfig>): this;
    createElement(): VNode;
    /**
     * Uses the existing container and tries to clear the cache
     * and re-render the existing Grid.js instance again. This is
     * useful when a new config is set/updated.
     *
     */
    forceRender(): this;
    /**
     * Mounts the Grid.js instance to the container
     * and renders the instance
     *
     * @param container
     */
    render(container: Element): this;
}
export default Grid;
