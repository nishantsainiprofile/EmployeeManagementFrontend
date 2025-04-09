// import React from 'react';
// import { Link } from 'react-router-dom';

// const Header: React.FC = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4">
//       <Link to="/" className="navbar-brand">Employee Management</Link>
//       <Link to="/Login" className="navbar-brand">Login </Link>
//       <Link to="/Register" className="navbar-brand">Register</Link>

//       <div className="collapse navbar-collapse">
//         <ul className="navbar-nav ms-auto">
//           {/* Hoverable Dropdown */}
//           <li className="nav-item dropdown">
//             <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">
//               Employee
//             </span>
//             <ul className="dropdown-menu">
//               <li>
//                 <Link className="dropdown-item" to="/employees">Employee List</Link>
//               </li>
//               <li>
//                 <Link className="dropdown-item" to="/add-employee">Add Employee</Link>
//               </li>
//               <li>
//                 <Link className="dropdown-item" to="/edit-employee">Edit Employee</Link> 
//                 {/* Replace 1 with dynamic ID when using it in real flow */}
//               </li>
//             </ul>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Header;
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Header: React.FC = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4">
//       <Link to="/" className="navbar-brand">Employee Management</Link>

//       <button
//         className="navbar-toggler"
//         type="button"
//         data-bs-toggle="collapse"
//         data-bs-target="#navbarNav"
//         aria-controls="navbarNav"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//       >
//         <span className="navbar-toggler-icon"></span>
//       </button>

//       <div className="collapse navbar-collapse" id="navbarNav">
//         <ul className="navbar-nav ms-auto">

//           {/* Login & Register */}
//           <li className="nav-item">
//             <Link to="/Login" className="nav-link">Login</Link>
//           </li>
//           <li className="nav-item">
//             <Link to="/Register" className="nav-link">Register</Link>
//           </li>

//           {/* Dropdown */}
//           <li className="nav-item dropdown">
//             <span
//               className="nav-link dropdown-toggle"
//               role="button"
//               data-bs-toggle="dropdown"
//               aria-expanded="false"
//             >
//               Employee
//             </span>
//             <ul className="dropdown-menu dropdown-menu-end">
//               <li><Link className="dropdown-item" to="/employees">Employee List</Link></li>
//               <li><Link className="dropdown-item" to="/add-employee">Add Employee</Link></li>
//               <li><Link className="dropdown-item" to="/edit-employee/1">Edit Employee</Link></li>
//             </ul>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Header;
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// const Header: React.FC = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const navigate = useNavigate();

//   const handleSearch = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (searchTerm.trim()) {
//       navigate(`/SearchEmployee?query=${encodeURIComponent(searchTerm.trim())}`);
//       setSearchTerm('');
//     }
//   };

//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4">
//       <Link to="/" className="navbar-brand">Employee Management</Link>

//       <form className="d-flex ms-3" onSubmit={handleSearch}>
//         <input
//           className="form-control me-2"
//           type="search"
//           placeholder="Search by Name, Salary or Position"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           style={{ borderRadius: 5, fontSize: 15 }}
//         />
//         <button className="btn btn-light" type="submit">Search</button>
//       </form>

//       <div className="collapse navbar-collapse show" id="navbarNav">
//         <ul className="navbar-nav ms-auto">
//           <li className="nav-item">
//             <Link to="/login" className="nav-link">Login</Link>
//           </li>
//           <li className="nav-item">
//             <Link to="/register" className="nav-link">Register</Link>
//           </li>

//           <li className="nav-item dropdown">
//             <span
//               className="nav-link dropdown-toggle"
//               role="button"
//               data-bs-toggle="dropdown"
//               aria-expanded="false"
//             >
//               Employee
//             </span>
//             <ul className="dropdown-menu dropdown-menu-end">
//               <li><Link className="dropdown-item" to="/employees">Employee List</Link></li>
//               <li><Link className="dropdown-item" to="/add-employee">Add Employee</Link></li>
//               <li><Link className="dropdown-item" to="/edit-employee/1">Edit Employee</Link></li>
//             </ul>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Header;

// components/Header.tsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  console.log(searchTerm.trim());
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/SearchEmployee?query=${encodeURIComponent(searchTerm.trim())}`);
         setSearchTerm('');
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4">
      <Link to="/" className="navbar-brand">Employee Management</Link>

      <form className="d-flex ms-3" onSubmit={handleSearch}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search by Name, Salary or Position"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ borderRadius: 5, fontSize: 15 }}
        />
        <button className="btn btn-light" type="submit">Search</button>
      </form>

      <div className="collapse navbar-collapse show" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link to="/login" className="nav-link">Login</Link>
          </li>
          <li className="nav-item">
            <Link to="/register" className="nav-link">Register</Link>
          </li>
          <li className="nav-item dropdown">
            <span
              className="nav-link dropdown-toggle"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Employee
            </span>
            <ul className="dropdown-menu dropdown-menu-end">
              <li><Link className="dropdown-item" to="/employees">Employee List</Link></li>
              <li><Link className="dropdown-item" to="/add-employee">Add Employee</Link></li>
              <li><Link className="dropdown-item" to="/edit-employee/1">Edit Employee</Link></li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
