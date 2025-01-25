'use client'
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import ProductTable from "@/components/Tables/Product";
import { productApi } from "@/api/productApi";
import { PackageNavigation } from "@/types/packageNavigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

// Page metadata

// Navigation data
const packageData: PackageNavigation[] = [
  {
    name: 'Dashboard / ',
    link: '/'
  },
  {
    name: 'Products ',
    link: '/shop-admin/products'
  },
];

const TablesPage = () => {
  // State for storing products and loading state
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Function to fetch products from the API
  const getAllProducts = async () => {
    try {
      const response = await productApi.getAllProduct();
      setProducts(response.data?.data?.products || []);
      setLoading(false);
    } catch (error: any) {
      setError(error.message || 'Something went wrong');
      setLoading(false);
      toast.error(error.message || 'Something went wrong');
    }
  };

  // Fetch data when component mounts
  useEffect(() => {
    getAllProducts();
  }, []); // Empty dependency array to run once on mount

  if (loading) {
    return (
      <DefaultLayout>
        <div>Loading...</div>
      </DefaultLayout>
    );
  }

  if (error) {
    return (
      <DefaultLayout>
        <div>Error: {error}</div>
      </DefaultLayout>
    );
  }

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Products" navigation={packageData} />
      <div className="flex flex-col gap-10">
        <ProductTable listOfProducts={products} />
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;
