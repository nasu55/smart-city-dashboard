import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import React from "react";
import MainPage from "@/components/LoginPage";

export const metadata: Metadata = {
  title:
    "Smart-City",
  description: "This is  Home page for Shop-Admin",
};

export default function Home() {
  return (
    <>
    <MainPage/>


    </>
  );
}
