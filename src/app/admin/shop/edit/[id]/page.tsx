import React from "react";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import ShopEditForm from "@/components/Form/shop-form/Update";
import toast from "react-hot-toast";
import { shopApi } from "@/api/shopApi";
import { localityApi } from "@/api/localityApi";


export const metadata: Metadata = {
  title: "Next.js Form Elements Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Form Elements page for NextAdmin Dashboard Kit",
};

async function getShop(id: string) {
try {
  const response = await shopApi.getshop(id);
  return response.data;
} catch (error: any) {
  toast.error(error.message);
  console.log(error);
}
}

async function getAllLocality() {
  try {
    const response = await localityApi.getAllLocality();
    return response.data;
  } catch (error: any) {
    toast.error(error.message);
    console.log(error);
  }
  }

const FormElementsPage = async ({params}:{params:{id:string}}) => {
  const response = await getShop(params.id);
  const shop = response.data.shop;
  const response1 = await getAllLocality();
  const localities = response1.data.localities;
  return (
    <DefaultLayout>
  
      <ShopEditForm shop={shop} shopId={params.id} listOfLocalities={localities}/>
    </DefaultLayout>
  );
};


export default FormElementsPage;