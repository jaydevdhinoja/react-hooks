import React, { createContext, useContext, useState } from 'react';
import Items from '../../items';

const defaultState = {
	menuItems: Items,
	menuPreviewItems: []
};

export const MenuItemsContext = createContext(defaultState);

const MenuItemsProvider =  ({children}) => {

    const InitialState = () => defaultState;
    const [ initialState, setInitialState ] = useState(InitialState());
    // const removeMenuPreviewItem = (item) => {
    //     const menuPreviewItems = initialState.menuPreviewItems.filter(menuItem => menuItem.id !== item.id)
    //     setInitialState({ ...initialState, menuPreviewItems});
    // }
    return (
		<MenuItemsContext.Provider
			value={{
				...initialState,
				addInMenuPreview: (item) => {
                    debugger
                    const updatedMenuItems = initialState.menuItems.filter(menuItem => menuItem.id !== item.id)
					setInitialState({ ...initialState, menuItems: updatedMenuItems, menuPreviewItems: [...initialState.menuPreviewItems, item] });
				},
				removeMenuPreviewItem : (item) => {
                    const menuPreviewItems = initialState.menuPreviewItems.filter(menuItem => menuItem.id !== item.id)
                    const updatedMenuItems = [...initialState.menuItems, item];
                    setInitialState({ ...initialState, menuItems: updatedMenuItems, menuPreviewItems});
                }
			}}
		>
			{children}
		</MenuItemsContext.Provider>
	);
};

export default MenuItemsProvider;

export const useMenuItemsContext = () => {
	return useContext(MenuItemsContext);
};