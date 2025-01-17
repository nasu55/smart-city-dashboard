import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import ProductTable from "@/components/Tables/Product";
import { categoryApi } from "@/api/categoryApi";
import { PackageNavigation } from "@/types/packageNavigation";
import toast from "react-hot-toast";
import CategoryTable from "@/components/Tables/Category";

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
    name:'Categories ',
    link:'/tables/Categories'
  },
];

async function getAllCategory() {
try {
  const response = await categoryApi.getAllCategories();
  return response?.data;
} catch (error:any) {
  // toast.error(error.message)
  console.log(error)
}
}

const TablesPage = async () => {
  const response = await getAllCategory()
  const categories = response?.data?.categories
  // console.log('data::::::',categories)
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Categories" navigation={packageData}/>
      <div className="flex flex-col gap-10">
        <CategoryTable listOfCategories={categories}/>
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;