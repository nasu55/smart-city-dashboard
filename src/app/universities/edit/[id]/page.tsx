import React from "react";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import BrandEditForm from "@/components/Form/Brand-form/Update";
import { brandApi } from "@/api/brandApi";
import toast from "react-hot-toast";

export const metadata: Metadata = {
  title: "Next.js Form Elements Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Form Elements page for NextAdmin Dashboard Kit",
};

// async function getBrand(id:string) {
//   try {
//     const response = await brandApi.getBrand(id);
//     // const Products = await response.json();
//     return response.data;
//   } catch (error:any) {
//     toast.error(error.message)
//     console.log(error)
32

//   }
// }

const FormElementsPage = async ({params}:{params:{id:string}}) => {
  // const response = await getBrand(params.id)
  const brand = {}
  return (
    <DefaultLayout>
      <BrandEditForm/>
    </DefaultLayout>
  );
};


export default FormElementsPage;
