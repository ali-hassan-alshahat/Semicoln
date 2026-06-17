import AppLayout from "@/components/ui/Layout/AppLayout";
import LoginPage from "@/pages/auth/LoginPage";
import RegisterPage from "@/pages/auth/RegisterPage";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
const Routing = () => {
  return (
    <Suspense
      fallback={
        <div className="min-h-[50vh] flex items-center justify-center text-sm text-gray-500">
          Loading...
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<AppLayout />}></Route>
        <Route path="auth">
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default Routing;
