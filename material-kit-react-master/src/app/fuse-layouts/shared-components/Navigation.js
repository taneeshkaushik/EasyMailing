import React from 'react';
import {FuseNavigation} from '@fuse';
import clsx from 'clsx';
import {useSelector} from 'react-redux';

function Navigation(props)
{
    const navigation = useSelector(({fuse}) => fuse.navigation);

    return null;
}

Navigation.defaultProps = {
    layout: "vertical"
};

export default Navigation;
