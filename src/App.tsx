// // import Login from "./Login";
// // import Register from "./Register";
// // import AddEmployee from './components/AddEmployee'
// import Header from './components/Header'
// import './index.css'

// function App() {

//   return (
//     <>
//       <div>
//       {/* <Login/> */}
//       {/* <Register/> */}
//       {/* <AddEmployee/> */}
//       <Header/>
//       </div>
    
//     </>
//   )
// }

// export default App
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import EmployeeList from './components/EmployeeList';
// import AddEmployee from './components/AddEmployee';
// import EditEmployee from './components/EditEmployee';

// const App: React.FC = () => {
//   return (
//     <Router>
//       <Header />
//       <div className="container mt-4">
//         <Routes>
//           <Route path="/" element={<EmployeeList />} />
//           <Route path="/employees" element={<EmployeeList />} />
//           <Route path="/add-employee" element={<AddEmployee />} />
//           <Route path="/edit-employee/:id" element={<EditEmployee />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import EmployeeList from './components/EmployeeList';
// import AddEmployee from './components/AddEmployee';
// import EditEmployee from './components/EditEmployee';
// import Login from './Login';
// import Register from './Register';

// const App: React.FC = () => {
//   return (
//     <Router>
//       <Header />
//       <div className="container mt-4">
//         <Routes>
//           <Route path="/" element={<EmployeeList />} />
//           <Route path="/employees" element={<EmployeeList />} />
//           <Route path="/add-employee" element={<AddEmployee />} />
//           <Route path="/edit-employee/:id" element={<EditEmployee />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';
import Login from './Login';
import Register from './Register';
import { MyContextProvider } from './MyContext'; // adjust path if needed
import SearchEmployee from './components/SearchEmployee';
const App: React.FC = () => {
  return (
    <MyContextProvider>
      <Router>
        <Header />
        <div className="container mt-4 flex-grow-1 "   >
          <Routes>
            <Route path="/" element={<EmployeeList />} />
            <Route path="/employees" element={<EmployeeList />} />
            <Route path="/add-employee" element={<AddEmployee />} />
            <Route path="/edit-employee/:id" element={<EditEmployee />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/SearchEmployee" element={<SearchEmployee />} />
          </Routes>
        </div>
      </Router>
    </MyContextProvider>
  );
};

export default App;
