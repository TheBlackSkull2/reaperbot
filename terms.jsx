export default function Terms() {
  return (
    <div style={{ padding: "40px", maxWidth: "900px", margin: "0 auto" }}>
      <h1>Terms of Service</h1>

      <p>Last updated: {new Date().toLocaleDateString()}</p>

      <h2>1. Service Description</h2>
      <p>
        This platform provides server management tools for Discord and game servers,
        including user authentication, statistics tracking, and automation tools.
      </p>

      <h2>2. User Responsibilities</h2>
      <p>
        Users agree not to misuse the service, attempt unauthorized access,
        or interfere with system operations.
      </p>

      <h2>3. Data Usage</h2>
      <p>
        The application only accesses Discord data necessary for authentication
        and server management.
      </p>

      <h2>4. Termination</h2>
      <p>
        Access may be revoked if users violate these terms.
      </p>

      <h2>5. Contact</h2>
      <p>
        For questions, contact the administrator.
      </p>
    </div>
  );
}
