export default function StatCard({ label, value, change, icon: Icon }) {
  return (
    <div className="stat-card">
      <div className="stat-top">
        <span>{label}</span>
        {Icon && (
          <div className="stat-icon">
            <Icon size={17} />
          </div>
        )}
      </div>

      <div className="stat-value">{value}</div>

      {change && <div className="stat-change">{change}</div>}
    </div>
  );
}