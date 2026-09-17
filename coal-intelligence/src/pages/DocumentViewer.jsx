import {
  ArrowLeft,
  Download,
  FileText,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { documents } from "../data/mockData";
import StatusBadge from "../components/StatusBadge";

export default function DocumentViewer() {
  const navigate = useNavigate();
  const { id } = useParams();

  const document = documents.find((item) => item.id === id) || documents[0];

  return (
    <>
      <button className="back-button" onClick={() => navigate(-1)}>
        <ArrowLeft size={15} />
        Back to repository
      </button>

      <section className="document-header">
        <div className="document-heading-icon">
          <FileText size={25} />
        </div>

        <div>
          <div className="eyebrow">{document.id}</div>
          <h1>{document.title}</h1>
          <p>{document.description}</p>
        </div>

        <StatusBadge status={document.status} />
      </section>

      <div className="document-layout">
        <main className="document-preview">
          <div className="preview-toolbar">
            <span>DOCUMENT PREVIEW</span>

            <button className="secondary-button">
              <Download size={15} />
              Download
            </button>
          </div>

          <div className="paper">
            <div className="paper-header">
              <span>CMPDI</span>
              <span>{document.id}</span>
            </div>

            <div className="paper-title">
              <div>TECHNICAL REPORT</div>
              <h2>{document.title}</h2>
            </div>

            <div className="paper-line" />

            <p>
              This record contains consolidated technical information
              collected from operational and exploration activities. The
              information is indexed within the Coal Intelligence knowledge
              repository.
            </p>

            <div className="paper-section">
              <h4>01 — RECORD INFORMATION</h4>

              <div className="paper-grid">
                <div>
                  <span>Mine / Block</span>
                  <strong>{document.mine}</strong>
                </div>
                <div>
                  <span>Department</span>
                  <strong>{document.department}</strong>
                </div>
                <div>
                  <span>Reporting Year</span>
                  <strong>{document.year}</strong>
                </div>
                <div>
                  <span>Contributor</span>
                  <strong>{document.contributor}</strong>
                </div>
              </div>
            </div>

            <div className="paper-section">
              <h4>02 — EXTRACTED INFORMATION</h4>
              <p>
                Geological observations, operational measurements and source
                metadata have been associated with this record. Structured
                extraction allows the information to be discovered through
                manual search and AI-assisted queries.
              </p>
            </div>

            <div className="paper-footer">
              <span>Coal Intelligence Repository</span>
              <span>Page 01 / {document.pages}</span>
            </div>
          </div>
        </main>

        <aside className="document-sidebar">
          <div className="panel">
            <div className="panel-kicker">RECORD DETAILS</div>
            <h3>Source information</h3>

            <div className="detail-list">
              <div>
                <span>Document ID</span>
                <strong>{document.id}</strong>
              </div>
              <div>
                <span>Category</span>
                <strong>{document.category}</strong>
              </div>
              <div>
                <span>Mine</span>
                <strong>{document.mine}</strong>
              </div>
              <div>
                <span>File size</span>
                <strong>{document.size}</strong>
              </div>
              <div>
                <span>Pages</span>
                <strong>{document.pages}</strong>
              </div>
              <div>
                <span>Contributor</span>
                <strong>{document.contributor}</strong>
              </div>
            </div>
          </div>

          <div className="panel document-ai-card">
            <Sparkles size={18} />
            <div className="panel-kicker">AI KNOWLEDGE SEARCH</div>
            <h3>Ask about this record.</h3>
            <p>
              Use the AI workspace to query information related to this
              document.
            </p>

            <button
              className="primary-button dark-button"
              onClick={() => (window.location.href = "http://localhost:3001")}
            >
              Ask AI
              <ExternalLink size={15} />
            </button>
          </div>
        </aside>
      </div>
    </>
  );
}