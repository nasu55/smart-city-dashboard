import React from "react";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import toast from "react-hot-toast";
import { categoryApi } from "@/api/categoryApi";
import { subCategoryApi } from "@/api/subCategoryApi";
import CategoryAddForm from "@/components/Form/category-form/Update";

export const metadata: Metadata = {
  title: "Next.js Form Elements Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Form Elements page for NextAdmin Dashboard Kit",
};

async function getProduct(id: string) {
  try {
    const response: any = await categoryApi.getCategory(id);

    return  response;

  } catch (error: any) {
    // toast.error(error.message)
    console.log(error);
  }
}

const FormElementsPage = async ({ params }: { params: { id: string } }) => {
  const response :any= await getProduct(params.id);
  const product = response.data.data.category;
  console.log('data',product)

  return (
    <DefaultLayout>
      <CategoryAddForm categoryId={params.id} category={product} />
    </DefaultLayout>
  );
};

export default FormElementsPage;
