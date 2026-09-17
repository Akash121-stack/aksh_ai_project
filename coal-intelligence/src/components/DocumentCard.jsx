import { FileText, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import StatusBadge from "./StatusBadge";

export default function DocumentCard({ document }) {
  const navigate = useNavigate();

  return (
    <button
      className="document-card"
      onClick={() => navigate(`/document/${document.id}`)}
    >
      <div className="document-icon">
        <FileText size={19} />
      </div>

      <div className="document-info">
        <div className="document-title">{document.title}</div>

        <div className="document-meta">
          {document.id} · {document.category} · {document.year}
        </div>
      </div>

      <StatusBadge status={document.status} />

      <ArrowUpRight size={17} className="document-arrow" />
    </button>
  );
}