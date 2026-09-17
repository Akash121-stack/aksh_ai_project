import { useState } from "react";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { users } from "../data/mockData";

export default function Login() {
  const navigate = useNavigate();
  const [role, setRole] = useState(users[0].role);

  const login = () => {
    const selectedUser = users.find((user) => user.role === role);

    localStorage.setItem(
      "coal-user",
      JSON.stringify(selectedUser)
    );

    navigate("/dashboard");
  };

  return (
    <div className="login-page">
      <div className="login-visual">
        <div className="mine-silhouette">
          <div className="mountain mountain-one" />
          <div className="mountain mountain-two" />

          <div className="mine-tower">
            <span />
            <span />
            <span />
          </div>
        </div>

        <div className="login-visual-content">
          <div className="eyebrow">
            CMPDI · DIGITAL KNOWLEDGE SYSTEM
          </div>

          <h1>
            One knowledge layer for India's coal operations.
          </h1>

          <p>
            Geological, mining and production information brought
            together into a single operational workspace.
          </p>
        </div>
      </div>

      <div className="login-panel">
        <div className="login-box">
          <div className="login-mark">CI</div>

          <div className="eyebrow">SECURE WORKSPACE</div>

          <h2>Sign in to Coal Intelligence</h2>

          <p className="muted">
            Select your operational role.
          </p>

          <label>WORKSPACE ROLE</label>

          <div className="role-list">
            {users.map((user) => (
              <button
                key={user.role}
                className={`role-option ${
                  role === user.role ? "selected" : ""
                }`}
                onClick={() => setRole(user.role)}
              >
                <div>
                  <strong>{user.role}</strong>
                  <span>{user.department}</span>
                </div>

                <span className="role-radio" />
              </button>
            ))}
          </div>

          <button
            className="primary-button login-button"
            onClick={login}
          >
            Enter Workspace
            <ArrowRight size={17} />
          </button>

          <div className="login-security">
            <ShieldCheck size={15} />
            Role-based demonstration environment
          </div>
        </div>
      </div>
    </div>
  );
}