import { Routes, Route, Navigate } from 'react-router-dom';

import { SignIn } from '../pages/Signin';
import { Signup } from '../pages/Signup';


export function AuthRoutes() {
  const user = localStorage.getItem("@rocketnotes:user");
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/register" element={<Signup />} />

      { !user && <Route path="*" element={<Navigate to="/"/>}/> }
    </Routes>
  );
}