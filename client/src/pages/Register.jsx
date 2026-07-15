import { Link } from "react-router-dom";

function Register() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f3f4f6",
      }}
    >
      <div
        style={{
          width: "350px",
          padding: "30px",
          background: "white",
          borderRadius: "10px",
          boxShadow: "0 0 15px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ textAlign: "center" }}>
          AI Resume Matcher
        </h2>

        <input
          type="text"
          placeholder="Name"
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "20px",
          }}
        />

        <input
          type="email"
          placeholder="Email"
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "15px",
          }}
        />

        <input
          type="password"
          placeholder="Password"
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "15px",
          }}
        />

        <button
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "20px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Register
        </button>

        <p style={{ textAlign: "center", marginTop: "20px" }}>
          Already have an account?{" "}
          <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;