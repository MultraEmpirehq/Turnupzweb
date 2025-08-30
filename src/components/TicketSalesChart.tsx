import { ChartDataPoint } from "../types/index";

interface TicketSalesChartProps {
  chartData: ChartDataPoint[];
}

export const TicketSalesChart: React.FC<TicketSalesChartProps> = ({
  chartData,
}) => {
  const maxSales = Math.max(...chartData.map((d) => d.sales));

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6">
      <h3 className="text-lg font-semibold mb-6" style={{ color: "#024C6B" }}>
        Ticket Sales
      </h3>
      <div className="flex items-end justify-between h-48 px-6">
        {chartData.map((item, index) => (
          <div key={item.name} className="flex flex-col items-center space-y-2">
            <div
              className="w-10"
              style={{
                backgroundColor: index % 2 === 0 ? "#024C6B" : "#ED2E95",
                height: `${(item.sales / maxSales) * 130}px`,
                minHeight: "20px",
              }}
            ></div>
            <span className="text-xs text-gray-500">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
