import { render, screen } from "@testing-library/react";
import Restaurants from "../Restaurants";
import MOCK_DATA from "../../mocks/mockRestroList.json";
import "@testing-library/jest-dom";
import React from "react";

it("Should Check Restaurants Loaded", () => {
  render(<Restaurants resData={MOCK_DATA} />);
  const name = screen.getByText("Subway");
  expect(name).toBeInTheDocument();
});
