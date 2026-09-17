import { useMemo, useState } from "react";
import { Database, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { documents } from "../data/mockData";
import StatusBadge from "../components/StatusBadge";

export default function Repository() {
  const navigate = useNavigate();
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    if (category === "All") return documents;

    return documents.filter(
      (doc) => doc.category === category
    );
  }, [category]);

  return (
    <>
      <section className="page-heading">
        <div>
          <div className="eyebrow">
            CENTRAL KNOWLEDGE REPOSITORY
          </div>

          <h1>Data Repository</h1>

          <p>
            The same knowledge layer used by manual discovery
            and AI search.
          </p>
        </div>
      </section>

      <div className="repository-summary">
        <div>
          <Database size={19} />
          <strong>12,840</strong>
          <span>Total records</span>
        </div>

        <div>
          <FileText size={19} />
          <strong>8,764</strong>
          <span>Documents indexed</span>
        </div>

        <div>
          <span className="big-status-dot" />
          <strong>81.2%</strong>
          <span>Verified</span>
        </div>
      </div>

      <section className="panel">
        <div className="repository-tabs">
          {[
            "All",
            "Geological",
            "Mining",
            "Production",
            "Historical",
          ].map((item) => (
            <button
              key={item}
              className={
                category === item ? "active" : ""
              }
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="repository-table">
          <div className="table-head">
            <span>DOCUMENT</span>
            <span>CATEGORY</span>
            <span>MINE</span>
            <span>YEAR</span>
            <span>STATUS</span>
            <span />
          </div>

          {filtered.map((doc) => (
            <button
              className="table-row"
              key={doc.id}
              onClick={() =>
                navigate(`/document/${doc.id}`)
              }
            >
              <div className="table-document">
                <div className="small-file-icon">
                  <FileText size={15} />
                </div>

                <div>
                  <strong>{doc.title}</strong>
                  <span>{doc.id}</span>
                </div>
              </div>

              <span>{doc.category}</span>
              <span>{doc.mine}</span>
              <span>{doc.year}</span>

              <StatusBadge status={doc.status} />

              <span>↗</span>
            </button>
          ))}
        </div>
      </section>
    </>
  );
}