"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { appendErrors, Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { any, string, z } from "zod";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import SelectDropdown from "@/components/FormElements/SelectGroup/SelectDropdownForProduct";
import { toast } from "react-hot-toast";
import { serialize } from "object-to-formdata";
import { bannerApi } from "@/api/bannerApi";
import FileUploaderSingle from "@/components/file-upload/singleFileUpload";
import { Typography } from "@mui/material";
import DropzoneWrapper from "@/components/file-upload/dropZone";
import { PackageNavigation } from "@/types/packageNavigation";

const mySchema = z.object({
  shop: z.string().nonempty({ message: "Please select a Food" }),
  category: z.string().nonempty({ message: "Please select a category" }),
  image: z
    .any()
    .refine((file) => file?.size <= MAX_FILE_SIZE, "Max image size is 5MB.")
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported.",
    ),
});

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];
type TMySchema = z.infer<typeof mySchema>;

const packageData: PackageNavigation[] = [
  {
    name: "Dashboard / ",
    link: "/",
  },
  {
    name: "Banners / ",
    link: "/admin/banners/add",
  },
  {
    name: "Add ",
    link: "",
  },
];

type Props = {
  categoryList: any;
  shops: any;
};

const BannerAddForm = ({ categoryList, shops }: Props) => {
  const router = useRouter();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TMySchema>({ resolver: zodResolver(mySchema) });

  const submitData = async (data: any) => {
    try {
      // console.log('data::', data)
      // const formData = serialize(data)  //If there is image in the form
      const response = await bannerApi.createBanner(data);

      if (response.data.success == true) {
        toast.success("Banner Added Successfully.");
        router.push("/admin/banners/");
      }
    } catch (error: any) {
      // if (error.response.status == 404) {
      //   toast.error(error.message);
      // }
    }
  };

  const [matchingFood, setMatchingFood] = React.useState<any[]>([]);

  const handleCategoryChange = (e: any) => {
    console.log(e.target.value);
    const selectedValue = e.target.value;
    const matchedFood = shops.filter(
      (shop: any) => shop.category === selectedValue,
    );
    setMatchingFood(matchedFood);
  };

  return (
    <>
      <Breadcrumb pageName="ADD FORM" navigation={packageData} />
      <div className="gap-9 sm:grid-cols-2">
        <form onSubmit={handleSubmit(submitData)}>
          <div className="flex flex-col gap-9">
            {/* <!-- Input Fields --> */}
            <div className="rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
              <div className="border-b border-stroke px-6.5 py-4 dark:border-dark-3">
                <h3 className="font-medium text-dark dark:text-white">
                  Add Banner
                </h3>
              </div>
              <div className="flex flex-col gap-5.5 p-6.5">
                <div>
                  <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
                    Category
                  </label>
                  <select
                    {...register("category")}
                    onChange={handleCategoryChange}
                    className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
                  >
                    <option hidden>Select--Category</option>
                    {categoryList?.map((category: any, index: number) => (
                      <option key={index} value={category._id}>
                        {category.categoryName}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
                    shops
                  </label>
                  <select
                    {...register("shop")}
                    onChange={handleCategoryChange}
                    className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
                  >
                    <option hidden>Select--shop</option>
                    {shops?.map((shop: any, index: number) => (
                      <option key={index} value={shop._id}>
                        {shop.shopName}
                      </option>
                    ))}
                  </select>
                </div>

              
                   

                <div>
                  <DropzoneWrapper>
                    <Typography
                      // variant="text-body-sm"
                      fontWeight={500}
                      color="textPrimary"
                      sx={{ mb: 2.5 }}
                    >
                      Banner Image
                      {!!errors.image && (
                        <span
                          style={{
                            color: "red",
                            fontSize: "14px",
                            position: "absolute",
                            right: "65px",
                          }}
                        >
                          Invalid Image format {!!errors.image}
                        </span>
                      )}
                    </Typography>
                    <Controller
                      name="image"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <div>
                          <FileUploaderSingle
                            file={field.value}
                            setFile={field.onChange}
                            error={errors.image}
                          />
                        </div>
                      )}
                    />
                  </DropzoneWrapper>

                  {/* <label className="mb-3 block text-body-sm  text-dark dark:text-white">
                    Banner Image
                  </label>
                  <input
                    {...register("bannerImage")}
                    type="file"
                    className="w-full cursor-pointer rounded-[7px] border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-[#E2E8F0] file:px-6.5 file:py-[13px] file:text-body-sm file:font-medium file:text-dark-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-dark dark:border-dark-3 dark:bg-dark-2 dark:file:border-dark-3 dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
                  /> */}
                </div>
                {/* <Link href={"/"}> */}
                <button
                  className="h-10 w-[10%] items-start rounded-lg bg-black text-white dark:bg-white dark:text-black"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Submit
                </button>
                {/* </Link> */}
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default BannerAddForm;
