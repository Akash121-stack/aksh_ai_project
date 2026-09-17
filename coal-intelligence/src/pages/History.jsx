import { activities } from "../data/mockData";
import { Upload, ShieldCheck, FileText } from "lucide-react";

const icons = {
  upload: Upload,
  verify: ShieldCheck,
  report: FileText,
};

export default function History() {
  return (
    <>
      <section className="page-heading">
        <div>
          <div className="eyebrow">AUDIT TRAIL</div>
          <h1>Data History</h1>
          <p>Track how information moves through the knowledge system.</p>
        </div>
      </section>

      <section className="panel history-panel">
        <div className="timeline">
          {activities.concat(activities).map((activity, index) => {
            const Icon = icons[activity.type];

            return (
              <div className="timeline-item" key={`${activity.id}-${index}`}>
                <div className="timeline-icon">
                  <Icon size={16} />
                </div>

                <div className="timeline-content">
                  <div className="timeline-top">
                    <strong>{activity.title}</strong>
                    <time>{activity.time}</time>
                  </div>
                  <p>{activity.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}