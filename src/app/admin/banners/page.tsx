import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
// import BrandTable from "@/components/Tables/Brand";
// import { brandApi } from "@/api/brandApi";
import toast from "react-hot-toast";
import { PackageNavigation } from "@/types/packageNavigation";
import BannerTable from "@/components/Tables/Banner";
import { categoryApi } from "@/api/categoryApi";
import { bannerApi } from "@/api/bannerApi";

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
    name:'Banners ',
    link:'/banners'
  },
];

async function getAllBrands() {
try {
  const response = await bannerApi.getAllBanners();
  return response.data;
} catch (error:any) {
  // console.log(error)
  // toast.error(error.message)
}}

const TablesPage = async () => {
  const response = await getAllBrands()
  const banners = response.data.banners

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Banners" navigation={packageData}/>
      <div className="flex flex-col gap-10">
        <BannerTable listOfBanners={banners}/>
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;