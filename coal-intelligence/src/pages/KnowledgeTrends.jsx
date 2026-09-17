import { topics } from "../data/mockData";

export default function KnowledgeTrends() {
  return (
    <>
      <section className="page-heading">
        <div>
          <div className="eyebrow">KNOWLEDGE ANALYSIS</div>
          <h1>Knowledge Trends</h1>
          <p>Topics and themes appearing across the document repository.</p>
        </div>
      </section>

      <section className="panel trends-panel">
        <div className="panel-header">
          <div>
            <div className="panel-kicker">TOP DOCUMENT TOPICS</div>
            <h3>Knowledge landscape</h3>
          </div>
        </div>

        <div className="topic-cloud">
          {topics.map((topic, index) => (
            <button
              className="topic"
              key={topic.name}
              style={{
                fontSize: `${16 + Math.max(0, 30 - index * 3)}px`,
              }}
            >
              {topic.name}
            </button>
          ))}
        </div>

        <div className="topic-list">
          {topics.map((topic, index) => (
            <div key={topic.name}>
              <span>0{index + 1}</span>
              <strong>{topic.name}</strong>
              <em>{topic.count.toLocaleString()} records</em>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}