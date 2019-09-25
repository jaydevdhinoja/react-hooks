import React from 'react';
import MenuItems from '../MenuItems';
import MenuPreview from '../MenuPreview';
import {useMenuItemsContext} from '../MenuProvider';

const Orders = () => {
    const { menuPreviewItems } = useMenuItemsContext();
    
    const vegan = menuPreviewItems.filter(item => item.dietaries.filter(diet => diet === 've').length === 1).length;
    const vegitarian = menuPreviewItems.filter(item => item.dietaries.filter(diet => diet === 'v').length === 1).length;
    const nonveg = menuPreviewItems.filter(item => item.dietaries.filter(diet => diet === 'n!').length === 1).length;

    return (
        <div className="wrapper">
            <div className="menu-summary">
                <div className="container">
                <div className="row">
                    <div className="col-6 menu-summary-left">
                    <span>{menuPreviewItems.length} {menuPreviewItems.length > 1 ? 'items': 'item'}</span>
                    </div>
                    <div className="col-6 menu-summary-right">
                    {`${vegan}x`} <span className="dietary">ve</span>
                    {`${vegitarian}x`} <span className="dietary">v</span>
                    {`${nonveg}x`} <span className="dietary">n!</span>
                    </div>
                </div>
                </div>
            </div>
            <div className="container menu-builder">
                <div className="row">
                    <div className="col-4">
                        <MenuItems/>
                    </div>
                    <div className="col-8">
                        <MenuPreview/>      
                    </div>
                </div>
            </div>
        </div>
    );
 }
export default Orders;