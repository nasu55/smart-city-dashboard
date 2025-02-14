import { categoryApi } from "@/api/categoryApi";
import { localityApi } from "@/api/localityApi";
import ShopRegisterForm from "@/components/Form/shop-form/Register-form"

async function getAllLocality() {
try {
  const response = await localityApi.getAllLocality();
  return response?.data;
} catch (error:any) {
  // toast.error(error.message)
  console.log(error)
}
}
async function getAllcategory() {
try {
  const response = await categoryApi.getAllCategories();
  return response?.data;
} catch (error:any) {
  // toast.error(error.message)
  console.log(error)
}
}

const Register = async() => {
    const response = await getAllLocality()
    const localities = response?.data.localities
    const responseCategory = await getAllcategory()
    const Categories = responseCategory?.data.categories
  return (
    <>
    <ShopRegisterForm listOfLocalities={localities} listCategories = {Categories} />
    </>
  );
};

export default Register;