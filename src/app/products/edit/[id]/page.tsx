import React from "react";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import ProductForm from "@/components/Form/Product-form/Update";
import { productApi } from "@/api/productApi";
import toast from "react-hot-toast";
import { brandApi } from "@/api/brandApi";
import { categoryApi } from "@/api/categoryApi";
import { subCategoryApi } from "@/api/subCategoryApi";

export const metadata: Metadata = {
  title: "Next.js Form Elements Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Form Elements page for NextAdmin Dashboard Kit",
};

async function getProduct(id: string) {
  try {
    const oneProduct: any = await productApi.getProduct(id);
    const listOfBrands: any = await brandApi.getBrandsForProduct();
    const listOfCategories: any = await categoryApi.getCategoriesForProduct();
    const listOfSubCategories: any = await subCategoryApi.getSubCategoriesForProduct();

    return { oneProduct: oneProduct.data, listOfBrands: listOfBrands.data , listOfCategories:listOfCategories.data,listOfSubCategories:listOfSubCategories.data};

  } catch (error: any) {
    toast.error(error.message)
    console.log(error);
  }
}

const FormElementsPage = async ({ params }: { params: { id: string } }) => {
  const response :any= await getProduct(params.id);
  const product = response.oneProduct.data;
  const brands = response.listOfBrands.data;
  const categories = response.listOfCategories.data;
  const subCategories = response.listOfSubCategories.data;
  return (
    <DefaultLayout>
      <ProductForm productId={params.id} getProduct={product} brandList={brands} categoryList={categories} subCategoryList={subCategories}/>
    </DefaultLayout>
  );
};

export default FormElementsPage;
