import React from "react";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import ProductForm from "@/components/Form/Product-form/Add";
import toast from "react-hot-toast";
import { brandApi } from "@/api/brandApi";
import { categoryApi } from "@/api/categoryApi";
import { subCategoryApi } from "@/api/subCategoryApi";

export const metadata: Metadata = {
  title: "Next.js Form Elements Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Form Elements page for NextAdmin Dashboard Kit",
};

async function getProduct() {
  try {
    const listOfBrands: any = await brandApi.getBrandsForProduct();
    const listOfCategories: any = await categoryApi.getCategoriesForProduct();
    const listOfSubCategories: any = await subCategoryApi.getSubCategoriesForProduct();
    return { listOfBrands: listOfBrands.data , listOfCategories:listOfCategories.data,listOfSubCategories:listOfSubCategories.data };

  } catch (error: any) {  
    console.log(error);
    toast.error(error.message);
  }
}

const FormElementsPage = async () => {
  const response :any= await getProduct();
  const brands = response.listOfBrands.data;
  const categories = response.listOfCategories.data;
  const subCategories = response.listOfSubCategories.data;

  return (
    <DefaultLayout>
      <ProductForm brandList={brands} categoryList={categories} subCategoryList={subCategories}/>
    </DefaultLayout>
  );
};

export default FormElementsPage;
