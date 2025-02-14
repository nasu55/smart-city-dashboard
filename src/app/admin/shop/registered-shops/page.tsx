import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import { PackageNavigation } from "@/types/packageNavigation";
import ShopTable from "@/components/Tables/shop";
import { shopApi } from "@/api/shopApi";
import RegisteredShopsTable from "@/components/Tables/RegisteredShops";

export const metadata: Metadata = {
  title: "Next.js Tables Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Tables page for NextAdmin Dashboard Kit",
};

const packageData: PackageNavigation[] = [
  {
    name:'Dashboard / ',
    link:'/'
  },
  {
    name:'Shops',
    link:'/Shop'
  },
];

async function getAllShops() {
try {
  const response = await shopApi.getRegisteredshop();
  return response.data;
} catch (error:any) {
  console.log('Error:::',error);
  // toast.error(error.message)
}}

const TablesPage = async () => {
  const response = await getAllShops()

  const shops = response?.data.shops

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Shops" navigation={packageData}/>
      <div className="flex flex-col gap-10">
        <RegisteredShopsTable listOfShops={shops}/>
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;
