import { OverviewMetric } from "../../types";
import Image from "next/image";

interface OverviewSectionProps {
  metrics: OverviewMetric[];
}

export const OverviewSection: React.FC<OverviewSectionProps> = ({
  metrics,
}) => {
  const colors = [
    "bg-blue-50 border-blue-200 text-blue-600",
    "bg-pink-50 border-pink-200 text-pink-600",
    "bg-blue-50 border-blue-200 text-blue-600",
    "bg-purple-50 border-purple-200 text-purple-600",
    "bg-blue-50 border-blue-200 text-blue-600",
  ];

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Overview</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className={`${colors[index]} rounded-xl border p-4 flex items-center space-x-4`}
          >
            <div className="flex-shrink-0">
              <Image
                src={metric.icon}
                alt={metric.title}
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
            </div>
            <div>
              <p className="text-xl font-bold text-gray-900">{metric.value}</p>
              <p className="text-sm text-gray-600">{metric.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
