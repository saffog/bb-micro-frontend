import React from "react";
import { Router } from "./routing/Router";
import {useSessionStorage} from './hooks/useSessionStorage';
import {COMPANY_DATA, TypeUserSData, USERS_DATA} from './services/users';
import "./index.css";

const Host = () => {
  const [getSessionStorageUsers, setSessionStorageUsers, removeSessionStorageUsers] = useSessionStorage<TypeUserSData[]>('users');
  const [getSessionStorageCompanies, setSessionStorageCompanies, removeSessionStorageCompanies] = useSessionStorage<TypeUserSData[]>('companies');

  removeSessionStorageUsers();
  removeSessionStorageCompanies();
  setSessionStorageUsers(USERS_DATA);
  setSessionStorageCompanies(COMPANY_DATA);

  return (
    <>
      {/* Initialize the router component */}
       <Router/>
    </>
  )
};

export default Host;