"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import CheckboxFive from "@/components/FormElements/Checkboxes/CheckboxFive";
import CheckboxFour from "@/components/FormElements/Checkboxes/CheckboxFour";
import CheckboxOne from "@/components/FormElements/Checkboxes/CheckboxOne";
import CheckboxThree from "@/components/FormElements/Checkboxes/CheckboxThree";
import CheckboxTwo from "@/components/FormElements/Checkboxes/CheckboxTwo";
import SwitcherFour from "@/components/FormElements/Switchers/SwitcherFour";
import SwitcherOne from "@/components/FormElements/Switchers/SwitcherOne";
import SwitcherThree from "@/components/FormElements/Switchers/SwitcherThree";
import SwitcherTwo from "@/components/FormElements/Switchers/SwitcherTwo";
import DatePickerTwo from "@/components/FormElements/DatePicker/DatePickerTwo";
import DatePickerOne from "@/components/FormElements/DatePicker/DatePickerOne";
import MultiSelect from "@/components/FormElements/MultiSelect";
import SelectGroupTwo from "@/components/FormElements/SelectGroup/SelectGroupTwo";
import { appendErrors, Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { any, string, z } from "zod";
import { useEffect, useState } from "react";
import { brandApi } from "@/api/brandApi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import toast from "react-hot-toast";
import { serialize } from "object-to-formdata";
import { bannerApi } from "@/api/bannerApi";
import SelectDropdown from "@/components/FormElements/SelectGroup/SelectDropdownForProduct";
import SelectDropdownDefault from "@/components/FormElements/SelectGroup/SelectDefaultDropdown";
import DropzoneWrapper from "@/components/file-upload/dropZone";
import { Typography } from "@mui/material";
import FileUploaderSingle from "@/components/file-upload/singleFileUpload";
import { get } from "http";
import { PackageNavigation } from "@/types/packageNavigation";

const mySchema = z.object({
  bannerImage: z.union([z.any().refine((file) => file?.size <= MAX_FILE_SIZE, 'Max image size is 5MB.')
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported."),z.string()]),
  category: z.string(),
});
const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

type Props = {
  getBanner: any;
  bannerId: string;
  categoryList: [
    {
      _id: string;
      name: string;
    },
  ];
};

type TMySchema = z.infer<typeof mySchema>;

const packageData: PackageNavigation[] = [
  {
    name:'Dashboard / ',
    link:'/'
  },
  {
    name:'Banners / ',
    link:'/tables/banners'
  },
  {
    name:'Update ',
    link:''
  },
];

const BannerForm = ({ bannerId, getBanner, categoryList }: Props) => {
  const bannerCategory = getBanner.data.category;
  // console.log(getBanner.data.category)

  const router = useRouter();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<TMySchema>({
    resolver: zodResolver(mySchema),
    defaultValues: {
      bannerImage: getBanner.data.bannerImage,
    },
  });

  const submitData = async (data: any) => {
    try {
      const formData = serialize(data);
      const response = await bannerApi.updateBanner(bannerId, formData);
      if (response.data.success) {
        toast.success(response.data.message);
        router.push("/tables/banners");
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <Breadcrumb pageName="EDIT FORM" navigation={packageData}/>

      <div className="gap-9 sm:grid-cols-2">
        <form onSubmit={handleSubmit(submitData)}>
          <div className="flex flex-col gap-9">
            {/* <!-- Input Fields --> */}
            <div className="rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
              <div className="border-b border-stroke px-6.5 py-4 dark:border-dark-3">
                <h3 className="font-medium text-dark dark:text-white">
                  Update Banner
                </h3>
              </div>
              <div className="flex flex-col gap-5.5 p-6.5">
                <div>
                  <SelectDropdownDefault
                    data={categoryList}
                    name={"Category"}
                    register={register("category")}
                    defaultValue={bannerCategory}
                  />
                </div>
                <div>
                  {" "}
                  <DropzoneWrapper>
                    <Typography
                      variant="text-body-sm"
                      fontWeight={500}
                      color="textPrimary"
                      sx={{ mb: 2.5 }}
                    >
                      Banner Image
                      {!!errors.bannerImage && (
                        <span style={{ color: "red", fontSize: "14px",position:'absolute',right:'65px' }}>
                          Invalid Image format {!!errors.bannerImage}
                        </span>
                      )}
                    </Typography>
                    <Controller
                      name="bannerImage"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <div>
                          <FileUploaderSingle
                            file={field.value}
                            setFile={field.onChange}
                            error={errors.bannerImage}
                          />
                        </div>
                      )}
                    />
                  </DropzoneWrapper>
                  {/* <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
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

export default BannerForm;
