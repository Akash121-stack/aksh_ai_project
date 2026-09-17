import { useState } from "react";
import {
  UploadCloud,
  FileText,
  CheckCircle2,
  X,
} from "lucide-react";

export default function Upload() {
  const [file, setFile] = useState(null);
  const [uploaded, setUploaded] = useState(false);

  const selectFile = (event) => {
    const selected = event.target.files?.[0];

    if (selected) {
      setFile(selected);
    }
  };

  const submit = () => {
    if (!file) return;

    setUploaded(true);
  };

  return (
    <>
      <section className="page-heading">
        <div>
          <div className="eyebrow">
            DATA CONTRIBUTION
          </div>

          <h1>Upload Data</h1>

          <p>
            Add operational information to the central
            knowledge repository.
          </p>
        </div>
      </section>

      <div className="upload-layout">
        <section className="panel upload-panel">
          {!uploaded ? (
            <>
              <label className="upload-zone">
                <div className="upload-icon">
                  <UploadCloud size={27} />
                </div>

                <h3>
                  {file
                    ? file.name
                    : "Drop your document here"}
                </h3>

                <p>
                  PDF, XLSX, CSV, DOCX, JPG and PNG files
                  supported.
                </p>

                <span className="secondary-button">
                  Browse Files
                </span>

                <input
                  type="file"
                  hidden
                  accept=".pdf,.xlsx,.csv,.docx,.jpg,.jpeg,.png"
                  onChange={selectFile}
                />
              </label>

              <div className="upload-fields">
                <div className="field">
                  <label>DOCUMENT TYPE</label>

                  <select>
                    <option>
                      Geological Report
                    </option>
                    <option>Mining Report</option>
                    <option>Production Data</option>
                    <option>Historical Archive</option>
                  </select>
                </div>

                <div className="field">
                  <label>MINE / BLOCK</label>

                  <select>
                    <option>
                      Barkakana Block
                    </option>
                    <option>North Karanpura</option>
                    <option>Singrauli Block</option>
                    <option>Central West Mine</option>
                  </select>
                </div>

                <div className="field">
                  <label>REPORTING YEAR</label>

                  <select>
                    <option>2026</option>
                    <option>2025</option>
                    <option>2024</option>
                    <option>2023</option>
                  </select>
                </div>

                <div className="field">
                  <label>DEPARTMENT</label>

                  <select>
                    <option>
                      Geological Services
                    </option>
                    <option>
                      Mining Operations
                    </option>
                    <option>
                      Production Planning
                    </option>
                    <option>
                      Field Operations
                    </option>
                  </select>
                </div>
              </div>

              <button
                className="primary-button"
                disabled={!file}
                onClick={submit}
              >
                Submit to Repository
              </button>
            </>
          ) : (
            <div className="upload-success">
              <div className="success-icon">
                <CheckCircle2 size={28} />
              </div>

              <div className="eyebrow">
                UPLOAD COMPLETE
              </div>

              <h2>
                Document added to the repository queue.
              </h2>

              <p>
                It is now awaiting indexing and
                verification.
              </p>

              <div className="uploaded-file">
                <FileText size={19} />

                <div>
                  <strong>{file.name}</strong>
                  <span>
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                    · Submitted just now
                  </span>
                </div>

                <button
                  className="icon-button"
                  onClick={() => {
                    setFile(null);
                    setUploaded(false);
                  }}
                >
                  <X size={15} />
                </button>
              </div>

              <button
                className="secondary-button"
                onClick={() => {
                  setFile(null);
                  setUploaded(false);
                }}
              >
                Upload another
              </button>
            </div>
          )}
        </section>

        <aside className="panel upload-info">
          <div className="panel-kicker">
            DATA PIPELINE
          </div>

          <h3>From field data to knowledge.</h3>

          <div className="pipeline">
            <div>
              <span>01</span>
              <strong>Submitted</strong>
              <p>
                Document enters the repository queue.
              </p>
            </div>

            <div>
              <span>02</span>
              <strong>Indexed</strong>
              <p>
                Metadata and searchable content are extracted.
              </p>
            </div>

            <div>
              <span>03</span>
              <strong>Verified</strong>
              <p>
                Authorized users validate the information.
              </p>
            </div>

            <div>
              <span>04</span>
              <strong>Available</strong>
              <p>
                Record becomes available through search and AI.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}