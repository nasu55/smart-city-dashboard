import React from "react";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import toast from "react-hot-toast";
import { subCategoryApi } from "@/api/subCategoryApi";
import CategoryUpdateForm from "@/components/Form/category-form/Update";
import { bannerApi } from "@/api/bannerApi";
import BannerEditForm from "@/components/Form/banner-form/Update";
import { categoryApi } from "@/api/categoryApi";
import { shopApi } from "@/api/shopApi";

export const metadata: Metadata = {
  title: "Next.js Form Elements Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Form Elements page for NextAdmin Dashboard Kit",
};

async function getBannerApi(id: string) {
  try {
    const response: any = await bannerApi.getBanner(id);

    return  response;

  } catch (error: any) {
    // toast.error(error.message)
    console.log(error);
  }
}
 async function getAllcategoryApi() {
  try {
    const response = await categoryApi.getAllCategories();
    console.log(response.data)
    return response.data;
  } catch (error:any) {
    // console.log(error)
    // toast.error(error.message)
  }}

  async function getAllShopApi() {
  try {
    const response = await shopApi.getAllshop();
    return response.data;
  } catch (error:any) {
    // console.log(error)
    // toast.error(error.message)
  }}



const BannerEditPage = async ({ params }: { params: { id: string } }) => {
  
  const response1 :any= await getBannerApi(params.id);
  const banner = response1.data.data.banner;
  
  const response2 = await getAllcategoryApi()
  const categories = response2?.data?.categories

  const response3 = await getAllShopApi()
  const shops = response3.data.shops
  console.log('data',banner)

  return (
    <DefaultLayout>
      <BannerEditForm bannerId={params.id} banners={banner} categoryList={categories} shopList={shops} />
    </DefaultLayout>
  );
};

export default BannerEditPage;
