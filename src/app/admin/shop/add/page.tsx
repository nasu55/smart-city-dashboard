import React from "react";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import ShopAddForm from "@/components/Form/shop-form/Add";
import { localityApi } from "@/api/localityApi";
import { categoryApi } from "@/api/categoryApi";

export const metadata: Metadata = {
  title: "Next.js Form Elements Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Form Elements page for NextAdmin Dashboard Kit",
};

async function getAllLocality() {
try {
  const response = await localityApi.getAllLocality();
  return response?.data;
} catch (error:any) {
  // toast.error(error.message)
  console.log(error)
}
}
async function getAllcategory() {
try {
  const response = await categoryApi.getAllCategories();
  return response?.data;
} catch (error:any) {
  // toast.error(error.message)
  console.log(error)
}
}

const FormElementsPage = async () => {
  const response = await getAllLocality()
  const localities = response?.data.localities
  const responseCategory = await getAllcategory()
  const Categories = responseCategory?.data.categories
  
 
  return (
    <DefaultLayout>
      <ShopAddForm listOfLocalities={localities} listCategories = {Categories} />
    </DefaultLayout>
  );
};

export default FormElementsPage;
