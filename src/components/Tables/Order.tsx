"use client";
import Link from "next/link";
import FeaturedSwitch from "../FormElements/Switchers/FeaturedSwitch";
import { Key, useState } from "react";
import { productApi } from "@/api/productApi";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Delete from "@/components/Confirmation/Delete";

type Props = {
  listOfOrders: any;
};

const OrderTable = ({ listOfOrders }: Props) => {
  console.log("orderssssss::::::::::::::::::::::;;", listOfOrders);
  const [searchTerm, setSearchTerm] = useState("");
  let [itemId, setItemId] = useState();

  console.log("first", listOfOrders);

  const [currentPage, setCurrentPage] = useState(1);

  const router = useRouter();
  // router.refresh();

  // async function featuredProduct(productId: any) {
  //   try {
  //     const featuredProduct = await productApi.featuredProduct(productId);

  //     if (featuredProduct.data.success) {
  //       toast.success(featuredProduct.data.message);
  //       router.refresh();
  //     }
  //   } catch (errors: any) {
  //     toast.error(errors.message);
  //   }
  // }

  // async function deleteProduct(id: any) {
  //   try {
  //     const responseDelete = await productApi.deleteProduct(id);

  //     if (responseDelete.data.success) {
  //       toast.success(responseDelete.data.message);
  //       router.refresh();
  //     }
  //   } catch (error: any) {
  //     toast.error(error.message);
  //   }
  // }

  return (
    <>
      <div className="rounded-[10px] border border-stroke bg-white py-4 shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card sm:py-7.5">
        {/* {listOfProducts?.length > 0 ? ( */}
        <>
          <div className="ml-7 flex justify-between">
            <div>
              <form className="mx-auto max-w-md">
                <label
                  htmlFor="default-search"
                  className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Search
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                    <svg
                      className="h-4 w-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full rounded-lg border  border-gray-300 bg-gray-50 p-1 px-20 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Search Order"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </form>
            </div>

            {/* <p className="ml-7 text-lg font-semibold">Items</p> */}
            {/* <Link
                href={"/shop-admin/products/add"}
                className="mb-3 mr-7 rounded-md bg-black px-4 py-2 text-white dark:bg-white dark:text-black"
              >
                Add Product
              </Link> */}
          </div>
          <div className="max-w-full overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-[#F7F9FC] text-left dark:bg-dark-2">
                  <th className=" px-4 py-4 font-medium text-dark dark:text-white">
                    Customer Name
                  </th>
                  <th className=" px-4 py-4 font-medium text-dark dark:text-white">
                    Customer Number
                  </th>
                  <th className=" px-4 py-4 font-medium text-dark dark:text-white">
                    Total Amount
                  </th>
                  <th className=" px-4 py-4 font-medium text-dark dark:text-white">
                    Products
                  </th>
                </tr>
              </thead>
              <tbody>
                {listOfOrders?.map((orders: any, index: any) => (
                  <tr key={index}>
                    <td
                      className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7.5 ${index === orders.length - 1 ? "border-b-0" : "border-b"}`}
                    >
                      <h5 className="text-dark dark:text-white">
                        {orders.userDetails.name}
                      </h5>
                    </td>
                    <td
                      className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7.5 ${index === orders.length - 1 ? "border-b-0" : "border-b"}`}
                    >
                      <h5 className="text-dark dark:text-white">
                        {orders.userDetails.contact}
                      </h5>
                    </td>
                    <td
                      className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7.5 ${index === orders.length - 1 ? "border-b-0" : "border-b"}`}
                    >
                      <h5 className="text-dark dark:text-white">
                        {orders.grandTotalWithTax}
                      </h5>
                    </td>
                    <td
                      className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7.5 ${index === orders.length - 1 ? "border-b-0" : "border-b"}`}
                    >
                        <h5 key={index} className="text-dark dark:text-white">
                        {orders.products.map((product) => product.productName).join(", ")}

                        </h5>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      </div>
    </>
  );
};

export default OrderTable;
