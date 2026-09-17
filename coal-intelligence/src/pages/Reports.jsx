import { useState } from "react";
import { FileText, Download, Sparkles, CheckCircle2 } from "lucide-react";

export default function Reports() {
  const [generated, setGenerated] = useState(false);

  return (
    <>
      <section className="page-heading">
        <div>
          <div className="eyebrow">REPORTING CENTER</div>
          <h1>Reports</h1>
          <p>Generate structured reports from consolidated knowledge.</p>
        </div>
      </section>

      <div className="report-layout">
        <section className="panel report-builder">
          <div className="panel-kicker">REPORT BUILDER</div>
          <h3>Generate a new report</h3>

          <div className="report-fields">
            <div className="field">
              <label>REPORT TYPE</label>
              <select>
                <option>Annual Production Summary</option>
                <option>Mine Performance Report</option>
                <option>Geological Assessment</option>
                <option>Exploration Summary</option>
              </select>
            </div>

            <div className="field">
              <label>TIME PERIOD</label>
              <select>
                <option>2024 — 2025</option>
                <option>2023 — 2024</option>
                <option>2022 — 2023</option>
              </select>
            </div>

            <div className="field">
              <label>MINE / ORGANIZATION</label>
              <select>
                <option>All Mines</option>
                <option>Eastern Coalfields</option>
                <option>Northern Coalfields</option>
                <option>Central West Mine</option>
              </select>
            </div>

            <div className="field">
              <label>OUTPUT FORMAT</label>
              <select>
                <option>PDF</option>
                <option>Excel</option>
              </select>
            </div>
          </div>

          <button
            className="primary-button"
            onClick={() => setGenerated(true)}
          >
            <Sparkles size={16} />
            Generate Report
          </button>

          {generated && (
            <div className="generated-report">
              <CheckCircle2 size={18} />
              <div>
                <strong>Report generated successfully</strong>
                <span>42 source records · Generated just now</span>
              </div>
              <button className="icon-button">
                <Download size={16} />
              </button>
            </div>
          )}
        </section>

        <section className="panel">
          <div className="panel-kicker">RECENT REPORTS</div>
          <h3>Generated reports</h3>

          <div className="report-list">
            {[
              "Annual Production Summary — 2024-25",
              "North Karanpura Geological Assessment",
              "Mine Operations Review — Q4",
              "Exploration Data Summary — 2025",
            ].map((report) => (
              <div className="report-item" key={report}>
                <FileText size={17} />
                <div>
                  <strong>{report}</strong>
                  <span>PDF · Generated recently</span>
                </div>
                <Download size={15} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}