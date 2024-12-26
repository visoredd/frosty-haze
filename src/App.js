import { useSelector } from "react-redux";
import { SankeyChart } from "./SankeyChart";

export default function App() {
  const chartData = useSelector((state) => state.chartSlice);
  return <SankeyChart data={chartData.data} options={chartData.options} />;
}
