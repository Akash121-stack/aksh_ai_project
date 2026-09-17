import { Check, X, Eye } from "lucide-react";
import { documents } from "../data/mockData";
import StatusBadge from "../components/StatusBadge";

export default function Verification() {
  const pending = documents.filter((doc) => doc.status === "Pending");

  return (
    <>
      <section className="page-heading">
        <div>
          <div className="eyebrow">DATA QUALITY CONTROL</div>
          <h1>Verification Center</h1>
          <p>Review records before they become trusted knowledge.</p>
        </div>
      </section>

      <div className="verification-banner">
        <div>
          <strong>{pending.length} records</strong>
          <span>are waiting for verification</span>
        </div>

        <div className="quality-meter">
          <span>Repository quality</span>
          <strong>81.2%</strong>
        </div>
      </div>

      <section className="panel">
        <div className="repository-table">
          <div className="table-head verification-head">
            <span>RECORD</span>
            <span>CONTRIBUTOR</span>
            <span>CATEGORY</span>
            <span>STATUS</span>
            <span>ACTION</span>
          </div>

          {pending.map((doc) => (
            <div className="table-row verification-row" key={doc.id}>
              <div className="table-document">
                <div className="small-file-icon">
                  <Eye size={15} />
                </div>
                <div>
                  <strong>{doc.title}</strong>
                  <span>{doc.id}</span>
                </div>
              </div>

              <span>{doc.contributor}</span>
              <span>{doc.category}</span>
              <StatusBadge status={doc.status} />

              <div className="verification-actions">
                <button className="approve">
                  <Check size={15} />
                </button>
                <button className="reject">
                  <X size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}