import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import ProductTable from "@/components/Tables/Product";
import { productApi } from "@/api/productApi";
import { PackageNavigation } from "@/types/packageNavigation";
import toast from "react-hot-toast";
import OrderTable from "@/components/Tables/Order";

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
    name:'Orders ',
    link:'/shop-admin/orders'
  },
];

// async function getAllProducts() {
// try {
//   const response = await productApi.getAllProduct();
//   return response.data;
// } catch (error:any) {
//   // toast.error(error.message)
//   console.log(error)
// }
// }

const orders =[{
    hello:'g'
}]
const TablesPage = async () => {
//   const response = await getAllProducts()
//   const products = response?.data.products
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Orders" navigation={packageData}/>
      <div className="flex flex-col gap-10">
        <OrderTable listOfOrders={orders}/>
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;