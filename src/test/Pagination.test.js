import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Pagination from "../components/Pagination";

describe("Pagination component", () => {
  const mockNextPage = jest.fn();
  const mockPrevPage = jest.fn();

  const setup = (currentPage, totalDrivers, driversPerPage) => {
    render(
      <Pagination
        currentPage={currentPage}
        totalDrivers={totalDrivers}
        driversPerPage={driversPerPage}
        nextPage={mockNextPage}
        prevPage={mockPrevPage}
      />
    );
  };

  test("renders pagination buttons", () => {
    setup(1, 20, 5);

    const prevButton = screen.getByText(/< Previous Page/i);
    const nextButton = screen.getByText(/Next Page >/i);

    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });

  test("disables previous button on first page", () => {
    setup(1, 20, 5);

    const prevButton = screen.getByText(/< Previous Page/i);
    expect(prevButton).toBeDisabled();
  });

  test("disables next button on last page", () => {
    setup(4, 20, 5);

    const nextButton = screen.getByText(/Next Page >/i);
    expect(nextButton).toBeDisabled();
  });

  test("calls nextPage function on clicking Next Page button", () => {
    setup(2, 20, 5);

    const nextButton = screen.getByText(/Next Page >/i);
    fireEvent.click(nextButton);

    expect(mockNextPage).toHaveBeenCalledTimes(1);
  });

  test("calls prevPage function on clicking Previous Page button", () => {
    setup(2, 20, 5);

    const prevButton = screen.getByText(/< Previous Page/i);
    fireEvent.click(prevButton);

    expect(mockPrevPage).toHaveBeenCalledTimes(1);
  });
});
