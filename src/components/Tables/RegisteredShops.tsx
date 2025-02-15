"use client";
import { brandApi } from "@/api/brandApi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-hot-toast";
import Delete from "@/components/Confirmation/Delete";
import { shopApi } from "@/api/shopApi";
// import ShopTable from "/shop";

type Props = {
  listOfShops: [];
};

const RegisteredShopsTable = ({ listOfShops }: Props) => {
  console.log("data:::", listOfShops);
  // const [searchTerm, setSearchTerm] = useState("");
  let [itemId, setItemId] = useState();
  // const [currentPage, setCurrentPage] = useState(1);
  // const itemsPerPage = 5;

  // const filteredBrands = listOfBrands.filter((brandItem: any) =>
  //   brandItem.brandName.toLowerCase().includes(searchTerm.toLowerCase()),
  // );

  // const totalPages = Math.ceil(filteredBrands.length / itemsPerPage);
  // const brandData = filteredBrands.slice(
  //   (currentPage - 1) * itemsPerPage,
  //   currentPage * itemsPerPage,
  // );

  // const handlePageChange = (pageNumber: number) => {
  //   if (pageNumber >= 1 && pageNumber <= totalPages) {
  //     setCurrentPage(pageNumber);
  //   }
  // };

  const router = useRouter();
  // router.refresh();

  async function featuredSubCategory(subCategoryId: any) {
    try {
      const featuredSubCategory = await shopApi.featuredShop(subCategoryId);

      if (featuredSubCategory.data.success == true) {
        toast.success(featuredSubCategory.data.message);
        router.refresh();
      }
    } catch (errors: any) {
      toast.error(errors.message);
    }
  }



  async function deleteShop(id: any) {
    try {
      const responseDelete = await shopApi.deleteshop(id);

      if (responseDelete.data.success == true) {
        toast.success(responseDelete.data.message);
        router.refresh();
      }
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  }

  const approveShop = async (id:any) => {
    try {
        const response = await shopApi.approveshop(id)
    if (response.data.success == true) {
        toast.success(response.data.message);
        router.refresh();
      }
    
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  }
  const rejectShop = async (id:any) => {
    try {
        const response = await shopApi.rejectshop(id)
    if (response.data.success == true) {
        toast.success(response.data.message);
        router.refresh();
      }
    
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  }

  return (
    <>
      <div className="rounded-[10px] border border-stroke bg-white py-4 shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card sm:py-7.5">
        <div className="ml-7 flex justify-between">
          <div>
            <form className="mx-auto max-w-md"></form>
          </div>

        </div>
        <div className="max-w-full overflow-x-auto">
          <table className="w-full ">
            <thead>
              <tr className="bg-[#F7F9FC] text-left dark:bg-dark-2">
                <th className="min-w-[150px] px-4 py-4 font-medium text-dark dark:text-white xl:pl-7.5">
                  Shop Name
                </th>
                <th className="min-w-[220px] px-4 py-4 font-medium text-dark dark:text-white xl:pl-7.5">
                  Owner Name
                </th>
                <th className="min-w-[150px] px-4 py-4 font-medium text-dark dark:text-white">
                  User name
                </th>
                <th className="min-w-[150px] px-4 py-4 font-medium text-dark dark:text-white xl:pl-7.5">
                  Location
                </th>
                <th className="min-w-[120px] px-4 py-4 font-medium text-dark dark:text-white xl:pl-7.5">
                  Approve
                </th>
                <th className="px-4 py-4 text-right font-medium text-dark dark:text-white xl:pr-7.5">
                  Reject
                </th>
              </tr>
            </thead>
            <tbody>
              {listOfShops?.map((shops: any, index: number) => (
                <tr key={index}>
                  <td
                    className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7.5 ${index === shops.length - 1 ? "border-b-0" : "border-b"}`}
                  >
                    <h5 className="text-dark dark:text-white">
                      {shops.shopName}
                    </h5>
                    {/* <p className="mt-[3px] text-body-sm font-medium">
                    ${packageItem.price}
                  </p> */}
                  </td>
                  <td
                    className={`border-[#eee] px-4 py-4 dark:border-dark-3 ${index === shops.length - 1 ? "border-b-0" : "border-b"}`}
                  >
                    <p className="text-dark dark:text-white">
                      {shops.ownerName}
                    </p>
                  </td>
                  <td
                    className={`border-[#eee] px-4 py-4 dark:border-dark-3 ${index === shops.length - 1 ? "border-b-0" : "border-b"}`}
                  >
                    <p className="text-dark dark:text-white">
                      {shops.userName}
                    </p>
                  </td>
                  <td
                    className={`border-[#eee] px-4 py-4 dark:border-dark-3 ${index === shops.length - 1 ? "border-b-0" : "border-b"}`}
                  >
                    <p className="text-dark dark:text-white">
                      {shops.locations.localityName}
                    </p>
                  </td>
                  <td
                    className={`border-[#eee] px-4 py-4 dark:border-dark-3 ${index === shops.length - 1 ? "border-b-0" : "border-b"}`}
                  >
                    <label className="flex cursor-pointer select-none items-center">
                      <button onClick={() => approveShop(shops._id)}>Approve</button>
                    </label>
                  </td>

                  <td
                    className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pr-7.5 ${index === shops.length - 1 ? "border-b-0" : "border-b"}`}
                  >
                    <div className="flex items-center justify-end space-x-3.5">
                    <button onClick={() => rejectShop(shops._id)}>Reject</button>
                      
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* {brandData.length == 5 ? ( */}
        <div className="mt-4 flex items-center justify-between">
      
        </div>
      </div>
    </>
  );
};

export default RegisteredShopsTable;
