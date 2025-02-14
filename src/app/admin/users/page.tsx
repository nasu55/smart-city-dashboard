import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import BrandTable from "@/components/Tables/Brand";
import { brandApi } from "@/api/brandApi";
import toast from "react-hot-toast";
import { PackageNavigation } from "@/types/packageNavigation";
import ShopTable from "@/components/Tables/shop";
import { shopApi } from "@/api/shopApi";
import UsersTable from "@/components/Tables/Users";

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

async function getAllUsers() {
    try {
      const response = await shopApi.getAllUsers();
      
      return response.data.data;
    } catch (error:any) {
      console.log('Error:::',error);
      // toast.error(error.message)
    }}

const TablesPage = async () => {
  const response = await getAllUsers()

  const users = response.users
  console.log('usersssss',users)

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Shops" navigation={packageData}/>
      <div className="flex flex-col gap-10">
        <UsersTable listOfUsers={users}/>
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;
