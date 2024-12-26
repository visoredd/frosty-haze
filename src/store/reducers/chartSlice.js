import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    ["From", "To", "Weight"],
    ["Income", "Salary", 5000],
    ["Salary", "Bills", 3000],
    ["Bills", "Electric", 1000],
    ["Bills", "Mobile", 2000],
    ["Salary", "Savings", 1000],
    ["Salary", "Investments", 500],
    ["Income", "Taxes", 1500],
    ["Bills", "Groceries", 500],
    ["Bills", "Entertainment", 400],
    ["Savings", "Interest", 50],
    ["Investments", "Stocks", 300],
    ["Stocks", "Returns", 150],
  ],
  options: {},
};

export const chartSlice = createSlice({
  name: "chartSlice",
  initialState,
  reducers: {
    updateChart: (state, action) => {
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateChart } = chartSlice.actions;

export default chartSlice.reducer;
