import React, { useState } from "react";
import "./Register.css";
import API from "../services/Api";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const MailIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <polyline points="22,4 12,13 2,4" />
  </svg>
);

const LockIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const EyeIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const EyeOffIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>
);

const PhoneIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.95 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.87 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MapPinIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const ShieldIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const CheckIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

// ─── Password Strength ────────────────────────────────────────────────────────

const getStrength = (password) => {
  if (!password) return { score: 0, label: "", color: "" };
  let score = 0;
  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;
  const map = [
    { label: "Too short", color: "#ef4444" },
    { label: "Weak", color: "#ef4444" },
    { label: "Fair", color: "#eab308" },
    { label: "Good", color: "#3b82f6" },
    { label: "Strong", color: "#22c55e" },
  ];
  return { score, ...map[score] };
};

// ─── Main Component ───────────────────────────────────────────────────────────

const EMPTY_FORM = {
  name: "",
  email: "",
  phone: "",
  address: "",
  password: "",
  confirmPassword: "",
};

const Register = () => {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  console.log("submiteed", submitted);   
  const [errors, setErrors] = useState({});

  const strength = getStrength(formData.password);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Name is required";
    if (!formData.email.trim()) errs.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      errs.email = "Enter a valid email";
    if (!formData.password) errs.password = "Password is required";
    else if (formData.password.length < 8)
      errs.password = "Minimum 8 characters";
    if (formData.password !== formData.confirmPassword)
      errs.confirmPassword = "Passwords do not match";
    return errs;
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const errs = validate();
      if (Object.keys(errs).length) {
        setErrors(errs);
        return;
      }

      const response = await API.post("/register", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
      });

      console.log("Registration response:", response); 

      if (response.data.statusCode == 200) {
      
          setLoading(false);
          toast.success(response.data.message);
       
        setSubmitted(true);
      }

    } 
    catch (error) {
      console.log(error);
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Server Error");
      }
    }
  };

  const handleReset = () => {
    setFormData(EMPTY_FORM);
    setErrors({});
    setSubmitted(false);
  };

  const passwordsMatch =
    formData.confirmPassword.length > 0 &&
    formData.password === formData.confirmPassword;

  // ── Success State ──
  if (submitted) {
    return (
      <div className="rg-wrap">
        <div className="rg-success-box">
          <div className="rg-success-icon">
            <CheckIcon />
          </div>
          <h2 className="rg-success-title">Account Created!</h2>
          <p className="rg-success-sub">
            Welcome aboard, <strong>{formData.name}</strong>. Your account is
            ready.
          </p>
          <a
            href="/login"
            className="rg-btn rg-btn-primary"
            style={{ display: "flex", justifyContent: "center" }}
          >
            Go to Login
          </a>
          <button className="rg-link-btn" onClick={handleReset}>
            Register another account
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="rg-wrap">
      <div className="rg-container">
        {/* ── Header ── */}
        <div className="rg-header">
          <h1 className="rg-title">Create an Account</h1>
          <p className="rg-subtitle">Fill in your details to get started</p>
        </div>

        {/* ── Card ── */}
        <div className="rg-card">
          {/* Card Header */}
          <div className="rg-card-header">
            <div className="rg-icon-wrap">
              <ShieldIcon />
            </div>
            <h2>Register</h2>
            <span className="rg-badge">New Account</span>
          </div>

          {/* Form */}
          <form className="rg-form" onSubmit={handleSubmit} noValidate>
            {/* ── Row: Name + Email ── */}
            <div className="rg-row">
              {/* Name */}
              <div className="rg-field">
                <label className="rg-label">Full Name</label>
                <div className="rg-input-wrap">
                  <span className="rg-input-icon">
                    <UserIcon />
                  </span>
                  <input
                    className={`rg-input ${errors.name ? "error" : ""}`}
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                  />
                </div>
                {errors.name && <span className="rg-error">{errors.name}</span>}
              </div>

              {/* Email */}
              <div className="rg-field">
                <label className="rg-label">Email Address</label>
                <div className="rg-input-wrap">
                  <span className="rg-input-icon">
                    <MailIcon />
                  </span>
                  <input
                    className={`rg-input ${errors.email ? "error" : ""}`}
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                  />
                </div>
                {errors.email && (
                  <span className="rg-error">{errors.email}</span>
                )}
              </div>
            </div>

            {/* ── Row: Phone + Address ── */}
            <div className="rg-row">
              {/* Address */}
              {/* <div className="rg-field">
                <label className="rg-label">Address</label>
                <div className="rg-input-wrap">
                  <span className="rg-input-icon"><MapPinIcon /></span>
                  <input
                    className="rg-input"
                    type="text"
                    name="address"
                    placeholder="123 Main St, City"
                    value={formData.address}
                    onChange={handleChange}
                    autoComplete="street-address"
                  />
                </div>
              </div> */}
            </div>

            {/* ── Password ── */}
            <div className="rg-field">
              <label className="rg-label">Password</label>
              <div className="rg-input-wrap">
                <span className="rg-input-icon">
                  <LockIcon />
                </span>
                <input
                  className={`rg-input ${errors.password ? "error" : ""}`}
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Min. 8 characters"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="new-password"
                />
                <button
                  type="button"
                  className="rg-eye-btn"
                  onClick={() => setShowPassword((v) => !v)}
                  tabIndex={-1}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                </button>
              </div>
              {errors.password && (
                <span className="rg-error">{errors.password}</span>
              )}

              {/* Strength Meter */}
              {formData.password.length > 0 && (
                <div className="rg-strength">
                  <div className="rg-strength-bars">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="rg-strength-bar"
                        style={{
                          background:
                            i <= strength.score
                              ? strength.color
                              : "var(--border)",
                          transition: "background 0.3s",
                        }}
                      />
                    ))}
                  </div>
                  <span
                    className="rg-strength-label"
                    style={{ color: strength.color }}
                  >
                    {strength.label}
                  </span>
                </div>
              )}
            </div>

            {/* ── Confirm Password ── */}
            <div className="rg-field">
              <label className="rg-label">Confirm Password</label>
              <div className="rg-input-wrap">
                <span className="rg-input-icon">
                  <LockIcon />
                </span>
                <input
                  className={`rg-input ${errors.confirmPassword ? "error" : passwordsMatch ? "success" : ""}`}
                  type={showConfirm ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Re-enter your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  autoComplete="new-password"
                />
                <button
                  type="button"
                  className="rg-eye-btn"
                  onClick={() => setShowConfirm((v) => !v)}
                  tabIndex={-1}
                  aria-label={showConfirm ? "Hide password" : "Show password"}
                >
                  {showConfirm ? <EyeOffIcon /> : <EyeIcon />}
                </button>
              </div>
              {errors.confirmPassword && (
                <span className="rg-error">{errors.confirmPassword}</span>
              )}
              {passwordsMatch && (
                <span className="rg-match">
                  <CheckIcon /> Passwords match
                </span>
              )}
            </div>

            {/* ── Submit ── */}
            <button
              type="submit"
              className="rg-btn rg-btn-primary"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="rg-spinner" />
                  Creating Account…
                </>
              ) : (
                "Create Account"
              )}
            </button>

            {/* ── Login Link ── */}
            <p className="rg-login-link">
              Already have an account? <a href="/login">Sign in</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
