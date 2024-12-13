"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { appendErrors, Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { any, string, z } from "zod";
import { useRouter } from "next/navigation";
import { brandApi } from "@/api/brandApi";
import { useState } from "react";
import Link from "next/link";
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
import { toast } from "react-hot-toast";
import { serialize } from "object-to-formdata";
import DropzoneWrapper from "@/components/file-upload/dropZone";
import { Typography } from "@mui/material";
import FileUploaderSingle from "@/components/file-upload/singleFileUpload";
import { PackageNavigation } from "@/types/packageNavigation";
import SelectDropdown from "@/components/FormElements/SelectGroup/SelectDropdownForProduct";
import { shopApi } from "@/api/shopApi";

const mySchema = z.object({
  categoryName: z.string().trim().min(1, { message: "Shop Id is required." }),
  
});
const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
type TMySchema = z.infer<typeof mySchema>;


const navigationData: PackageNavigation[] = [
  {
    name: 'Dashboard / ',
    link: '/'
  },
  {
    name: 'Category / ',
    link: '/categories'
  },
  {
    name: 'Add ',
    link: ''
  },
];

const CategoryAddForm = () => {


  const [internal, setInternal] = useState(false);
  const [success, setSuccess] = useState(false);

  const router = useRouter();

  //     const [tasks, setTask] = useState([])
  //   const [input, setInput] = useState()

  //   function click() {
  //     if (input) {
  //       let array = [...tasks, input];
  //       setTask(array);
  //       setInput();
  //     }
  //   }

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<TMySchema>({ resolver: zodResolver(mySchema) });

  const submitData = async (data: any) => {
    try {
      // const formData = serialize(data)
      const response = await shopApi.createshop(data);

      if (response.data.success == true) {

        toast.success('Brand Added Successfully.')
        router.push("/tables/brands");
      }
      toast.success('Shop Added Successfully.')
      router.push("/shop");
    } catch (error: any) {
      if (error.response.status == 404) {
        toast.error(error.message)
      }
    }
  };

  return (
    <>

      <Breadcrumb pageName="ADD SHOP" navigation={navigationData} />
      <div className="gap-9 sm:grid-cols-2">

        <form onSubmit={handleSubmit(submitData)}>
          <div className="flex flex-col gap-9">
            {/* <!-- Input Fields --> */}
            <div className="rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
              <div className="border-b border-stroke px-6.5 py-4 dark:border-dark-3">
                <h3 className="font-medium text-dark dark:text-white">
                  Add Category
                </h3>
              </div>
              <div className="flex flex-col gap-5.5 p-6.5">
                <div>
                  <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
                    Category name
                  </label>
                  <input
                    {...register("categoryName")}
                    type="text"
                    placeholder="Shop Id"
                    className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
                  />
                  {errors.categoryName && (
                    <p className="text-sm text-red-600">
                      {errors.categoryName.message}
                    </p>
                  )}
                </div>

                
  

              
                <div>
                  <DropzoneWrapper>
                    {/* <Typography variant='text-body-sm' fontWeight={500} color="textPrimary" sx={{ mb: 2.5 }}>
                      University Logo
                      {!!errors.universityLogo && (
                        <span style={{ color: 'red', fontSize: '14px', position: 'absolute', right: '65px' }}>Invalid Image format {!!errors.universityLogo}</span>
                      )}
                    </Typography>
                    <Controller
                      name='University Logo'
                      control={control}
                      defaultValue=''
                      render={({ field }) => (
                        <div>
                          <FileUploaderSingle file={field.value} setFile={field.onChange} error={errors.universityLogo} />
                        </div>
                      )}
                    />

                    <div>
                      <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
                        Dean/Director Name
                      </label>
                      <input
                        {...register("dean/director Name")}
                        type="text"
                        placeholder="Dean/Director Name"
                        className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
                      />
                      {errors.universityName && (
                        <p className="text-sm text-red-600">
                          {errors.universityName.message}
                        </p>
                      )}
                    </div> */}

                    {/* <div>
                  <SelectDropdown
                    data={[{ _id: 1, name: 'india' },{ _id: 2, name: 'uae' }]}
                    name={" country"}
                    register={register("productBrand")}
                  />
                  {errors.universityName && (
                    <p className="text-sm text-red-600">
                      {errors.universityName.message}
                    </p>
                  )}
                </div> */}

                   

                   

                  </DropzoneWrapper>
                  {/* <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
                    Brand Logo
                  </label>
                  <input
                    {...register("brandLogo")}
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

export default CategoryAddForm;
