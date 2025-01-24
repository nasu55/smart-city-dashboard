import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import { localityApi } from "@/api/localityApi";
import { PackageNavigation } from "@/types/packageNavigation";
import toast from "react-hot-toast";
import LocalityTable from "@/components/Tables/Locality";

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
    name:'Localities ',
    link:'/tables/Localities'
  },
];

async function getAllLocality() {
try {
  const response = await localityApi.getAllLocality();
  return response?.data;
} catch (error:any) {
  // toast.error(error.message)
  console.log(error)
}
}

const TablesPage = async () => {
  const response = await getAllLocality()
  const localities = response?.data.localities
   console.log('data::::::',localities)
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Localities" navigation={packageData}/>
      <div className="flex flex-col gap-10">
        <LocalityTable listOfLocalities={localities}/>
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;