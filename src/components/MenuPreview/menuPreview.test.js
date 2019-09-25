import React from "react";
import MenuPreview from "./index";
import {MenuItemsContext} from '../MenuProvider';
import Items from '../../items';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

const defaultState = {
    menuPreviewItems: Items,
    removeMenuPreviewItem: jest.fn()
};

function renderWithContext(node, { value, ...options }) {
	return render(<MenuItemsContext.Provider value={value}>{node}</MenuItemsContext.Provider>, options);
}

describe("Menu Provider context snapshot", () => {
  it("should render children for snapshot", () => {
    const tree = renderWithContext(<MenuPreview/>, {value: defaultState});
    expect(tree).toMatchSnapshot();
  });

  it("renders menu preview", () => {
    const { getByText } = renderWithContext(<MenuPreview/>, {value: defaultState});
    expect(getByText(/Hake & Smoky Chickpeas, Brown Rice & Quinoa, Roasted Roots/i)).toBeInTheDocument();
  });

  it("should be able to remove the item in preview", () => {
    const { getByText } = renderWithContext(<MenuPreview/>, {value: defaultState});
    const link = getByText(/Hake & Smoky Chickpeas, Brown Rice & Quinoa, Roasted Roots/i);
    fireEvent.click(link);
  });
});