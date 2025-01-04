import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import ProductTable from "@/components/Tables/Product";
import { productApi } from "@/api/productApi";
import { PackageNavigation } from "@/types/packageNavigation";
import toast from "react-hot-toast";

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
    name:'Products ',
    link:'/shop-admin/products'
  },
];

async function getAllProducts() {
try {
  const response = await productApi.getAllProducts();
  return response.data;
} catch (error:any) {
  // toast.error(error.message)
  console.log(error)
}
}

const TablesPage = async () => {
  const response = await getAllProducts()
  const products = response?.data.products
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Products" navigation={packageData}/>
      <div className="flex flex-col gap-10">
        <ProductTable listOfProducts={products}/>
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;