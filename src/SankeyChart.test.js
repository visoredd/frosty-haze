import React from "react";
import { render } from "@testing-library/react";
import { SankeyChart } from "./SankeyChart"; // Assuming your component is in this path
import { Chart } from "react-google-charts";

jest.mock("react-google-charts", () => ({
  Chart: jest.fn(() => <div>Mocked Chart</div>), // Mocking the Chart component
}));

describe("SankeyChart", () => {
  const mockData = [
    ["From", "To", "Weight"],
    ["Income", "Salary", 5000],
    ["Salary", "Bills", 3000],
  ];
  const mockOptions = { width: 500, height: 400 };

  it("should render the Chart component", () => {
    const { getByText } = render(
      <SankeyChart data={mockData} options={mockOptions} />
    );
    expect(getByText("Mocked Chart")).toBeInTheDocument();
  });

  it("should pass the correct props (data) to the Chart component", () => {
    render(<SankeyChart data={mockData} options={mockOptions} />);

    // Test if the Chart component receives the data prop
    expect(Chart).toHaveBeenCalledWith(
      expect.objectContaining({
        data: mockData,
      }),
      {}
    );
  });

  it("should pass the correct props (options) to the Chart component", () => {
    render(<SankeyChart data={mockData} options={mockOptions} />);

    // Test if the Chart component receives the options prop
    expect(Chart).toHaveBeenCalledWith(
      expect.objectContaining({
        options: mockOptions,
      }),
      {}
    );
  });

  it("should render with default props if no data or options are provided", () => {
    const { getByText } = render(<SankeyChart />);
    expect(getByText("Mocked Chart")).toBeInTheDocument();
    // If no data or options are provided, the default behavior of Chart should be used.
    // You can also assert on the default properties here if needed
  });
});
