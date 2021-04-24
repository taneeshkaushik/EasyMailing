import React, { ReactNode } from 'react';
import { DataFormatter } from '@nivo/core';
interface BasicTooltipProps {
    id: ReactNode;
    value?: number | string | Date;
    format?: DataFormatter;
    color?: string;
    enableChip?: boolean;
    /**
     * @deprecated This should be replaced by custom tooltip components.
     */
    renderContent?: () => JSX.Element;
}
export declare const BasicTooltip: React.NamedExoticComponent<BasicTooltipProps>;
export {};
//# sourceMappingURL=BasicTooltip.d.ts.map