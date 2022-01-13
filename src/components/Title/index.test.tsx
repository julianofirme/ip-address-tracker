import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import Title from '.'

function setup() {
  render(<Title />)
}

describe("Title", () => {
  it("should be display title", () => {
    setup();
    const title = screen.getByRole('heading', {
      level: 4,
      name: 'IP Address Tracker'
    })

    expect(title).toBeInTheDocument();
    expect(title).toHaveStyle({
      fontWeight: "500", color: "#FFF", marginBottom: 2
    })
  });
});