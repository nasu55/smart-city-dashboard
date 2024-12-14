import React from "react";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import ShopEditForm from "@/components/Form/shop-form/Update";
import toast from "react-hot-toast";
import { shopApi } from "@/api/shopApi";


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

const FormElementsPage = async ({params}:{params:{id:string}}) => {
  const response = await getShop(params.id);
  const shop = response.data.shop;
  return (
    <DefaultLayout>
  
      <ShopEditForm shop={shop} shopId={params.id}/>
    </DefaultLayout>
  );
};


export default FormElementsPage;