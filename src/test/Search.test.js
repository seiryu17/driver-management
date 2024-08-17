import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Search from "../components/Search";

jest.mock("@ant-design/icons", () => ({
  SearchOutlined: () => <span data-testid="search-icon">🔍</span>,
}));

describe("Search component", () => {
  test("renders the search input and icon", () => {
    render(<Search setSearchTerm={() => {}} />);

    const inputElement = screen.getByPlaceholderText(/Cari Driver/i);
    expect(inputElement).toBeInTheDocument();

    const iconElement = screen.getByTestId("search-icon");
    expect(iconElement).toBeInTheDocument();
  });

  test("calls setSearchTerm on input change", () => {
    const mockSetSearchTerm = jest.fn();
    render(<Search setSearchTerm={mockSetSearchTerm} />);

    const inputElement = screen.getByPlaceholderText(/Cari Driver/i);
    fireEvent.change(inputElement, { target: { value: "John" } });

    expect(mockSetSearchTerm).toHaveBeenCalledWith("John");
  });
});
