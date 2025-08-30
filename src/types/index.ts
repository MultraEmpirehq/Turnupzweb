// types/index.ts
export interface Event {
  id: string;
  name: string;
  date: Date;
  location: string;
}

export interface TicketSale {
  id: string;
  eventName: string;
  saleDate: Date;
  quantity: number;
}

export interface OverviewMetric {
  title: string;
  value: number | string;
  icon: any;
}
export interface ChartDataPoint {
  name: string;
  sales: number;
}
