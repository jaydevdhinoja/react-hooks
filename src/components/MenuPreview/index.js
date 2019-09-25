import React, { Fragment } from 'react';
import {useMenuItemsContext} from '../MenuProvider';

const MenuPreview = () => {
    const { menuPreviewItems, removeMenuPreviewItem } = useMenuItemsContext();
    const items = menuPreviewItems.map( item => 
        <li key={item.id} className="item">
        <h2>{item.name}</h2>
        <p>
          {
            item.dietaries.map(dietary => <span key={dietary} className="dietary">{dietary}</span>)
          }  
        </p>
        <button className="remove-item" onClick={() => removeMenuPreviewItem(item)}>x</button>
      </li>
    );
    
    return (
        <Fragment>
            <h2>Menu preview</h2>
            <ul className="menu-preview">
                {items}
            </ul>
        </Fragment>
    );
}

export default MenuPreview;