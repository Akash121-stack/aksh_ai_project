import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { productionData } from "../data/mockData";

export default function Analytics() {
  return (
    <>
      <section className="page-heading">
        <div>
          <div className="eyebrow">OPERATIONAL INTELLIGENCE</div>
          <h1>Analytics</h1>
          <p>Understand production and operational trends across records.</p>
        </div>
      </section>

      <div className="analytics-grid">
        <section className="panel chart-panel wide">
          <div className="panel-header">
            <div>
              <div className="panel-kicker">NATIONAL PRODUCTION</div>
              <h3>Production trend</h3>
            </div>
            <span className="chart-unit">MT · MILLION TONNES</span>
          </div>

          <div className="chart">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={productionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="production"
                  strokeWidth={2}
                  fillOpacity={0.08}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </section>

        <section className="panel chart-panel">
          <div className="panel-kicker">DISPATCH</div>
          <h3>Production vs dispatch</h3>

          <div className="chart">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={productionData.slice(-4)}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="production" />
                <Bar dataKey="dispatch" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>
      </div>

      <div className="analytics-stats">
        <div className="panel metric-panel">
          <span>2025 PRODUCTION</span>
          <strong>74 MT</strong>
          <small>+7.2% year-on-year</small>
        </div>
        <div className="panel metric-panel">
          <span>2025 DISPATCH</span>
          <strong>71 MT</strong>
          <small>+7.5% year-on-year</small>
        </div>
        <div className="panel metric-panel">
          <span>DATA COVERAGE</span>
          <strong>94.8%</strong>
          <small>Across active mines</small>
        </div>
      </div>
    </>
  );
}