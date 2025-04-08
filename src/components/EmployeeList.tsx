// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// interface Employee {
//   id: string;
//   name: string;
//   email: string;
//   position: string;
// }

// const EmployeeList: React.FC = () => {
//   const [employees, setEmployees] = useState<Employee[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     fetchEmployees();
//   }, []);

//   const fetchEmployees = async () => {
//     try {
//       const response = await axios.get<Employee[]>('/api/employees');
//       setEmployees(response.data);
//       setLoading(false);
//     } catch {
//       setError('Failed to fetch employees.');
//       setLoading(false);
//     }
//   };

//   const handleDelete = async (id: string) => {
//     if (!window.confirm('Are you sure you want to delete this employee?')) return;
//     try {
//       await axios.delete(`/api/employees/${id}`);
//       setEmployees(prev => prev.filter(emp => emp.id !== id));
//     } catch {
//       alert('Failed to delete employee.');
//     }
//   };

//   if (loading) {
//     return <div className="text-center mt-5">Loading...</div>;
//   }

//   if (error) {
//     return <div className="alert alert-danger text-center mt-5">{error}</div>;
//   }

//   return (
//     <div className="container mt-5">
//       <h2 className="mb-4 text-center">Employee List</h2>
//       <table className="table table-bordered table-hover">
//         <thead className="table-light">
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Position</th>
//             <th style={{ width: '100px' }}>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {employees.length > 0 ? (
//             employees.map((emp) => (
//               <tr key={emp.id}>
//                 <td>{emp.name}</td>
//                 <td>{emp.email}</td>
//                 <td>{emp.position}</td>
//                 <td>
//                   <button
//                     className="btn btn-danger btn-sm"
//                     onClick={() => handleDelete(emp.id)}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan={4} className="text-center">
//                 No employees found.
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default EmployeeList;
// import React, { useContext, useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { MyContext } from '../MyContext';

// // interface Employee {
// //   _id: string;
// //   name: string;
// //   email: string;
// //   position: string;
// // }

// const EmployeeList: React.FC = () => {
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);
//   const { employees,setEmployees}=useContext(MyContext)

//   useEffect(() => {
//     const fetchEmployees = async () => {
//       try {
//         const response = await axios.get('http://localhost:5001/api/employeeList');
//         console.log('Fetched employees:', response.data);

//         // If API wraps inside 'employees', change below line
//         // setEmployees(response.data.employees);
//         setEmployees(response.data); // Assuming response is array
//         setError(null);
//       } catch (err: unknown) {
//         setError('Failed to fetch employees');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchEmployees();
//   }, []);

//   const handleDelete = async (id: string) => {
//     if (!window.confirm('Are you sure you want to delete this employee?')) return;

//     try {
//       await axios.delete(`/api/employees/${id}`);
//       setEmployees((prev) => prev.filter((emp) => emp._id !== id));
//     } catch (err: unknown) {
//       alert('Failed to delete employee.');
//     }
//   };

//   if (loading) return <div className="text-center mt-4">Loading...</div>;
//   if (error) return <div className="alert alert-danger">{error}</div>;

//   return (
//     <div className="container mt-4">
//       <div className="d-flex justify-content-between align-items-center mb-3">
//         <h2>Employee List</h2>
//         <Link to="/add-employee" className="btn btn-primary">
//           Add Employee
//         </Link>
//       </div>

//       {employees.length === 0 ? (
//         <div className="alert alert-info">No employees found.</div>
//       ) : (
//         <table className="table table-bordered table-striped">
//           <thead className="table-dark">
//             <tr>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Position</th>
//               <th style={{ width: '180px' }}>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {Array.isArray(employees) &&
//               employees.map((emp) => (
//                 <tr key={emp._id}>
//                   <td>{emp.name}</td>
//                   <td>{emp.email}</td>
//                   <td>{emp.position}</td>
//                   <td>
//                     <Link
//                       to={`/edit-employee/${emp._id}`}
//                       className="btn btn-sm btn-info me-2"
//                     >
//                       Edit
//                     </Link>
//                     <button
//                       onClick={() => handleDelete(emp._id)}
//                       className="btn btn-sm btn-danger"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default EmployeeList;
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { MyContext } from '../MyContext';

const EmployeeList: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { employees, setEmployees } = useContext(MyContext);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/employeeList');
        console.log(response);
        setEmployees(response.data); // Make sure your backend sends an array of employees
        setError(null);
      } catch (err) {
        setError('Failed to fetch employees');
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, [setEmployees]);

  const handleDelete = async (_id: string) => {
    if (!window.confirm('Are you sure you want to delete this employee?')) return;

    try {
      await axios.delete(`http://localhost:5001/api/employees/${_id}`);
setEmployees(prev => prev.filter(emp => emp._id !== _id))
    } catch (err) {
      alert('Failed to delete employee.');
    }
  };

  if (loading) return <div className="text-center mt-4">Loading...</div>;
  if (error) return <div className="alert alert-danger">{error}</div>;

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Employee List</h2>
        <Link to="/add-employee" className="btn btn-primary">
          Add Employee
        </Link>
      </div>

      {Array.isArray(employees) && employees.length === 0 ? (
        <div className="alert alert-info">No employees found.</div>
      ) : (
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Position</th>
              <th style={{ width: '180px' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <tr key={emp._id}>
                <td>{emp.name}</td>
                <td>{emp.email}</td>
                <td>{emp.position}</td>
                <td>
                  <Link to={`/edit-employee/${emp._id}`} className="btn btn-sm btn-info me-2">
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(emp._id)}
                    className="btn btn-sm btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default EmployeeList;
