import LoginPage from "@/components/AdminLoginPage";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Admin Login",
  description: "This is Next.js Settings page for NextAdmin Dashboard Kit",
};

const Login = () => {
  return (
    <>
    <LoginPage/>
    </>
  );
};

export default Login;