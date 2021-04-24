import React from 'react';
import {Redirect} from 'react-router-dom';
import {FuseUtils} from '@fuse';

import {AcademyAppConfig} from 'app/main/academy/AcademyAppConfig'
//import {ProjectDashboardAppConfig} from 'app/main/dashboards/project/ProjectDashboardAppConfig';
const routeConfigs = [
 
    AcademyAppConfig, 
    // ProjectDashboardAppConfig
    
];

const routes = [
    ...FuseUtils.generateRoutesFromConfigs(routeConfigs),
    {
        path     : '/',
        component: React.lazy(() => import('app/main/academy/crp/tabs/GmailService'))
    } 
];

export default routes;
