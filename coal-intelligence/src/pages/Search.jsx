import { useMemo, useState } from "react";
import {
  Search as SearchIcon,
  Sparkles,
  SlidersHorizontal,
  RotateCcw,
} from "lucide-react";
import { documents } from "../data/mockData";
import DocumentCard from "../components/DocumentCard";

export default function Search() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [mine, setMine] = useState("All");
  const [year, setYear] = useState("All");
  const [status, setStatus] = useState("All");

  const results = useMemo(() => {
    const q = query.toLowerCase().trim();

    return documents.filter((doc) => {
      const matchesQuery =
        !q ||
        `${doc.title} ${doc.category} ${doc.mine} ${doc.id} ${doc.department}`
          .toLowerCase()
          .includes(q);

      const matchesCategory =
        category === "All" || doc.category === category;

      const matchesMine =
        mine === "All" || doc.mine === mine;

      const matchesYear =
        year === "All" || doc.year === year;

      const matchesStatus =
        status === "All" || doc.status === status;

      return (
        matchesQuery &&
        matchesCategory &&
        matchesMine &&
        matchesYear &&
        matchesStatus
      );
    });
  }, [query, category, mine, year, status]);

  const resetFilters = () => {
    setQuery("");
    setCategory("All");
    setMine("All");
    setYear("All");
    setStatus("All");
  };

  return (
    <>
      <section className="search-hero">
        <div className="eyebrow">DATA DISCOVERY</div>

        <h1>Find the information you need.</h1>

        <p>
          Search across geological, mining, production and
          historical records.
        </p>

        <div className="search-mode-grid">
          <button className="search-mode selected">
            <div className="mode-number">01</div>

            <div className="mode-icon">
              <SearchIcon size={20} />
            </div>

            <div className="mode-content">
              <strong>Manual Search</strong>
              <span>
                Search records using structured filters.
              </span>
            </div>
          </button>

          <button
            className="search-mode ai-search-mode"
            onClick={() =>
              (window.location.href =
                "http://localhost:3001")
            }
          >
            <div className="mode-number">02</div>

            <div className="mode-icon">
              <Sparkles size={20} />
            </div>

            <div className="mode-content">
              <strong>Ask AI</strong>
              <span>
                Ask questions across the knowledge base.
              </span>
            </div>
          </button>
        </div>
      </section>

      <section className="search-workspace">
        <div className="search-input-large">
          <SearchIcon size={20} />

          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search reports, mines, boreholes, production data..."
          />
        </div>

        <div className="filter-row">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="All">All categories</option>
            <option value="Geological">Geological</option>
            <option value="Mining">Mining</option>
            <option value="Production">Production</option>
            <option value="Historical">Historical</option>
          </select>

          <select
            value={mine}
            onChange={(e) => setMine(e.target.value)}
          >
            <option value="All">All mines</option>

            {[...new Set(documents.map((d) => d.mine))].map(
              (name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              )
            )}
          </select>

          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
          >
            <option value="All">All years</option>
            {[...new Set(documents.map((d) => d.year))]
              .sort()
              .reverse()
              .map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
          </select>

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="All">All status</option>
            <option value="Verified">Verified</option>
            <option value="Pending">Pending</option>
          </select>

          <button
            className="filter-reset"
            onClick={resetFilters}
          >
            <RotateCcw size={14} />
            Reset
          </button>
        </div>

        <div className="search-toolbar">
          <span>
            {results.length} records found
          </span>

          <span className="search-method">
            <SlidersHorizontal size={13} />
            Structured search
          </span>
        </div>

        <div className="search-results">
          {results.map((document) => (
            <DocumentCard
              key={document.id}
              document={document}
            />
          ))}

          {!results.length && (
            <div className="empty-state">
              <SearchIcon size={24} />
              <h3>No records found</h3>
              <p>
                Try another keyword or reset the filters.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}