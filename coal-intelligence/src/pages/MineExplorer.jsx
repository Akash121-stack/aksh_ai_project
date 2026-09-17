import { MapPin, FileText, Drill, ArrowUpRight } from "lucide-react";
import { mines } from "../data/mockData";

export default function MineExplorer() {
  return (
    <>
      <section className="page-heading">
        <div>
          <div className="eyebrow">GEOGRAPHIC KNOWLEDGE</div>
          <h1>Mine Explorer</h1>
          <p>Explore operational records by mine and geographic region.</p>
        </div>
      </section>

      <div className="mine-grid">
        {mines.map((mine) => (
          <div className="panel mine-card" key={mine.code}>
            <div className="mine-card-top">
              <div className="mine-pin">
                <MapPin size={18} />
              </div>
              <span>{mine.code}</span>
            </div>

            <h3>{mine.name}</h3>
            <p>{mine.region}</p>

            <div className="mine-metrics">
              <div>
                <span>Production</span>
                <strong>{mine.production}</strong>
              </div>
              <div>
                <span>Documents</span>
                <strong>{mine.documents}</strong>
              </div>
              <div>
                <span>Boreholes</span>
                <strong>{mine.boreholes}</strong>
              </div>
            </div>

            <button className="text-button">
              Explore records <ArrowUpRight size={14} />
            </button>
          </div>
        ))}
      </div>

      <section className="mine-map">
        <div className="map-grid">
          <div className="map-label">
            <span>OPERATIONAL COVERAGE</span>
            <strong>4 active regions</strong>
          </div>

          {mines.map((mine, index) => (
            <div
              className="map-marker"
              key={mine.code}
              style={{
                left: `${18 + index * 21}%`,
                top: `${55 - (index % 2) * 23}%`,
              }}
            >
              <span />
              <label>{mine.code}</label>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}