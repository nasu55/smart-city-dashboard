import React from "react";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import toast from "react-hot-toast";
import { brandApi } from "@/api/brandApi";
import { categoryApi } from "@/api/categoryApi";
import { subCategoryApi } from "@/api/subCategoryApi";
import ProductAddForm from "@/components/Form/product-form/Add";

export const metadata: Metadata = {
  title: "Next.js Form Elements Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Form Elements page for NextAdmin Dashboard Kit",
};

async function getProduct() {
  try {
    const listOfCategories: any = await categoryApi.getAllCategories();
    return { listOfCategories:listOfCategories.data};

  } catch (error: any) {  
    console.log(error);
  }
}

const FormElementsPage = async () => {
  const response :any= await getProduct();
  const categories = response.listOfCategories.data;

  return (
    <DefaultLayout>
      <ProductAddForm categoryList={categories} />
    </DefaultLayout>
  );
};

export default FormElementsPage;
