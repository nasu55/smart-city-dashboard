import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import BrandTable from "@/components/Tables/Brand";
import { brandApi } from "@/api/brandApi";
import toast from "react-hot-toast";
import { PackageNavigation } from "@/types/packageNavigation";
import ShopTable from "@/components/Tables/shop";
import { shopApi } from "@/api/shopApi";

export const metadata: Metadata = {
  title: "Shop-admin",
  description: "This is  page for ShopAdmin",
};

const packageData: PackageNavigation[] = [
  {
    name:'Dashboard / ',
    link:'/'
  },
  {
    name:'Shop admin',
    link:'/Shop'
  },
];

async function getAllShops() {
try {
  const response = await shopApi.getAllshop();
  return response.data;
} catch (error:any) {
  // console.log(error)
  // toast.error(error.message)
}}

const TablesPage = async () => {
  const response = await getAllShops()

  const shops = response.data.shops

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Shop admin" navigation={packageData}/>
      <div className="flex flex-col gap-10">
Hello      </div>
    </DefaultLayout>
  );
};

export default TablesPage;
