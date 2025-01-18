import React from "react";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import toast from "react-hot-toast";
import { localityApi } from "@/api/localityApi";
import LocalityUpdateForm from "@/components/Form/locality-form/Update";

export const metadata: Metadata = {
  title: "Next.js Form Elements Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Form Elements page for NextAdmin Dashboard Kit",
};

async function getLocality(id: string) {
  try {
    const response: any = await localityApi.getLocality(id);

    return  response;

  } catch (error: any) {
    // toast.error(error.message)
    console.log(error);
  }
}

const FormElementsPage = async ({ params }: { params: { id: string } }) => {
  const response :any= await getLocality(params.id);
  const locality = response.data.data.locality;
  console.log('data',response)

  return (
    <DefaultLayout>
      <LocalityUpdateForm localityId={params.id} locality={locality} />
    </DefaultLayout>
  );
};

export default FormElementsPage;
