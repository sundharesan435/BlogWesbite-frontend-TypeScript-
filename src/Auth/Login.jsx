import React, { useState } from "react";
import "./Login.css";

// ─── SVG Icons ────────────────────────────────────────────────────────────────

const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <polyline points="22,4 12,13 2,4" />
  </svg>
);

const LockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const EyeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const EyeOffIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>
);

const KeyIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="7.5" cy="15.5" r="5.5" />
    <path d="M21 2l-9.6 9.6" />
    <path d="M15.5 7.5l3 3L22 7l-3-3" />
  </svg>
);

const AlertIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

// ─── Main Component ───────────────────────────────────────────────────────────

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
    if (serverError) setServerError("");
  };

  const validate = () => {
    const errs = {};
    if (!formData.email.trim()) errs.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errs.email = "Enter a valid email";
    if (!formData.password) errs.password = "Password is required";
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    setServerError("");
    try {
      // Replace with your API call:
      // const res = await API.post("/login", { ...formData, remember });
      await new Promise((r) => setTimeout(r, 1400));
      // On success: redirect e.g. navigate("/dashboard")
    } catch {
      setServerError("Invalid email or password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="lg-wrap">
      <div className="lg-container">

        {/* ── Header ── */}
        <div className="lg-header">
          <h1 className="lg-title">Welcome Back</h1>
          <p className="lg-subtitle">Sign in to continue to your account</p>
        </div>

        {/* ── Card ── */}
        <div className="lg-card">

          {/* Card Header */}
          <div className="lg-card-header">
            <div className="lg-icon-wrap">
              <KeyIcon />
            </div>
            <h2>Sign In</h2>
            <span className="lg-badge">Secure Login</span>
          </div>

          {/* Server Error Banner */}
          {serverError && (
            <div className="lg-alert">
              <AlertIcon />
              <span>{serverError}</span>
            </div>
          )}

          {/* Form */}
          <form className="lg-form" onSubmit={handleSubmit} noValidate>

            {/* Email */}
            <div className="lg-field">
              <label className="lg-label">Email Address</label>
              <div className="lg-input-wrap">
                <span className="lg-input-icon"><MailIcon /></span>
                <input
                  className={`lg-input ${errors.email ? "error" : ""}`}
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  autoFocus
                />
              </div>
              {errors.email && <span className="lg-error">{errors.email}</span>}
            </div>

            {/* Password */}
            <div className="lg-field">
              <div className="lg-label-row">
                <label className="lg-label">Password</label>
                <a href="/forgot-password" className="lg-forgot">Forgot password?</a>
              </div>
              <div className="lg-input-wrap">
                <span className="lg-input-icon"><LockIcon /></span>
                <input
                  className={`lg-input ${errors.password ? "error" : ""}`}
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  className="lg-eye-btn"
                  onClick={() => setShowPassword((v) => !v)}
                  tabIndex={-1}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                </button>
              </div>
              {errors.password && <span className="lg-error">{errors.password}</span>}
            </div>

            {/* Remember Me */}
            <label className="lg-remember">
              <div
                className={`lg-checkbox ${remember ? "checked" : ""}`}
                onClick={() => setRemember((v) => !v)}
                role="checkbox"
                aria-checked={remember}
                tabIndex={0}
                onKeyDown={(e) => e.key === " " && setRemember((v) => !v)}
              >
                {remember && (
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </div>
              <span>Remember me for 30 days</span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              className="lg-btn lg-btn-primary"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="lg-spinner" />
                  Signing in…
                </>
              ) : (
                "Sign In"
              )}
            </button>

            {/* Divider */}
            <div className="lg-divider">
              <span>or</span>
            </div>

            {/* Register Link */}
            <p className="lg-register-link">
              Don't have an account?{" "}
              <a href="/register">Create one</a>
            </p>

          </form>
        </div>

      </div>
    </div>
  );
};

export default Login;