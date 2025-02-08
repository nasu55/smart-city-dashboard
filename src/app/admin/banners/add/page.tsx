import React from "react";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import BannerAddForm from "@/components/Form/banner-form/Add";
import { categoryApi } from "@/api/categoryApi";
import { bannerApi } from "@/api/bannerApi";
import { productApi } from "@/api/productApi";
import { shopApi } from "@/api/shopApi";

export const metadata: Metadata = {
  title: "Next.js Form Elements Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Form Elements page for NextAdmin Dashboard Kit",
};

 async function getAllcategory() {
  try {
    const response = await categoryApi.getAllCategories();
    console.log(response.data)
    return response.data;
  } catch (error:any) {
    // console.log(error)
    // toast.error(error.message)
  }}

  async function getAllProduct() {
  try {
    const response = await shopApi.getAllshop();
    return response.data;
  } catch (error:any) {
    console.log(error)
    // toast.error(error.message)
  }}

const FormElementsPage = async () => {
  const response = await getAllcategory()
  const categories = response?.data?.categories

  const response1 = await getAllProduct()
  const shops = response1?.data.shops
  return (
    <DefaultLayout>
      <BannerAddForm categoryList={categories} shops={shops}/>
    </DefaultLayout>
  );
};

export default FormElementsPage;