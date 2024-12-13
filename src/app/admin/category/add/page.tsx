import React from "react";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import toast from "react-hot-toast";
import { brandApi } from "@/api/brandApi";
import { categoryApi } from "@/api/categoryApi";
import { subCategoryApi } from "@/api/subCategoryApi";
import CategoryAddForm from "@/components/Form/category-form/Add";

export const metadata: Metadata = {
  title: "Next.js Form Elements Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Form Elements page for NextAdmin Dashboard Kit",
};


const FormElementsPage = async () => {
  
  return (
    <DefaultLayout>
      <CategoryAddForm />
    </DefaultLayout>
  );
};

export default FormElementsPage;
