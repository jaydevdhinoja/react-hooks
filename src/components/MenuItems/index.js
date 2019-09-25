import React from 'react';
import {useMenuItemsContext} from '../MenuProvider';

const MenuItems = () => {
    const { menuItems, addInMenuPreview } = useMenuItemsContext();
    const items = menuItems.map( item => 
        <li key={item.id} className="item" onClick={() => addInMenuPreview(item)} >
        <h2>{item.name}</h2>
        <p>
          {
            item.dietaries.map(dietary => <span key={dietary} className="dietary">{dietary}</span>)
          }  
        </p>
      </li>
    );
    
    return (
        <ul className="item-picker">
            {items}
        </ul>
    )
}

export default MenuItems;