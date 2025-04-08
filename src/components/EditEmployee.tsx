// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams, useNavigate } from 'react-router-dom';

// const EditEmployee: React.FC = () => {
//   const { id } = useParams();
//   console.log(id);
//   const navigate = useNavigate();
//     const [confirm ,setConfirm] =useState("");
//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     position: '',
//     salary: '',
//   });

//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchEmployee = async () => {
//       try {
//         const res = await axios.get(`http://localhost:5001/api/employees/${id}`);
//         const data = res.data;
//         setForm({
//           name: data.name,
//           email: data.email,
//           position: data.position,
//           salary: data.salary.toString(),
//         });
//         setLoading(false);
//       } catch (err) {
//         setError('Failed to load employee data.');
//         setLoading(false);
//       }
//     };

//     fetchEmployee();
//   }, [id]);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//      const response= await axios.put(`http://localhost:5001/api/employees/${id}`, {
//         ...form,
//         salary: Number(form.salary),
//         setConfirm(response.data.confirmition)
//       });
//       navigate('/');
//     } catch (err) {
//       alert('Failed to update employee.');
//     }
//   };

//   if (loading) return <div className="text-center mt-4">Loading...</div>;
//   if (error) return <div className="alert alert-danger">{error}</div>;

//   return (
//     <div className="container mt-4">
//       <h2>Edit Employee</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label>Name</label>
//           <input type="text" className="form-control" name="name" value={form.name} onChange={handleChange} required />
//         </div>
//         <div className="mb-3">
//           <label>Email</label>
//           <input type="email" className="form-control" name="email" value={form.email} onChange={handleChange} required />
//         </div>
//         <div className="mb-3">
//           <label>Position</label>
//           <input type="text" className="form-control" name="position" value={form.position} onChange={handleChange} required />
//         </div>
//         <div className="mb-3">
//           <label>Salary</label>
//           <input type="number" className="form-control" name="salary" value={form.salary} onChange={handleChange} required />
//         </div>
//         <p>{confirm}</p>
//         <button type="submit" className="btn btn-primary">Update</button>
//       </form>
//     </div>
//   );
// };

// export default EditEmployee;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditEmployee: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [confirm, setConfirm] = useState("");

  const [form, setForm] = useState({
    name: '',
    email: '',
    position: '',
    salary: '',
  });

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const res = await axios.get(`http://localhost:5001/api/employees/${id}`);
        const data = res.data;
        setForm({
          name: data.name,
          email: data.email,
          position: data.position,
          salary: data.salary.toString(),
        });
        setLoading(false);
      } catch (err) {
        setError('Failed to load employee data.');
        setLoading(false);
      }
    };

    fetchEmployee();
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5001/api/employees/${id}`, {
        ...form,
        salary: Number(form.salary),
      });

      setConfirm("Employee updated successfully!" );
      setTimeout(() => navigate('/'), 1500); // Navigate after short delay
    } catch (err) {
      alert('Failed to update employee.');
    }
  };

  if (loading) return <div className="text-center mt-4">Loading...</div>;
  if (error) return <div className="alert alert-danger">{error}</div>;

  return (
    <div className="container mt-4">
      <h2>Edit Employee</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Name</label>
          <input type="text" className="form-control" name="name" value={form.name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" className="form-control" name="email" value={form.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Position</label>
          <input type="text" className="form-control" name="position" value={form.position} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Salary</label>
          <input type="number" className="form-control" name="salary" value={form.salary} onChange={handleChange} required />
        </div>
        {confirm && <p className="text-success">{confirm}</p>}
        <button type="submit" className="btn btn-primary">Update</button>
      </form>
    </div>
  );
};

export default EditEmployee;
