// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Table, Form, Container } from 'react-bootstrap';

// interface Employee {
//   _id: string;
//   name: string;
//   email: string;
//   position: string;
//   department: string;
//   salary: number;
// }

// const EmployeeList: React.FC = () => {
//   const [employees, setEmployees] = useState<Employee[]>([]);
//   const [search, setSearch] = useState<string>('');
//   const [filteredEmployees, setFilteredEmployees] = useState<Employee[]>([]);

//   useEffect(() => {
//     axios.get('https://employee-management-backend-inky.vercel.app/api/employeeList')
//       .then(response => {
//         setEmployees(response.data);
//         setFilteredEmployees(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching employees:', error);
//       });
//   }, []);

//   useEffect(() => {
//     const filtered = employees.filter(emp =>
//       emp.name.toLowerCase().includes(search.toLowerCase()) ||
//       emp.position.toLowerCase().includes(search.toLowerCase()) ||
//       emp.salary.toString().includes(search)
//     );
//     setFilteredEmployees(filtered);
//   }, [search, employees]);

//   return (
//     <Container className="mt-4">
//       <h2 className="mb-3">Employee List</h2>

//       <Form.Control
//         type="text"
//         placeholder="Search by Name, Position or Salary"
//         className="mb-4"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       <Table striped bordered hover responsive>
//         <thead className="table-dark">
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Position</th>
//             <th>Department</th>
//             <th>Salary</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredEmployees.length > 0 ? (
//             filteredEmployees.map((emp) => (
//               <tr key={emp._id}>
//                 <td>{emp.name}</td>
//                 <td>{emp.email}</td>
//                 <td>{emp.position}</td>
//                 <td>{emp.department}</td>
//                 <td>{emp.salary}</td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan={5} className="text-center">No matching employees found.</td>
//             </tr>
//           )}
//         </tbody>
//       </Table>
//     </Container>
//   );
// };

// export default EmployeeList;



// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import axios from 'axios';

// interface Employee {
//   _id: string;
//   name: string;
//   email: string;
//   position: string;
//   department: string;
//   salary: number;
// }

// const SearchEmployee: React.FC = () => {
//   const location = useLocation();
//   const [results, setResults] = useState<Employee[]>([]);
//   const query = new URLSearchParams(location.search).get('query');

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axios.get<Employee[]>('https://employee-management-backend-inky.vercel.app/api/employeeList');
//         const filtered = res.data.filter(emp =>
//           emp.name.toLowerCase().includes(query?.toLowerCase() || '') ||
//           emp.position.toLowerCase().includes(query?.toLowerCase() || '') ||
//           emp.salary.toString().includes(query || '')
//         );
//         setResults(filtered);
//       } catch (error) {
//         console.error("Failed to fetch employees", error);
//       }
//     };

//     if (query) {
//       fetchData();
//     }
//   }, [query]);

//   return (
//     <div className="container mt-4">
//       <h4>Search Results for "{query}"</h4>
//       <ul className="list-group mt-3">
//         {results.length > 0 ? (
//           results.map((emp) => (
//             <li key={emp._id} className="list-group-item">
//               <strong>{emp.name}</strong> — {emp.position}, Salary: ₹{emp.salary}
//             </li>
//           ))
//         ) : (
//           <li className="list-group-item">No results found.</li>
//         )}
//       </ul>
//     </div>
//   );
// };

// export default SearchEmployee;



// components/SearchEmployee.tsx
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

interface Employee {
  _id: string;
  name: string;
  email: string;
  position: string;
  department: string;
  salary: number;
}

const SearchEmployee: React.FC = () => {
  const location = useLocation();
  const [results, setResults] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const query = new URLSearchParams(location.search).get('query');
  console.log(query);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get<Employee[]>('https://employee-management-backend-inky.vercel.app/api/employeeList');
        const filtered = res.data.filter(emp =>
          emp.name.toLowerCase().includes(query?.toLowerCase() || '') ||
          emp.position.toLowerCase().includes(query?.toLowerCase() || '') ||
          emp.department.toLowerCase().includes(query?.toLowerCase() || '') ||
          emp.salary.toString().includes(query || '')
        );
        setResults(filtered);
      } catch (error) {
        console.error("Failed to fetch employees", error);
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      fetchData();
    } else {
      setLoading(false);
    }
  }, [query]);

  return (
    <div className="container mt-4">
      <h4>Search Results for "{query}"</h4>

      {loading ? (
        <div className="alert alert-info mt-3">Loading...</div>
      ) : results.length > 0 ? (
        <ul className="list-group mt-3">
          {results.map((emp) => (
            <li key={emp._id} className="list-group-item">
              <strong>{emp.name}</strong><br />
              <span>Email: {emp.email}</span><br />
              <span>Position: {emp.position}</span><br />
              <span>Department: {emp.department}</span><br />
              <span>Salary: ₹{emp.salary}</span>
            </li>
          ))}
        </ul>
      ) : (
        <div className="alert alert-warning mt-3">No results found.</div>
      )}
    </div>
  );
};

export default SearchEmployee;
