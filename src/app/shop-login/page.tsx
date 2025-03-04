import LoginPage from "@/components/ShopLoginPage";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Shop-Login",
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