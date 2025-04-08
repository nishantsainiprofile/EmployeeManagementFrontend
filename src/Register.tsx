import React, { useState } from 'react';
import axios from 'axios';
import { Eye, EyeOff } from 'lucide-react';

const RegisterPage: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Regex patterns
    const nameRegex = /^[A-Za-z\s]{3,}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    if (!nameRegex.test(form.name)) {
      setError("Name must be at least 3 characters long and contain only letters.");
      setSuccess(null);
      return;
    }

    if (!emailRegex.test(form.email)) {
      setError("Email must be in the format: example@gmail.com");
      setSuccess(null);
      return;
    }

    if (!passwordRegex.test(form.password)) {
      setError(
        "Password must be at least 8 characters long, include uppercase, lowercase, number, and special character."
      );
      setSuccess(null);
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      setSuccess(null);
      return;
    }

    try {
      const response = await axios.post('http://localhost:5001/api/EmployeeRegister', {
        name: form.name,
        email: form.email,
        password: form.password,
      });

      setSuccess(response.data.message || "Registration successful!");
      setError(null);
      setForm({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.error || 'An error occurred.');
      } else {
        setError('An unexpected error occurred.');
      }
      setSuccess(null);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card p-4 shadow" style={{ maxWidth: '400px', width: '100%' }}>
        <h2 className="text-center mb-4">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          {/* Password Field with Toggle */}
          <div className="mb-3 position-relative">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="form-control"
              required
            />
            <span
              className="position-absolute top-50 end-0 translate-middle-y pe-3"
              style={{ cursor: 'pointer' }}
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </span>
          </div>

          {/* Confirm Password Field with Toggle */}
          <div className="mb-3 position-relative">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
              className="form-control"
              required
            />
            <span
              className="position-absolute top-50 end-0 translate-middle-y pe-3"
              style={{ cursor: 'pointer' }}
              onClick={() => setShowConfirmPassword((prev) => !prev)}
            >
              {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </span>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Register
          </button>
        </form>

        {success && <div className="alert alert-success mt-3 text-center">{success}</div>}
        {error && <div className="alert alert-danger mt-3 text-center">{error}</div>}
      </div>
    </div>
  );
};

export default RegisterPage;
