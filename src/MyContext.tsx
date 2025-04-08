import React, { createContext,Dispatch,SetStateAction, useState, ReactNode } from 'react';

interface Employee {
  _id: string;
  name: string;
  email: string;
  position: string;
  department: string;
  salary: number;
}

interface AuthContextType {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
  employees: Employee[];
  setEmployees: Dispatch<SetStateAction<Employee[]>>; // ✅ FIX: allow function or array
}

export const MyContext = createContext<AuthContextType>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  employees: [],
  setEmployees: () => {},
});

export const MyContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [employees, setEmployees] = useState<Employee[]>([]);

  return (
    <MyContext.Provider value={{ isLoggedIn, setIsLoggedIn, employees, setEmployees }}>
      {children}
    </MyContext.Provider>
  );
};
