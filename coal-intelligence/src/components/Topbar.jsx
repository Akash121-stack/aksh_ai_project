import { Bell, ChevronDown, Command } from "lucide-react";
import { useEffect, useState } from "react";

export default function Topbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("coal-user");

    if (stored) {
      setUser(JSON.parse(stored));
    }
  }, []);

  return (
    <header className="topbar">
      <div className="topbar-search">
        <Command size={16} />
        <span>Quick search across coal records...</span>
        <kbd>⌘ K</kbd>
      </div>

      <div className="topbar-actions">
        <button className="icon-button">
          <Bell size={18} />
          <span className="notification-dot" />
        </button>

        <div className="user-menu">
          <div className="avatar">
            {user?.initials || "AS"}
          </div>

          <div className="user-meta">
            <strong>{user?.name || "Arjun Sharma"}</strong>
            <span>{user?.role || "Management"}</span>
          </div>

          <ChevronDown size={15} />
        </div>
      </div>
    </header>
  );
}