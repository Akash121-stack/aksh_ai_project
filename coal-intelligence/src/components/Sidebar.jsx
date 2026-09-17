import {
  LayoutDashboard,
  Search,
  Sparkles,
  Database,
  Map,
  Upload,
  ShieldCheck,
  History,
  BarChart3,
  FileText,
  Network,
  ChevronRight,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

const sections = [
  {
    title: null,
    items: [{ label: "Dashboard", icon: LayoutDashboard, path: "/dashboard" }],
  },
  {
    title: "DATA DISCOVERY",
    items: [
      { label: "Manual Search", icon: Search, path: "/search" },
      { label: "Ask AI", icon: Sparkles, ai: true },
    ],
  },
  {
    title: "KNOWLEDGE",
    items: [
      { label: "Data Repository", icon: Database, path: "/repository" },
      { label: "Mine Explorer", icon: Map, path: "/mines" },
    ],
  },
  {
    title: "OPERATIONS",
    items: [
      { label: "Upload Data", icon: Upload, path: "/upload" },
      { label: "Verification", icon: ShieldCheck, path: "/verification" },
      { label: "Data History", icon: History, path: "/history" },
    ],
  },
  {
    title: "INSIGHTS",
    items: [
      { label: "Analytics", icon: BarChart3, path: "/analytics" },
      { label: "Reports", icon: FileText, path: "/reports" },
      { label: "Knowledge Trends", icon: Network, path: "/trends" },
    ],
  },
];

export default function Sidebar() {
  const navigate = useNavigate();

  const openAI = () => {
    window.location.href = "http://localhost:3001";
  };

  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-mark">
          <div className="brand-stripe" />
          <div className="brand-stripe" />
          <div className="brand-stripe" />
        </div>

        <div>
          <div className="brand-name">COAL INTELLIGENCE</div>
          <div className="brand-subtitle">DIGITAL KNOWLEDGE SYSTEM</div>
        </div>
      </div>

      <div className="sidebar-divider" />

      <nav className="sidebar-nav">
        {sections.map((section, index) => (
          <div className="nav-section" key={index}>
            {section.title && (
              <div className="nav-section-title">{section.title}</div>
            )}

            {section.items.map((item) => {
              const Icon = item.icon;

              if (item.ai) {
                return (
                  <button
                    key={item.label}
                    className="nav-item ai-nav-item"
                    onClick={openAI}
                  >
                    
                    <Icon size={17} />
                    <span>{item.label}</span>
                    <ChevronRight size={14} className="nav-arrow" />
                  </button>
                );
              }

              return (
                <NavLink
                  key={item.label}
                  to={item.path}
                  className={({ isActive }) =>
                    `nav-item ${isActive ? "active" : ""}`
                  }
                >
                  <Icon size={17} />
                  <span>{item.label}</span>
                </NavLink>
              );
            })}
          </div>
        ))}
      </nav>

      <div className="sidebar-bottom">
        <div className="system-status">
          <span className="status-dot" />
          <span>Knowledge system online</span>
        </div>

        <div className="sidebar-version">
          CMPDI · DATA PLATFORM v1.0
        </div>
      </div>
    </aside>
  );
}