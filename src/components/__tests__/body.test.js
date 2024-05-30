import { act, fireEvent } from "@testing-library/react";
import MOCK_DATA from "../../mocks/mockData.json";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Body from "../Body";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should search ResList for burger text input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const searchBtn = screen.getByRole("button", { name: "Search" });
  expect(searchBtn).toBeInTheDocument();
});

it("Should check search input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const searchInput = screen.getByTestId("searchInput");
  expect(searchInput).toBeInTheDocument();

  fireEvent.change(searchInput, { target: { value: "pizza" } });
  expect(searchInput.value).toBe("pizza");
});

it("Should check button work or not", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const searchBtn = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getByTestId("searchInput");
  fireEvent.change(searchInput, { target: { value: "burger" } });
  fireEvent.click(searchBtn);
  const card = screen.getAllByTestId("resCard");
  expect(card.length).toBe(2);
});

it("Should check Top Rated Restuarant", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const topRated = screen.getByText("Top Rated Restaurants");
  expect(topRated).toBeInTheDocument();

  fireEvent.click(topRated);

  const clickTopRated = screen.getAllByTestId("resCard");
  expect(clickTopRated.length).toBe(38);
});
