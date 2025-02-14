import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import BrandTable from "@/components/Tables/Brand";
import { brandApi } from "@/api/brandApi";
import toast from "react-hot-toast";
import { PackageNavigation } from "@/types/packageNavigation";
import UserTable from "@/components/Tables/user";
import { usersApi } from "@/api/usersApi";

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
    name:'users ',
    link:'/user'
  },
];

async function getAllBrands() {
try {
  const response = await usersApi.getAllusers();
  return response.data;
} catch (error:any) {
  // console.log(error)
  // toast.error(error.message)
}}

const TablesPage = async () => {
  // const response = await getAllBrands()
  // const brands = response.data.brands
  const brands: any = [{
    _id:1,
    brandName:'abc',
    brandDescription:'desc'

  }]
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Users" navigation={packageData}/>
      <div className="flex flex-col gap-10">
        <UserTable listOfUniversity={brands}/>
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;
