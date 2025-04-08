import React, { useState } from 'react';
import axios from 'axios';

const AddEmployee: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [position, setPosition] = useState('');
  const [department, setDepartment] = useState('');
  const [salary, setSalary] = useState('');
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5001/api/addemployees', {
        name,
        email,
        position,
        department,
        salary,
      });

      setSuccess('Employee added successfully!');
      setError(null);
      setName('');
      setEmail('');
      setPosition('');
      setDepartment('');
      setSalary('');
    } catch {
      setError('Failed to add employee.');
      setSuccess(null);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card p-4 shadow" style={{ maxWidth: '500px', width: '100%' }}>
        <h2 className="text-center mb-4">Add New Employee</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Position</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Department</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter department"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Salary</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter salary"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Add Employee
          </button>
        </form>

        {success && <div className="alert alert-success mt-3 text-center">{success}</div>}
        {error && <div className="alert alert-danger mt-3 text-center">{error}</div>}
      </div>
    </div>
  );
};

export default AddEmployee;
