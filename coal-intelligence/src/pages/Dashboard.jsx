import {
  Database,
  FileCheck2,
  FileText,
  Upload,
  ArrowUpRight,
  Sparkles,
  Activity,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  activities,
  documents,
  productionData,
  roleStats,
} from "../data/mockData";
import StatCard from "../components/StatCard";
import DocumentCard from "../components/DocumentCard";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Dashboard() {
  const navigate = useNavigate();

  const storedUser = localStorage.getItem("coal-user");

  const user = storedUser
    ? JSON.parse(storedUser)
    : {
        role: "Management",
        name: "Arjun Sharma",
      };

  const roleData =
    roleStats[user.role] || roleStats.Management;

  const icons = [
    Database,
    FileCheck2,
    FileText,
    Upload,
  ];

  return (
    <>
      <section className="page-heading dashboard-heading">
        <div>
          <div className="eyebrow">{roleData.eyebrow}</div>

          <h1>{roleData.title}</h1>

          <p>{roleData.description}</p>
        </div>

        <button
          className="primary-button"
          onClick={() => navigate("/upload")}
        >
          <Upload size={16} />
          Upload Data
        </button>
      </section>

      <div className="stats-grid">
        {roleData.stats.map((stat, index) => (
          <StatCard
            key={stat[0]}
            label={stat[0]}
            value={stat[1]}
            change={stat[2]}
            icon={icons[index]}
          />
        ))}
      </div>

      <section className="dashboard-grid">
        <div className="panel large-panel">
          <div className="panel-header">
            <div>
              <div className="panel-kicker">
                NATIONAL PRODUCTION
              </div>

              <h3>Production trend</h3>
            </div>

            <span className="chart-unit">
              MT · MILLION TONNES
            </span>
          </div>

          <div className="dashboard-chart">
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
        </div>

        <div className="panel ai-panel">
          <div className="ai-panel-icon">
            <Sparkles size={19} />
          </div>

          <div className="panel-kicker">
            AI KNOWLEDGE SEARCH
          </div>

          <h3>
            Ask across the entire knowledge base.
          </h3>

          <p>
            Query geological, mining and production information
            through the AI knowledge workspace.
          </p>

          <button
            className="primary-button dark-button"
            onClick={() =>
              (window.location.href =
                "http://localhost:3001")
            }
          >
            Ask AI
            <ArrowUpRight size={16} />
          </button>
        </div>
      </section>

      <section className="dashboard-lower-grid">
        <div className="panel">
          <div className="panel-header">
            <div>
              <div className="panel-kicker">
                KNOWLEDGE ACTIVITY
              </div>
              <h3>Recent activity</h3>
            </div>

            <button
              className="text-button"
              onClick={() => navigate("/history")}
            >
              View history
              <ArrowUpRight size={14} />
            </button>
          </div>

          <div className="activity-list">
            {activities.map((activity) => (
              <button
                className="activity-row"
                key={activity.id}
                onClick={() =>
                  activity.documentId &&
                  navigate(
                    `/document/${activity.documentId}`
                  )
                }
              >
                <div
                  className={`activity-marker ${activity.type}`}
                />

                <div className="activity-content">
                  <strong>{activity.title}</strong>
                  <span>{activity.description}</span>
                </div>

                <time>{activity.time}</time>
              </button>
            ))}
          </div>
        </div>

        <div className="panel quality-panel">
          <div className="panel-kicker">
            DATA QUALITY
          </div>

          <h3>Repository health</h3>

          <div className="quality-circle">
            <strong>81.2%</strong>
            <span>verified</span>
          </div>

          <div className="quality-bars">
            <div>
              <span>
                <b>Verified</b>
                <em>81%</em>
              </span>

              <div className="quality-track">
                <i style={{ width: "81%" }} />
              </div>
            </div>

            <div>
              <span>
                <b>Pending</b>
                <em>15%</em>
              </span>

              <div className="quality-track">
                <i style={{ width: "15%" }} />
              </div>
            </div>

            <div>
              <span>
                <b>Issues</b>
                <em>4%</em>
              </span>

              <div className="quality-track">
                <i style={{ width: "4%" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="panel">
        <div className="panel-header">
          <div>
            <div className="panel-kicker">
              RECENTLY INDEXED
            </div>

            <h3>Latest knowledge records</h3>
          </div>

          <button
            className="text-button"
            onClick={() => navigate("/repository")}
          >
            Open repository
            <ArrowUpRight size={14} />
          </button>
        </div>

        <div className="document-list">
          {documents.slice(0, 4).map((document) => (
            <DocumentCard
              key={document.id}
              document={document}
            />
          ))}
        </div>
      </section>
    </>
  );
}