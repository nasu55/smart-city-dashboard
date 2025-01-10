import React from "react";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import { productApi } from "@/api/productApi";
import toast from "react-hot-toast";
import { brandApi } from "@/api/brandApi";
import { categoryApi } from "@/api/categoryApi";
import { subCategoryApi } from "@/api/subCategoryApi";
import Product from "@/components/Form/product-form/Update";

export const metadata: Metadata = {
  title: "Next.js Form Elements Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Form Elements page for NextAdmin Dashboard Kit",
};

async function getProduct(id: string) {
  try {
    const response: any = await productApi.getProduct(id);

    return  response;

  } catch (error: any) {
    // toast.error(error.message)
    console.log(error);
  }
}

const FormElementsPage = async ({ params }: { params: { id: string } }) => {
  const response :any= await getProduct(params.id);
  const product = response.data.data.product;

  return (
    <DefaultLayout>
      <Product productId={params.id} product={product} />
    </DefaultLayout>
  );
};

export default FormElementsPage;
