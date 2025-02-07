// import React from "react";
// import { Metadata } from "next";
// import DefaultLayout from "@/components/Layouts/DefaultLaout";
// // import { brandApi } from "@/api/brandApi";
// import toast from "react-hot-toast";
// import { categoryApi } from "@/api/categoryApi";
// import BannerEditForm from "@/components/Form/Banner-form/Update";
// import { bannerApi } from "@/api/bannerApi";

// export const metadata: Metadata = {
//   title: "Next.js Form Elements Page | NextAdmin - Next.js Dashboard Kit",
//   description: "This is Next.js Form Elements page for NextAdmin Dashboard Kit",
// };

// async function getCategory(id:string) {
//   try {
//     const response = await bannerApi.getBanner(id);

//     // const Products = await response.json();
//     return response.data;
//   } catch (error:any) {
//     // toast.error(error.message)
//     console.log(error)


//   }
// }
//  async function getAllcategory() {
//   try {
//     const response = await categoryApi.getAllcategory();
//     console.log(response.data)
//     return response.data;
//   } catch (error:any) {
//     // console.log(error)
//     // toast.error(error.message)
//   }}

//   async function getAllFood() {
//   try {
//     const response = await foodApi.getAllFood();
//     return response.data;
//   } catch (error:any) {
//     // console.log(error)
//     // toast.error(error.message)
//   }}
// const FormElementsPage = async ({ params }:{params:{id:string}}) => {
//   const response = await getCategory(params.id)

//   const category = response?.data?.banner
//   const response2 = await getAllcategory()
//   const categories = response2?.data?.category

//   const response1 = await getAllFood()
//   const foods = response1.data.food
//   return (
//     <DefaultLayout>
//       <BannerEditForm bannerId = { params.id } 
//       banners = { category } foodList={foods} categoryList={categories} />
//     </DefaultLayout>
//   );
// };


// export default FormElementsPage;